const nodemailer = require('nodemailer');
const dns = require('dns');
const sendEmail = async options => {
    const transport = {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    };
    try{
        await dns.promises.lookup('google.com');
         const transporter = nodemailer.createTransport(transport);

        const message = {
            from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
            to: options.email,
            subject: options.subject,
            text: options.message
        }

        await transporter.sendMail(message)
    } catch (error){
        console.log(error.message)

    }

    }



module.exports = sendEmail