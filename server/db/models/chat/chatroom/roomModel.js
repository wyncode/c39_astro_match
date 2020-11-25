const mongoose = require('mongoose'),
  moment = require('moment');

const roomSchema = () =>
  new mongoose.Schema(
    {
      originalPoster: {
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
      },
      category: {
        type: String,
        enum: ['Air', 'Earth', 'Fire', 'Water']
        // enum: ['Horoscopes', 'Vedic Astrology', 'Tarot', 'Numerology', 'GirlTalk', 'ManCave', ']
      },
      messages: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Messages'
        }
      ],
      messageCount: {
        type: Number,
        default: 0
      }
    },
    {
      created: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: `${Room.created.default}`
      }
    }
  );

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

// onClick - deleting your thread
//if.... (req.id === originalPoster.type && participants.length === 1) {
// try{
// const deletedRoom = await Room.findByIdAndDelete({
//     id: req.params.id,
//     owner: req.user.id
// });
// if (!deletedRoom) return res.status(404).json({ message: 'Topic not found!'});
// res.status(200).json({ message: 'Topic deleted!'});
// } catch (e) {
//     res.status(400).json({error: error.message})
// }
// } else {
// return status(300).json({ message: 'Uh-oh! Looks like this topic can no longer be removed. If you feel this is an error, please contact admin.'})
// };
