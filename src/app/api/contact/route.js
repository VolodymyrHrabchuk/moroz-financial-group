// /app/api/contact/route.js

import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { NextResponse } from "next/server";
import rateLimiter from "@/app/lib/rateLimiter";

const resend = new Resend(process.env.RESEND_API_KEY);

const verifyCaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    }
  );
  const data = await response.json();
  return data.success;
};

export async function POST(request) {
  // Extract IP address
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(/, /)[0] : "unknown";

  try {
    // Consume 1 point for each request
    await rateLimiter.consume(ip);

    // Parse the incoming request
    const { firstName, lastName, email, message, captcha } =
      await request.json();

    // Verify CAPTCHA
    const isCaptchaValid = await verifyCaptcha(captcha);
    if (!isCaptchaValid) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Send the email using Resend
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Replace with your verified sender
      to: "dmitrymoroz@morozfinancial.com", // Your receiving email address
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

    // Return the successful response
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error && error.constructor.name === "RateLimiterRes") {
      // Rate limit exceeded
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Log and return other errors
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
