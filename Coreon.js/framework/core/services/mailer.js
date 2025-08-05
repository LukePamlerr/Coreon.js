const nodemailer = require('nodemailer');

class Mailer {
    constructor(config) {
        this.transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.secure, // true for 465, false for other ports
            auth: {
                user: config.user,
                pass: config.pass,
            },
        });
    }

    async sendMail(to, subject, text, html) {
        const mailOptions = {
            from: `"Coreon.js" <${this.transporter.options.auth.user}>`,
            to,
            subject,
            text,
            html,
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            return info;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}

module.exports = Mailer;