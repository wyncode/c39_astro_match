const mongoose = require('mongoose'),
  validator = require('validator'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

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
    //once we get to geolocation, refactor
    location: [
      {
        type: Number
      },
      {
        type: Number
      }
    ],
    city: {
      type: String,
      required: true,
      trim: true
    },
    zipCode: {
      type: Number,
      required: true,
      trim: true,
      validate(value) {
        if (!value) {
          throw new Error('Zip code is empty');
        }
        if (value.toString().length !== 5) {
          console.log(typeof value);
          throw new Error('Zip code must be 5 digits');
        }
      }
    },
    //neeed to add into birthday a validator to check that they are 18 and over
    //need to convert from date to ms
    //probably using moment
    //see if function can be w/n schema
    birthday: {
      type: Date,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      enum: ['Non-binary', 'Cis Man', 'Cis Woman', 'Trans Man', 'Trans Woman']
    },
    zodiacSign: {
      type: String,
      required: true,
      trim: true,
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
    },
    //diff schema
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        // unique: true
      }
    ],
    inbox: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation'
        // unique: true
      }
    ],
    //partner preference
    partnerPreference: [
      {
        type: String,
        // required: true,
        trim: true,
        enum: ['Non-binary', 'Cis Man', 'Cis Woman', 'Trans Man', 'Trans Woman']
      }
    ],
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

// UserSchema.virtual('tasks', {
//   ref: 'Task',
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
  console.log(user);
  user.tokens = user.tokens.concat({ token });
  console.log(user);
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
// UserSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password'))
//     user.password = await bcrypt.hash(user.password, 8);
//   next();
// });

const User = mongoose.model('User', UserSchema);

module.exports = User;
