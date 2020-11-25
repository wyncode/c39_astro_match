const router = require('express').Router();
const {
  getPreference,
  updatePreference,
  deletePreference,
  createPreference
} = require('../../controllers/preferenceController');
// router.patch('/udpate/:id', updatePreference);
router.get('/:id', getPreference);

router.patch('/update/:id', updatePreference);
router.post('/', createPreference);
router.delete('/delete/:id', deletePreference);

module.exports = router;
