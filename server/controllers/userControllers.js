const User = require('../db/models/userModel'),
  cloudinary = require('cloudinary').v2,
  {
    // sendWelcomeEmail,
    // sendCancellationEmail,
    // forgotPasswordEmail
  } = require('../emails/index'),
  jwt = require('jsonwebtoken');
getMe = require('../../zodiac.json');

exports.createUser = (req, res) => {
  let nameArr = req.body.name.split(' ');
  req.body.firstName = nameArr[0];
  req.body.lastName = nameArr[1];

  User.create(req.body, async (err, user) => {
    console.log(req.body);
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      const token = await user.generateAuthToken();
      res.cookie('jwt', token, {
        httpOnly: true,
        sameSite: 'Strict',
        secure: process.env.NODE_ENV !== 'production' ? false : true
      });
      res.status(201).json(user);
    }
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e.toString() });
  }
};

exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '10m' }
    );
    // forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.passwordRedirect = async (req, res) => {
  const { token } = req.params;
  try {
    jwt.verify(token, process.env.JWT_SECRET, function (err) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/update-password');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  res.json(req.user);
};

exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'avatar'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));

    await req.user.save();

    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.logoutAllDevices = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out from all devices!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    // sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.status(200).json({ message: 'password updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMatches = async (req, res) => {
  try {
    console.log(req.user);
    await req.user.populate('matches').execPopulate();
    let { sunSign } = req.user;
    console.log(sunSign);
    let [signArr] = getMe.zodiac.filter((sign) => sign.name === sunSign);
    let compArr = (compareMe) =>
      signArr.compatability.filter((sign) => sign.name === compareMe);
    let testArr = req.user.matches.map((match) => ({
      firstName: match.firstName,
      lastName: match.lastName,
      age: match.age,
      sunSign: match.sunSign,
      moonSign: match.moonSign,
      ascSign: match.ascSign,
      score: compArr(match.sunSign)[0].score,
      bio: match.bio
    }));
    console.log('**********************');
    res.json(testArr);
  } catch (error) {
    console.log(error);
    res.status(400).json(`Unable to do: ${error}`);
  }
};

exports.getInbox = async (req, res) => {
  //need to isolate conversation ids
  let conversationIds = req.user.inbox;
  try {
    await req.user
      .populate({
        path: 'inbox',
        populate: {
          path: 'participants'
        }
      })
      .execPopulate();
    let inboxArr = req.user.inbox;
    console.log(req.user._id.toString());
    let participants2 = inboxArr.map((obj) => obj.participants);
    let otherPeople = participants2.flat(1);
    let sendBackArr = otherPeople.map((x) => {
      if (x._id.toString() !== req.user._id.toString()) {
        return {
          firstName: x.firstName,
          avatar: x.avatar,
          match_id: x._id
        };
      }
    });
    // right now just information will figoure out how to get the message later
    sendBackArr = sendBackArr.filter((x) => x);
    sendBackArr = sendBackArr.map((x, i) => ({
      ...x,
      conversation_id: conversationIds[i]
    }));
    res.send(sendBackArr);
  } catch (error) {
    console.log(error);
    res.status(400).json('Please try again...');
  }
};
