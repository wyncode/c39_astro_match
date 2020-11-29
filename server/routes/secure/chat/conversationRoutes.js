const router = require('express').Router(),
  {
    createConversation,
    getConversation,
    updateConversationById,
    deleteConversationById
    // getConversationById
  } = require('../../../controllers/chat/conversationController');

router.post('/chat', createConversation);
router.get('/chat/:id', getConversation);
router.patch('/chat/:id', updateConversationById);
router.delete('/chat/:id', deleteConversationById);
// router.get('/inbox/:id', getConversationById);

module.exports = router;
