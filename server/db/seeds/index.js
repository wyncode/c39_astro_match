if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//Import the DB connection
require('../config/index');

const Message = require('../models/chat/privateMessages/messageModel'),
  Preference = require('../models/preferenceModel'),
  Conversation = require('../models/chat/privateMessages/conversationModel'),
  User = require('../models/userModel'),
  faker = require('faker'),
  mongoose = require('mongoose');

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
  //Count number of user documents ===> should be 0
  await Preference.countDocuments({}, function (err, count) {
    console.log('Number of preferences: ', count);
  });
  //Count number of message documents ===> should be 0
  await Conversation.countDocuments({}, function (err, count) {
    console.log('Number of conversations: ', count);
  });

  //Loop 100 times and create 100 new users
  const userIdArray = [];
  for (let i = 0; i < 100; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
      birthday: faker.internet.birthday(),
      sunSign: faker.internet.enum()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  // Loop 100 times and create 100 new messages
  for (let i = 0; i < 100; i++) {
    const message = new Message({
      description: faker.lorem.paragraph(),
      completed: Boolean(Math.round(Math.random())),
      dueDate: faker.date.future(),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await message.save();
  }

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
