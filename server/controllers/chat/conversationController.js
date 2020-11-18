const mongoose = require('mongoose'),
  Message = require('../../db/models/chat/privateMessages/messageModel'),
  User = require('../../db/models/userModel'),
  Conversation = require('../../db/models/chat/privateMessages/conversationModel');

// initiation blank conversation from pressing "say hi button!"
exports.createConversation = async (req, res) => {
  const { sender, recipient } = req.body;
  if (!recipient) {
    return res.status(500).json('Oopsie!');
  }
  try {
    const conversation = new Conversation(req.body);
    conversation.participants.push(sender, recipient);
    await conversation.save();
    console.log(conversation);

    // this is for inbox
    // let userOne = await User.findById(sender);
    // let userTwo = await User.findById(recipient);

    // userOne.inbox.push(conversation);
    // userTwo.inbox.push(conversation);
    // await userOne.save();
    // await userTwo.save();

    res.status(201).json(conversation);
  } catch (error) {
    console.log(error);
    res.status(500).json('Oops...');
  }
};

//   messageSchema.methods.addToConversation = async function () {
//     const conversation = Conversation.ObjectId;
//     // next two lines are for matching purposes
//     const sender =  this.sender;
//     const recipient = this.recipient;
//     const messages = {text: this.text, sender: this.sender, timestamp: this.timestamp};
//     conversation.messages.push(messages);
//     return conversation;
// };
// messageSchema.methods.createNewConversation = async function () {
//     const conversation = new Conversation(req.body);
//     // for theory testing. can refactor later.
//     const sender = this.sender;
//     const recipient = this.recipient;
//     const participants = {sender, recipient};
//     const messages = {text: this.text, sender: this.sender, timestamp: this.timestamp};
//     await conversation.push(participants);
//     await conversation.push(messages);
//     await conversation.save();
//     return conversation;
// };

//     message = this.message;
//     await Conversation.find({'participants': { $all: [ mongoose.Types.ObjectId(req.params.sender),
//     mongoose.Types.ObjectId(req.params.recipient) ]}}, async function(err, conversation){
//         if (!Conversation) {
//             await message.createConversation();
//             res.json(conversation);
//             console.log(conversation.id);
//         } else
//     });
//  {
//     if (!Conversation) {

//     }

//         (err)
//     {
//         res.send(err);
//     }
//     console.log(user);
//     res.json(user);

//  });

//     try {
//         const conversation = new Message(req.body);
//         // conversation.find().populate('personid').exec(function (err,res) {
//         //     if(err){
//         //         console.log('error');
//         //     }
//         //     else{
//         //         console.log(res);
//         //         // or just name
//         //         console.log(res.personid.name);
//         //     }
//         // });
//         await conversation.save();
//         res.status(200).json( {message: 'sent!'} );
//       } catch (error) {
//             res.status(400).json({ error: error.2 mn
//       }
//   };

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

//   exports.deleteConversationById = async (req, res) => {
//     const _id = req.params.id;
//       try {
//         const conversation = await Conversation.findByIdAndDelete({ _id });
//         if (!conversation) {return res.status(404).json({ message: 'Nothing to delete!'});}
//         await res.status(200).json( {message: `Conversation deleted. Would you like to remove ${ recipient } from your match list?`} );
//       } catch (error) {
//         res.status(400).json({ error: error.message });
//       }
//     };
