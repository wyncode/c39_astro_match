const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up.',
    text: `Hi ${name}! Welcome to AstroDate! Ready to find love in the stars?`,
    html: `<head> <title>AstroDate Update!</title>
  <body> <p style="color:white;font-size:46px; background: url('https://images.pexels.com/photos/5726193/pexels-photo-5726193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"></p></body>`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Bye ${name}. Hope your quest for love leads you back to us someday!`,
    html: `<head> <title>AstroDate Update!</title>
  <body> <p style="color:white;font-size:46px; background: url('https://images.pexels.com/photos/5726193/pexels-photo-5726193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"></p></body>`
  });
};
const forgotPasswordEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Hi ${name}! I see you forgot your password! Let me help you with that!`,
    html: `<head> <title>AstroDate Update!</title>
  <body> <p style="color:white;font-size:46px; background: url('https://images.pexels.com/photos/5726193/pexels-photo-5726193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');"></p></body>`
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  forgotPasswordEmail
};
