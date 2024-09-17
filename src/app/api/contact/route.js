import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Replace with your verified sender
      to: "hrbchk2804@gmail.com", // Your receiving email address
      subject: "New Contact Form Submission",
      react: (
        <ContactEmail
          firstName={firstName}
          lastName={lastName}
          email={email}
          message={message}
        />
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
