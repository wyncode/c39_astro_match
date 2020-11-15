const Preference = require('../db/models/preferenceModel');

//which export model to use
exports.getPreference = async (req, res) => {};
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
    // sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
