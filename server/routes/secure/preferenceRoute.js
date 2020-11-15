const router = require('express').Router();
const {
  getPreference,
  updatePreference,
  deletePreference
} = require('../../controllers/preferenceController');

//UPDATE GET
router.get('/', getPreference);
//UPDATE PREF
router.patch('/', updatePreference);

//DELETE PREF
router.delete('/', deletePreference);

module.exports = router;
