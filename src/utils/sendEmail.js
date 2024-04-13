import nodemailer from "nodemailer";

async function sendMail(to,subject,html){
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
        auth: {
          user: process.env.Emailsender,
          pass:process.env.passwordSender,
        },
        tls: {
          rejectUnauthorized: false
        }
      });
        const info = await transporter.sendMail({
          from: '"Saraha APP" <saraha@gmail.com>', 
          to,
          subject,
          html,
        });
}

export default sendMail;

