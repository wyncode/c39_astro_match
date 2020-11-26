const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  User = require('../../db/models/userModel'),
  ExtractJwt = require('passport-jwt').ExtractJwt;

let jwtOptions = {
  jwtFromRequest: (req) => {
    console.log('I AM HERE AT MIDDLE');
    console.log(req.cookies);
    return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
  },
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  'jwt',
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }
    let { iat, exp, ...userData } = jwtPayload;
    userData = await User.findById(userData._id);
    return done(null, userData);
  })
);

module.exports = passport;
