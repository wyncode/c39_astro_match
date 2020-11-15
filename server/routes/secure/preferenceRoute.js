const router = require('express').Router();

//UPDATE PREF
router.get('/', getPreference);
router.patch('/', updatePreference);
//DELETE PREF
router.delete('/', deletePreference);

module.exports = router;
