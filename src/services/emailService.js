require('dotenv').config();
const nodemailer = require("nodemailer");

export const sendSimpleEmail = async (data, token) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_APP, // generated ethereal user
        pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: data.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `
        <h3>Xin chao: ${data?.fullName}</h3>
        <p>Dia chi: ${data?.address}</p>
        <p>Li do: ${data?.reason}</p>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Hỏi Dân IT channel</p>
        <p>Thông tin đặt lệnh khám bệnh:</p>
        <div><p>Thời gian: ${data?.timeType}</p></div>
        <div><p>Bác sĩ: </p></div>
        <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường linnk bên dưới 
        để xác nhận và hoan tắt cả các thủ tục đặt lịnh khám bệnh</p>
        <div>
            <a target="blank" href="${token}"> Click</a>
            <p>Xin chân thành cảm ơn</p>
        </div>
      `, // html body
    });
}