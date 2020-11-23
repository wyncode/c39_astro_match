const router = require('express').Router(),
  {
    createConversation
    // getConversation,
    // deleteConversation
  } = require('../../../controllers/chat/conversationController');

router.post('/chat', createConversation);
// router.get('/thread', getConversation); <search for conversation collection where both conditions are true. return.
//router.patch('/thread', gitFetchConversation) <--if message id is not there (filter method) return array. sort by time. append.
// forEach person...if user===user, store as user on browser-client end. I know it sounds crazy but each one's gotta be one.
// router.delete('/:id', deleteConversation);



module.exports = router;
