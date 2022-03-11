const nodemailer = require('nodemailer');
const express = require('express')
const cors = require('cors')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saddamkhan.khan705@gmail.com',
    pass: '9589691992'
  }
});


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.json())
app.get("/",(req,res)=>{
 res.json({"alert":"Email api"})
})
 app.post("/email",(req,res)=>{
  const message = req.body.message;
  const name = req.body.name;
  const mobile = req.body.mobile;
  const email = req.body.email;

  const mailOptions = {
    from: 'saddamkhan.khan705@gam',
    to:email ,
    subject: 'SDhusain Feedback',
    html: name+"<br>"+mobile+"<br>"+email+"<br>"+message
  };
  res.json({html:message})
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully: ' + info.response);
    }
  });
 })

app.listen(4000,()=>{
  console.log("run server");
})



