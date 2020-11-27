if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = require('./server/app');

const port = process.env.PORT || 8080;

// *******************************

const http = require('http').createServer(app);
const io = require('socket.io')(http);

//tocreatea connection according toeh documentation, we use .on  (and we saved as io)
io.on('connection', (socket) => {
  console.log('a user is connected', socket.id);

  socket.on('send message', function (msg) {
    //this triggers the user effect in the client side
    io.emit('receive message', msg);
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
