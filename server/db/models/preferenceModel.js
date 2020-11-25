const mongoose = require('mongoose'),
  validators = require('validator'),
  zipCodeData = require('zipcode-city-distance'),
  getMe = require('../../../zodiac.json');

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
  eligibleZipCodes: [
    {
      type: Number
    }
  ]
});

//preSave, fetch to the zodiac json and push in their compatability
PreferenceSchema.pre('save', async function (next) {
  const pref = this;
  //could add this to create a prefernces
  if (pre.isModified('zodiac')) {
    let { sunSign } = await User.findOne({ _id: pref.owner });
    console.log(sunSign);
    let [signArr] = getMe.zodiac.filter((sign) => sign.name === userSign);
    console.log(signArr);
    let newSignArr = signArr.compatability.filter(
      (match, i) => match.score >= 75
    );
    console.log(newSignArr);
    newSignArr.forEach((x) => pref.zodiac.push(x.name));
    pref.zodiac = [...new Set(pref.zodiac)];
  }

  if (pref.isModified('distance')) {
    let { zipCode } = await User.findOne({ _id: pref.owner });
    const zipRadius = zipCodeData.getRadius(zipCode, pref.distance, 'M');
    const zipCodeArr = zipRadius.map((x) => x.zipcode);
    pref.eligibleZipCodes = zipCodeArr;
  }
  next();
});
//ALSO fetch to package to return zipcodes that are in their area push it into their preferences hmmmm

//push eligible zipcodes in their preferences array

//PRE SAVE

module.exports = mongoose.model('Preference', PreferenceSchema);
