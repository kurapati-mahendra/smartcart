const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  }
  return transporter;
}

exports.sendMail = async(receiverEmail,subject,body) => {
    await getTransporter().sendMail({
    from: process.env.EMAIL,
    to: receiverEmail,
    subject: subject,
    html: body
  });
};
