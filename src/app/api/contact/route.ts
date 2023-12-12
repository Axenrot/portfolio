import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface IncomingData {
  email: string;
  name?: string;
  company?: string;
  subject?: string;
  text: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as IncomingData;

  const { email, name, company, subject, text } = data;

  const transporter = nodemailer.createTransport({
    headers: { "Content-Type": "application/json" },
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let message = `Olá, sou: ${name || "*Não informado*"}\n da empresa: ${
    company || "*Não informado*"
  }\n meu email é: ${email || "*Não informado*"}\n quero falar sobre: ${
    text || "*Não informado*"
  }`;

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: "Email sent succesfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
