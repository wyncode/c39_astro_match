const mongoose = require('mongoose'),
  validators = require('validator');

//PREFERENCES SCHEMA

const PreferenceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true
  },
  zodiac: [
    {
      type: String,
      enum: [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces'
      ]
    }
  ],
  religion: String,
  age: [
    {
      type: Number,
      validate(value) {
        if (value < 18) {
          throw new Error('That is not a valid age');
        }
      }
    }
  ],
  interestedIn: [
    {
      type: String,
      // required: true,
      trim: true,
      enum: ['Non-binary', 'Cis Man', 'Cis Woman', 'Trans Man', 'Trans Woman']
    }
  ],
  distance: {
    type: Number
  },
  //will need to figure out how to fetch location relative to others
  location: [
    {
      type: Number
    },
    {
      type: Number
    }
  ]
});

PreferenceSchema.pre('save', async function (next) {
  const preference = this;
  if (preference.isModified('zodiac')) {
    preference.zodiac = preference.zodiac.filter((x) => x);
  }
  next();
});
module.exports = mongoose.model('Preference', PreferenceSchema);
