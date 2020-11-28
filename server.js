if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./server/app');

const port = process.env.PORT || 8080;

// *******************************

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});
//neef to watch a certain database (conversations probably)
const Conversation = require('./server/db/models/chat/privateMessages/conversationModel');
const changeStream = Conversation.watch();

//nice now just need to map through messages in the front?
changeStream.on('change', (change) => {
  console.log('**********************');
  console.log(change);
  console.log(change.updateDescription.updatedFields);
  io.emit('change data', change);
});

//tocreatea connection according toeh documentation, we use .on  (and we saved as io)
io.on('connection', (socket) => {
  console.log('a user is connected', socket.id);

  //only works if the front end is up first? jk take it out of function and it updates
  socket.on('send message', function (msg) {
    //this triggers the user effect in the client side
    // io.emit('receive message', msg);
  });

  //Signifies a specific message from our clients - mainly, that it's received a disconnect.
  socket.on('disconnect', () => {
    console.log('...and disconnected');
  });
});

// *******************************

http.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
