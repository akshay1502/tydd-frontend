import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // The created Post document is returned
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/inquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, // or 465 if using secure SSL
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      to: data?.email,
      subject: `New Inquiry for ${data?.destination}`,
      text: `
      Hello,
      
      You have received a new inquiry with the following details:
      
      - Name: ${data?.name ?? "NA"}
      - Mobile: ${data?.mobile ?? "NA"}
      - Email: ${data?.email ?? "NA"}
      - No. of travellers: ${data?.travellers ?? "NA"}
      - Destination: ${data?.destination?.replaceAll("-", " ") ?? "NA"}
      - Type: ${data?.type?.replaceAll("-", " ") ?? "NA"}
      
      Please review and follow up as needed.
      `,
    });

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    return Response.json({ error: "Failed to send email", ERR: error });
  }
}
