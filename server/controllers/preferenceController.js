const Preference = require('../db/models/preferenceModel'),
  User = require('../db/models/userModel');

exports.createPreference = async (req, res) => {
  const { age } = req.body;
  console.log('***************');
  try {
    const preferences = await new Preference({
      ...req.body,
      owner: req.user._id
    });
    console.log('Adsad');
    await preferences.save();
    console.log('Adsad');
    let user = await User.findOne({ _id: req.user._id });
    user.partnerPreference = preferences._id;
    console.log(user);
    // Model
    // .where('age').gte(25)
    // .where('tags').in(['movie', 'music', 'art'])
    // .select('name', 'age', 'tags')
    // .skip(20)
    // .limit(10)
    // .asc('age')
    // .slaveOk()
    // .hint({ age: 1, name: 1 })
    // .exec(callback);
    let matches = await User.where('age').gte(age[0]).where('age').lte(age[1]);
    console.log(matches);
    await user.save();
    //will add match logic here

    res.status(200).send(preferences);
  } catch (error) {
    console.log(`Error creating preferences at ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
};

exports.getPreference = async (req, res) => {
  try {
    const preferences = await Preference.findById(req.params.id);
    if (!preferences) {
      console.log(`Preference for user does not exist`);
      res.status(410);
    } else {
      res.status(201).json(preferences);
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

//UPDATE PREF
exports.updatePreference = async (req, res) => {
  const _id = req.params.id;
  const owner = req.user._id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['zodiac', 'distance', 'age', 'interestedIn'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    let preferences = await Preference.findOneAndUpdate({ _id, owner });
    updates.forEach((update) => (preferences[update] = req.body[update]));
    await preferences.save();
    res.json(preferences);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePreference = async (req, res) => {
  try {
    await Preference.remove();
    res.json({ message: 'preference deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
