import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "")

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  try {
    await sgMail.send({
      to,
      from: process.env.FROM_EMAIL || "noreply@barkprotocol.net",
      subject,
      html,
    })
    console.log("Email sent successfully")
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send email")
  }
}

