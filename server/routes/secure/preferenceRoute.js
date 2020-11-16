const router = require('express').Router();
const {
  getPreference,
  updatePreference,
  deletePreference,
  createPreference
} = require('../../controllers/preferenceController');

//UPDATE GET
router.get('/', getPreference);
//UPDATE PREF
// router.post('/pref', updatePreference);
router.post('/test', createPreference);

//DELETE PREF
router.delete('/', deletePreference);

module.exports = router;
