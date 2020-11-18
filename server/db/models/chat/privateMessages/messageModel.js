const mongoose = require('mongoose'),
  moment = require('moment');
const Conversation = require('./conversationModel');

const messageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conversation'
    },
    // participants: {
    //     type: this.messageSchema.recipient.type && this.messageSchema.sender.type
    // },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    senderAvatar: {
      type: String
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    text: {
      type: String,
      required: true,
      max: 2000,
      read: Boolean
    },
    newStatus: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamp: true
  }
);

messageSchema.methods.addToConversation = async function () {
  const conversation = Conversation.ObjectId;
  // next two lines are for matching purposes
  const sender = this.sender;
  const recipient = this.recipient;
  console.log(sender);
  console.log(recipient);
  const messages = {
    text: this.text,
    sender: this.sender,
    timestamp: this.timestamp
  };

  conversation.messages.push(messages);
  return conversation;
};

messageSchema.methods.createNewConversation = async function () {
  const conversation = new Conversation(req.body);
  // for theory testing. can refactor later.
  const sender = this.sender;
  const recipient = this.recipient;
  const participants = { sender, recipient };
  const messages = {
    text: this.text,
    sender: this.sender,
    timestamp: this.timestamp
  };
  await conversation.push(participants);
  await conversation.push(messages);
  await conversation.save();
  return conversation;
};

// VIRTUALS ====>
// const userSchema = mongoose.Schema({
//     email: String
//   });
//   // Create a virtual property `domain` that's computed from `email`.
//   userSchema.virtual('domain').get(function() {
//     return this.email.slice(this.email.indexOf('@') + 1);
//   });
//   const User = mongoose.model('User', userSchema);

//   let doc = await User.create({ email: 'test@gmail.com' });
//   // `domain` is now a property on User documents.
//   doc.domain; // 'gmail.com'

const Message = mongoose.model('Message', messageSchema);
// const Conversation = mongoose.model('Conversation', messageSchema);

module.exports = Message;
