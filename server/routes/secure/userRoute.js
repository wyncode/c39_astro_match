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
    getLastMessage
    // getUserById
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
// router.get('/match', getUserById);
router.get('/lastMessage', getLastMessage);

module.exports = router;
