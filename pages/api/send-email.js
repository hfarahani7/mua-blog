import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: process.env.EMAIL_USER,  // e.g. 'mygmail@gmail.com'
            pass: process.env.EMAIL_PASS   // app password or your actual password
            }
        });

        const mailOptions = {
            from: email, 
            to: process.env.RECEIVER_EMAIL || 'your@email.com',
            subject: `New Inquiry from ${name}`,
            text: `
            You have a new inquiry.
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Error sending email' });
    }
}