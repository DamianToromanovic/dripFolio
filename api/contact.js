import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Nur POST erlaubt" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Alle Felder sind erforderlich." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Neue Nachricht vom Portfolio",
      text: message,
    });

    return res
      .status(200)
      .json({ success: true, message: "Nachricht gesendet." });
  } catch (err) {
    console.error("Fehler beim Mailversand:", err);
    return res.status(500).json({ message: "Serverfehler beim Senden." });
  }
}
