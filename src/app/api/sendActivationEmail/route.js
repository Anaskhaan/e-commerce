// pages/api/sendActivationEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    userAddress,
    deviceId,
    emergencyContact,
    billingAddress,
    billingPhone,
    cardNumber,
    cardExpiry,
    email,
    subscriptionPlan,
    fallDetection,
    deviceReplacement,
  } = req.body;

  try {
    // Create transporter using Yahoo SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.YAHOO_EMAIL, // Your Yahoo email
        pass: process.env.YAHOO_PASSWORD, // App password generated from Yahoo
      },
    });

    // Compose email
    let mailOptions = {
      from: `"Life Alarm Activation" <${process.env.YAHOO_EMAIL}>`,
      to: "activationslifealarm@yahoo.com", // recipient
      subject: `New Life Alarm Activation Form Submission`,
      html: `
        <h2>Life Alarm Activation Form Submission</h2>
        <p><strong>User Name & Address:</strong> ${userAddress}</p>
        <p><strong>Device ID#:</strong> ${deviceId}</p>
        <p><strong>Emergency Contacts:</strong> ${emergencyContact}</p>
        <p><strong>Billing Name & Address:</strong> ${billingAddress}</p>
        <p><strong>Billing Phone:</strong> ${billingPhone}</p>
        <p><strong>Card Number:</strong> ${cardNumber}</p>
        <p><strong>Card Expiry:</strong> ${cardExpiry}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscription Plan:</strong> ${subscriptionPlan}</p>
        <p><strong>Fall Detection:</strong> ${fallDetection}</p>
        <p><strong>Device Replacement Plan:</strong> ${deviceReplacement}</p>
      `,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    res
      .status(200)
      .json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
}
