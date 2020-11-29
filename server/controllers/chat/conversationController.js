const mongoose = require('mongoose'),
  Message = require('../../db/models/chat/privateMessages/messageModel'),
  User = require('../../db/models/userModel'),
  Conversation = require('../../db/models/chat/privateMessages/conversationModel');

exports.createConversation = async (req, res) => {
  const { participants } = req.body;
  try {
    const conversation = new Conversation(req.body);
    conversation.participants = participants;
    await conversation.save();
    let userOne = await User.findById(participants[0]);
    let userTwo = await User.findById(participants[1]);
    userOne.inbox.push(conversation);
    userTwo.inbox.push(conversation);
    await userOne.save();
    await userTwo.save();
    console.log(conversation);
    res.status(201).json(conversation);
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops...');
  }
};

exports.getConversation = async (req, res) => {
  try {
    let conversation = await Conversation.findById(req.params.id);
    await conversation.populate('messages').execPopulate();
    await conversation.populate('participants').execPopulate();
    let sendMeBack = conversation.messages.map((message) => ({
      text: message.text,
      from:
        message.participants.sender.toString() === req.user._id.toString()
          ? 'user'
          : 'match'
    }));
    let participants = conversation.participants.map((x) => ({
      firstName: x.firstName.toUpperCase(),
      lastName: x.lastName,
      ID: x._id.toString()
    }));
    if (sendMeBack.length >= 20) {
      sendMeBack = sendMeBack.slice(sendMeBack.length - 20);
    }
    res
      .status(201)
      .json({ messages: [...sendMeBack], participants: [...participants] });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }

  // async function (err, conversation) {
  //   if (!Conversation) {
  //     console.log('No conversation!');
  //     await message.createConversation(req.body);
  //     res.json(conversation);
  //     await conversation.save();
  //     return conversation;
  //   } else {
  //     res.status(201).json(conversation);
  //   }
  // }
};

exports.deleteConversationById = (req, res) => {
  Conversation.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json('Conversation deleted!');
      }
      res.status(204).json(data);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};

exports.updateConversationById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['messages', 'newStatus'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'message not sent..try again' });
  try {
    updates.forEach(
      (update) =>
        (req.conversation[update] = req.conversation[update].append(
          body[update]
        ))
    );
    await req.conversation.save();
    res.json(req.conversation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
