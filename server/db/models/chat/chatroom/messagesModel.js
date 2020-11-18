const mongoose = require('mongoose'),
  moment = require('moment');
Room = require('./roomModel');

const messagesSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    ],
    title: {
      type: String,
      required: true
      // set all others aside from OP as, perhaps, "replyTo.ObjectId.toString"
    },
    messages: [
      {
        type: String,
        required: true,
        max: 2000,
        read: Boolean
      }
    ],
    messageCount: {
      type: Number,
      default: 0
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
    }
  },
  {
    timestamp: true
  }
);

const Messages = mongoose.models('Messages', messagesModel);

module.exports = Messages;
