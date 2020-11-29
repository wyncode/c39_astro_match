if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./server/app');

const port = process.env.PORT || 8080;

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});

const Conversation = require('./server/db/models/chat/privateMessages/conversationModel');
const changeStream = Conversation.watch();

changeStream.on('change', (change) => {
  io.emit('change data', change);
});

io.on('connection', (socket) => {
  console.log('a user is connected', socket.id);

  socket.on('send message', function (msg) {
    // io.emit('receive message', msg);
  });

  socket.on('disconnect', () => {
    console.log('...and disconnected');
  });
});

http.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
