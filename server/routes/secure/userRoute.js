const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    deleteUser,
    uploadAvatar,
    updatePassword,
    getAllMatches
  } = require('../../controllers/userControllers');

router.get('/me', getCurrentUser);
// router.get('/me/match', getUserMatches);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutall', logoutAllDevices);
router.delete('/', deleteUser);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);

router.get('/matches', getAllMatches);

module.exports = router;
