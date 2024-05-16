const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'jennifer.medhurst28@ethereal.email',
      pass: 'u5hzdj1Z7EdMFYJyC7'
    },
  });

  let info = await transporter.sendMail({
    from: '"Admin 👻" <thapa@gmail.com>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello ", // plain text body
    html: "<b>Hello </b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
