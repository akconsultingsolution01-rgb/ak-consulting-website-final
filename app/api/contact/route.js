import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    let data = {};

    const contentType = req.headers.get("content-type") || "";

   
    if (contentType.includes("application/json")) {
      data = await req.json();
    }
   
    else if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      data = Object.fromEntries(formData.entries());
    }
    
    else {
      throw new Error("Unsupported content type");
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    } = data;

    // 1️⃣ Email to Admin
    await resend.emails.send({
      from: "AK Consulting <no-reply@akconsultingsolution.in>",
      to: ["info@akconsultingsolution.in"],
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
async function submit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const payload = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  setMsg("Message sent successfully!");
  e.target.reset();
}

    // 2️⃣ Auto-reply to User
    await resend.emails.send({
      from: "AK Consulting <no-reply@akconsultingsolution.in>",
      to: [email],
      subject: "Thanks for contacting AK Consulting",
      html: `
        <p>Hi ${firstName || "there"},</p>
        <p>Thank you for reaching out to AK Consulting Solutions.</p>
        <p>We’ve received your message and will contact you within 24 business hours.</p>
        <br/>
        <p>Best regards,<br/>AK Consulting Solutions</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
