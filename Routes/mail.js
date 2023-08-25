const nodemailer = require('nodemailer');

exports.sendMail = async function (req, res) {
    console.log("API route reached")
    const { name, email, message } = req.body;

    const data = {
        name,
        email,
        message
    }

    const user = process.env.GMAIL_USER

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.GMAIL_PASS
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "Liam_Salmon@live.co.uk",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `
        });
        console.log("Message sent:", mail.messageId)

        return res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Could not send email, message was not sent." })
    }

 


    return res.status(200).json({name, email, message})
}