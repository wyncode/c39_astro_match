const User = require('../db/models/userModel'),
  cloudinary = require('cloudinary').v2,
  //   {
  //     sendWelcomeEmail,
  //     sendCancellationEmail,
  //     forgotPasswordEmail
  //   } = require('../emails/index'),
  jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {

  let nameArr = req.body.name.split(' ');
  req.body.firstName = nameArr[0];
  req.body.lastName = nameArr[1];

  let birthArr = req.body.birthday.split('-');
  req.body.birthDate = Number(birthArr[2]);
  req.body.birthMonth = Number(birthArr[1]);
  req.body.birthYear = Number(birthArr[0]);

  // console.log(req.body)
  User.create(req.body, (err, user) => {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      const token = user.generateAuthToken();
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
