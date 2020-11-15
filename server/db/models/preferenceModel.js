const mongoose = require('mongoose');

//PREFERENCES SCHEMA

const PreferenceSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true
  },
  sunSign: [
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
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error('That is not a valid age');
      }
    }
  },
  location: [
    {
      type: Number
    },
    {
      type: Number
    }
  ]
});

module.exports = mongoose.model('Preference', PreferenceSchema);