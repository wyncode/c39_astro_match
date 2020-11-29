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
      sunSign: faker.internet.enum(),
      avatar: faker.image.avatar(),
      gender: faker.name.gender()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  // Loop 100 times and create 100 new messages
  for (let i = 0; i < 100; i++) {
    const message = new Message({
      description: faker.lorem.paragraph(),
      newStatus: faker.random.boolean,
      recipient: faker.date.future(),
      sender: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      senderAvatar: { me: avatar }
    });
    await message.save();
  }

  //Loop 100 times and create 100 new preferences
  for (let i = 0; i < 100; i++) {
    const preference = new Preference({
      zodiac: faker.lorem.word(),
      age: Boolean(Math.round(Math.random())),
      interestedIn: faker.name.gender(),
      distance: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      elegibleZipCodes: faker.address.zipCode()
    });
    await message.save();
  }

  //Loop 100 times and create 100 new conversations
  for (let i = 0; i < 100; i++) {
    const conversation = new Conversation({
      participants: `${[user._id]}``${
        userIdArray[Math.floor(Math.random() * userIdArray.length)]
      }`,
      message: Boolean(Math.round(Math.random())),
      dueDate: faker.date.future(),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    userIdArray.push(me._id),
      userIdArray.push(recipient._id),
      await message.save();
  }

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
  await Conversation.countDocuments({}, function (err, count) {
    console.log('Number of preferences: ', count);
  });
};

dbReset();
