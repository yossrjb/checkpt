const mailer = require("nodemailer");

const transport = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "name@gmail.com",
    pass: "1234567",
  },
});

const mail = {
  from: "name@gmail.com",
  to: "name@gmail.com",
  subject: "text to send",
  text: "test test test test ",
};
transporter.sendMail(mail);
