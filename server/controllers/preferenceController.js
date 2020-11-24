const Preference = require('../db/models/preferenceModel');

//CREATE PREFERENCE
exports.createPreference = async (req, res) => {
  console.log(req.body);
  try {
    const preferences = await new Preference({
      ...req.body,
      owner: req.user._id
    });
    await preferences.save();
    res.status(200).send(preferences);
  } catch (error) {
    console.log(`Error creating preferences at ${new Date()}: ${error}`);
    res.status(400).json({ error: error.message });
  }
  // Preference.create(req.body, (error, preferences) => {
  //   if (error) {
  //     console.log(`Error creating preferences at ${new Date()}: ${error}`);
  //   } else {
  //     res.status(201).json(preferences);
  //   }
  // });
};

//GET PREFERENCE
exports.getPreference = async (req, res) => {
  try {
    const preferences = await Preference.findOne(req.params.id, req.user._id);
    if (!preferences) {
      console.log(`Preference for user does not exist`);
      res.status(410);
    } else {
      res.status(201).json(preferences);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

//UPDATE PREF
exports.updatePreference = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['sunSign', 'religion', 'location', 'age'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'Invalid updates' });
  try {
    //need to determine how we are going to pass the ID into the request
    //probably as owner the front end
    let preferences = await Preference.findOneAndUpdate(owner);
    updates.forEach((update) => (preferences[update] = req.body[update]));
    //save the updated user in the db
    await preferences.save();
    //return preferences to the front it
    //perhaps able to display
    res.json(preferences);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE PREF
exports.deletePreference = async (req, res) => {
  try {
    await Preference.remove();
    res.json({ message: 'preference deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const task = await Task.findOneAndDelete({
//   _id: req.params.id,
//   owner: req.user._id
// })
