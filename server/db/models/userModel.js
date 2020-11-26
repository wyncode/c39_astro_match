const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  {
    getLatLonFZ,
    getLatLonFC
  } = require('../../controllers/apiCalls/coordinatesController'),
  { getSigns } = require('../../controllers/apiCalls/zodiacController');

const signs = [
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
];

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot be password');
        }
        if (value.length < 8) {
          throw new Error('Password must be at least 8 characters');
        }
      }
    },
    birthdayCoords: [
      {
        type: Number
      }
    ],
    city: {
      type: String,
      trim: true
    },
    zipCode: {
      type: Number,
      // required: true,
      trim: true,
      validate(value) {
        if (!value) {
          throw new Error('Zip code is empty');
        }
        if (value.toString().length !== 5) {
          throw new Error('Zip code must be 5 digits');
        }
      }
    },
    currentCoords: [
      {
        type: Number
      }
    ],
    birthday: {
      type: String,
      required: true,
      trim: true
    },
    birthCountry: {
      type: String,
      trim: true
    },
    birthState: {
      type: String,
      trim: true
    },
    birthCity: {
      type: String,
      trim: true
    },
    birthTime: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      enum: ['Non-binary', 'Cis Man', 'Cis Woman', 'Trans Man', 'Trans Woman']
    },
    sunSign: {
      type: String,
      trim: true,
      enum: [...signs]
    },
    moonSign: {
      type: String,
      trim: true,
      enum: [...signs]
    },
    ascSign: {
      type: String,
      trim: true,
      enum: [...signs]
    },
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
      }
    ],
    inbox: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        unique: true
      }
    ],
    partnerPreference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Preference',
      // required: true,
      trim: true
    },
    age: {
      type: Number
    },
    avatar: {
      type: String
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamp: true
  }
);

// UserSchema.virtual('Inbox', {
//   ref: 'Conversation',
//   localField: '_id',
//   foreignField: 'owner'
// });

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      name: user.name
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password, try again.');
  return user;
};

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  if (user.isModified('birthday')) {
    const TODAY = new Date().getTime();
    const ONE_YEAR = 31536000000;
    const birthday = new Date(user.birthday);
    user.age = Math.floor((TODAY - birthday.getTime()) / ONE_YEAR);
  }

  if (user.isModified('birthCity')) {
    let retCoords = await getLatLonFC(user.birthCity, user.birthState);
    user.birthdayCoords = retCoords;
  }

  if (user.isModified('zipCode')) {
    let resCoords = await getLatLonFZ(user.zipCode);
    user.currentCoords = resCoords;
  }

  if (user.isModified('birthdayCoords')) {
    let planetInfo = await getSigns(user);
    console.log('done planet');
    user.sunSign = planetInfo.planets.sun.sign;
    user.moonSign = planetInfo.planets.moon.sign;
    user.ascSign = planetInfo.angles.asc.sign;
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
