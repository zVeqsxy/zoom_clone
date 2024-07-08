"use server";

// export const sendEmail = async (email: string, subject: string, message: string) => {}

import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
  console.log("Running on Server")
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.RESEND_TEST_EMAIL!,
    subject: 'Test Message',
    text: "Hello World!"
  })
  console.log("email sent")
  console.log(data, error)
}




// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['delivered@resend.dev'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };