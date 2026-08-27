import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    const { name, email, message, social } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

   const { data, error } = await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",

  to: ["abdelghfarkhairallah8@gmail.com"],

  replyTo: email,

  subject: `New Message from ${name}`,

  html: `
    <h2>New Contact Message</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Social:</strong> ${social || "Not provided"}</p>

    <p><strong>Message:</strong></p>

    <p>${message}</p>
  `,
});
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown server error",
      },
      { status: 500 }
    );
  }
}