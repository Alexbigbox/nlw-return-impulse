import { MailAdapter, SendMailData } from "../mail-adapter"
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "30cc661609a7f1",
    pass: "123c082a9f94c8"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Alex Kruger <alex.bigbox@gmail.com>',
      subject: subject,
      html: body,
    })
  }
}