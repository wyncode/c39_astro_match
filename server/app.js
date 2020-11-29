require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open/index'),
  locationRoutes = require('./routes/open/location');
(messageRoutes = require('./routes/secure/chat/messageRoutes')),
  (conversationRoutes = require('./routes/secure/chat/conversationRoutes'));
(userRouter = require('./routes/secure/userRoute')),
  (cookieParser = require('cookie-parser')),
  (passport = require('./middleware/authentication/index')),
  (preferencesRouter = require('./routes/secure/preferenceRoute'));

const app = express();

//chat testing >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

app.set('view engine', 'ejs');
// app.use(express(static('public')));

app.get('/videochat', (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room });
});

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {
    // console.log(roomId, userId);
    socket.join(roomId);
    socket.to(roomId).broadcast.emit('user-connected', userId);

    socket.on('disconnect', () => {
      socket.to(roomId).broadcast.emit('user-disconnected', userId);
    });
  });
});

server.listen(3000);

//chat testing <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Middleware
app.use(express.json());

// Unauthenticated routes
app.use('/api', openRoutes);
app.use('/api/location', locationRoutes);

app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.
app.use('/api/*', passport.authenticate('jwt', { session: false }));

app.use('/api/users', userRouter);

app.use('/api', messageRoutes);
app.use('/api', conversationRoutes);

app.use('/api/preferences', preferencesRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
