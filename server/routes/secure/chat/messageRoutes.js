const router = require('express').Router(),
  {
    sendMessage,
    getMessageById,
    deleteMessageById
  } = require('../../../controllers/chat/messageController');

router.post('/messages/', sendMessage);
router.get('/messages/:id', getMessageById); //auto-get last 5 messages displayed
router.delete('/messages/:id', deleteMessageById);

module.exports = router;
