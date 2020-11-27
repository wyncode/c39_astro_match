if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index'), (zipCodeData = require('zipcode-city-distance'));

const Message = require('../models/chat/privateMessages/messageModel'),
  Preference = require('../models/preferenceModel'),
  Conversation = require('../models/chat/privateMessages/conversationModel'),
  User = require('../models/userModel'),
  faker = require('faker'),
  mongoose = require('mongoose');

const genders = [
  'Non-binary',
  'Cis Man',
  'Cis Woman',
  'Trans Man',
  'Trans Woman'
];

const zipRadius = zipCodeData.getRadius(33101, 200, 'M');
const zipCodeArr = zipRadius.map((x) => x.zipcode);

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

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  // Loop through each collection and delete all the documents.
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  //Count number of user documents ===> should be 0
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });
  //Count number of message documents ===> should be 0
  await Message.countDocuments({}, function (err, count) {
    console.log('Number of messages: ', count);
  });

  //Loop 100 times and create 100 new users
  const userIdArray = [];
  for (let i = 0; i < 20; i++) {
    const me = new User({
      // name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      zipCode: zipCodeArr[Math.floor(Math.random() * zipCodeArr.length)],
      // admin: Boolean(Math.round(Math.random())),
      gender: genders[Math.floor(Math.random() * genders.length)],
      email: faker.internet.email(),
      password: faker.internet.password(),
      birthday: faker.date.between('1980-01-01', '1998-12-31'),
      birthTime: '12:00',
      sunSign: signs[Math.floor(Math.random() * signs.length)],
      moonSign: signs[Math.floor(Math.random() * signs.length)],
      ascSign: signs[Math.floor(Math.random() * signs.length)],
      bio: faker.lorem.paragraph(),
      avatar: faker.image.business()

      // sunSign: faker.internet.enum()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  //PREFERENCES
  for (let i = 0; i < 20; i++) {
    const task = new Preference({
      owner: userIdArray[i],
      zodiac: signs[Math.floor(Math.random() * signs.length)],
      age: [
        faker.random.number({ min: 21, max: 50 }),
        faker.random.number({ min: 51, max: 91 })
      ],
      interestedIn: genders[Math.floor(Math.random() * genders.length)],
      distance: faker.random.number(200)
    });
    console.log(task);
    await task.save();
  }

  //Loop 100 times and create 100 new messages
  //   for (let i = 0; i < 100; i++) {
  //     const message = new Message({
  //       description: faker.lorem.paragraph(),
  //       completed: Boolean(Math.round(Math.random())),
  //       dueDate: faker.date.future(),
  //       owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
  //     });
  //     await message.save();
  //   }

  //   //Loop 100 times and create 100 new preferences
  //   for (let i = 0; i < 100; i++) {
  //     const preference = new Preference({
  //       description: faker.lorem.paragraph(),
  //       completed: Boolean(Math.round(Math.random())),
  //       dueDate: faker.date.future(),
  //       owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
  //     });
  //     await message.save();
  //   }

  //   //Loop 100 times and create 100 new conversations
  //   for (let i = 0; i < 100; i++) {
  //     const conversation = new Conversation({
  //       description: faker.lorem.paragraph(),
  //       completed: Boolean(Math.round(Math.random())),
  //       dueDate: faker.date.future(),
  //       owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
  //     });
  //     await message.save();
  //   }

  //Count number of users ===> should be 100
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });

  //Count number of messages ===> should be 100
  await Message.countDocuments({}, function (err, count) {
    console.log('Number of users: ', count);
  });

  //Count number of preferences ===> should be 100
  await Preference.countDocuments({}, function (err, count) {
    console.log('Number of preferences: ', count);
  });

  //Count number of preferences ===> should be 100
  await Preference.countDocuments({}, function (err, count) {
    console.log('Number of preferences: ', count);
  });
};

dbReset();
