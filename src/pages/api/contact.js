require('dotenv').config()
const MY_EMAIL = process.env.myEmail
const DUMMY_EMAIL = process.env.dummyEmail
const PASSWORD = process.env.password

export default async function (req, res) {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: DUMMY_EMAIL,
      pass: PASSWORD,
    },
    secure: true,
  })

  console.log(req.body.name)
  console.log(req.body.message)

  const mailData = {
    from: DUMMY_EMAIL,
    to: MY_EMAIL,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })

  res.status(200)
}
