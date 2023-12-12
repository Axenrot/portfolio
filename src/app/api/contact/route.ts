import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface IncomingData {
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  text: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as IncomingData;

  const { email, name, company, phone, text } = data;

  const transporter = nodemailer.createTransport({
    headers: { "Content-Type": "application/json" },
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let message = `Olá, sou: ${name || "*Não informado*"}\nda empresa: ${
    company || "*Não informado*"
  }\n meu telefone é: ${phone}\n meu email é: ${
    email || "*Não informado*"
  }\n quero falar sobre: ${text || "*Não informado*"}`;

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject: `company: ${company || "*Não informado*"}`,
    text: `message: ${message || "*Não informado*"}`,
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
