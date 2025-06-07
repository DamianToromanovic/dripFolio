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
    console.log("Versuche zu senden...");

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Transporter erstellt.");

    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Neue Nachricht vom Portfolio",
      text: message,
    });

    console.log("E-Mail gesendet:", info);

    return res.status(200).json({ message: "Nachricht gesendet" });
  } catch (err) {
    console.error("❌ Fehler beim Senden:", err);
    return res.status(500).json({ error: err.message });
  }
}
