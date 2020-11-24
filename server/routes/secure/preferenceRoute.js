const router = require('express').Router();
const {
  getPreference,
  updatePreference,
  deletePreference,
  createPreference
} = require('../../controllers/preferenceController');

router.get('/', getPreference);

// router.post('/udpate/:id', updatePreference);
router.post('/', createPreference);
router.delete('/delete/:id', deletePreference);

module.exports = router;
