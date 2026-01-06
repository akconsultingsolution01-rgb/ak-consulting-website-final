import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const body = await req.json();
  const { name, email, message } = body;

  await resend.emails.send({
    from: "AK Consulting <no-reply@akconsultingsolution.in>",
    to: ["info@akconsultingsolution.in"],
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}
