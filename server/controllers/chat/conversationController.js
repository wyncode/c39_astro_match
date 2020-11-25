const mongoose = require('mongoose'),
  Message = require('../../db/models/chat/privateMessages/messageModel'),
  User = require('../../db/models/userModel'),
  Conversation = require('../../db/models/chat/privateMessages/conversationModel');

exports.createConversation = async (req, res) => {
  const { participants } = req.body;
  try {
    const conversation = new Conversation(req.body);
    // conversation.participants.push(participants);
    conversation.participants = participants;
    console.log('I made it after the array');
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
  await Conversation.find(
    {
      participants: {
        $all: [
          mongoose.Types.ObjectId(req.params.sender),
          mongoose.Types.ObjectId(req.params.recipient)
        ]
      }
    },
    async function (err, conversation) {
      if (!Conversation) {
        console.log('No conversation!');
        await message.createConversation(req.body);
        res.json(conversation);
        await conversation.save();
        return conversation;
      } else {
        res.status(201).json(conversation);
      }
    }
  );
};

//   exports.getConversationById = async (req, res) => {
//     const _id = req.params.id;
//     console.log(_id);
//     if (!mongoose.Types.ObjectId.isValid(_id))
//       return res.status(400).json({ message: 'not a valid thread' });
//     try {
//       const conversation = await Conversation.findById({ _id });
//       if (!conversation) return res.status(400).json({ alert: 'Seems lonely. Say hello!' });
//       res.status(200).json(conversation);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };

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

// conversationSchema.methods.pre = async function () {
//   Conversation.participants.populate(req.body.params)
// }

//   messageSchema.methods.addToConversation = async function () {
//     const conversation = Conversation.ObjectId;
//     try {
//     const sender =  user.id
//     const recipient = this.recipient;
//     const messages = {text: this.text, sender: this.sender, timestamp: this.timestamp};
//     conversation.messages.push(messages);
//     return conversation;
// };
