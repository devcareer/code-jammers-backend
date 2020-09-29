import hbs from "nodemailer-express-handlebars";

const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const options = {
  viewEngine: {
    partialsDir: `${__dirname}/views/partials`,
    layoutsDir: `${__dirname}/views/layouts`,

  },
  viewPath: path.join(__dirname, "views"),
};

export default (link, user, res) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.SERVICE_USER,
      pass: process.env.SERVICE_PASS,
    },
  });

  transporter.use("compile", hbs(options));

  const context = {
    name: user.name,
    link,
  };

  const mailOptions = {
    to: user.email,
    from: process.env.FROM_EMAIL,
    subject: "Password change request",
    template: "emailTemplate",
    context,

  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });

    return res.status(200).json({ message: "A reset email has been sent" });
  });
};
