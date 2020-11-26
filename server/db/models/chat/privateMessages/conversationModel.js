const mongoose = require('mongoose'),
  moment = require('moment');

const conversationModel = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }
  ],
  newMessage: {
    type: Boolean,
    default: false
  }
});

const Conversation = mongoose.model('Conversation', conversationModel);

module.exports = Conversation;
