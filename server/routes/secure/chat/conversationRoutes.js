const router = require('express').Router(),
  {
    createConversation
    // getConversation,
    // deleteConversation
  } = require('../../../controllers/chat/conversationController');

router.post('/chat', createConversation);
// router.get('/', getConversation);
// router.delete('/:id', deleteConversation);

module.exports = router;
