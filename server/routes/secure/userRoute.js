const router = require('express').Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    deleteUser,
    uploadAvatar,
    updatePassword,
    getAllMatches,
    getInbox,
    getSingleUser
  } = require('../../controllers/userControllers');

router.get('/me', getCurrentUser);
router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutall', logoutAllDevices);
router.delete('/', deleteUser);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.get('/matches', getAllMatches);
router.get('/inbox', getInbox);
router.get(`/match/:id`, getSingleUser);

module.exports = router;
