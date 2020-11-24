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
