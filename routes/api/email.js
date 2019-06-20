const express = require("express");

const router = express.Router();
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");
const { emailTemplate } = require("../../emails/emailer");

dotenv.config();

// Set apiKey
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// @route    POST /api/email/send
// @desc     Send email
// @access   Public
router.post("/send", (req, res) => {

  let response = {}

  // Send welcome email
  const msg = {
    to: req.body.email,
    from: {
      email: process.env.NOREPLY_EMAIL,
      name: process.env.SENDER_NAME
    },
    subject: 'Olá',
    html: emailTemplate(
      `<h3>Bem vindo!</h3><br /><p>Tácio, <strong>Testando envio de email</strong>! <br /><br /></p><br>`
    )
  };

  try{
    sgMail.send(msg);
    return res.sendStatus(200);
  }catch(e){
    return res.sendStatus(400).json({error: e});
  }
});

module.exports = router;
