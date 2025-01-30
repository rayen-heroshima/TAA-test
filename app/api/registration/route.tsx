import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const dynamic = "force-dynamic";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.FROM_EMAIL_GMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

// Named export for POST method
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  const { name, email, message } = body;

  try {
    // Create user in the database

    const mailOptions = {
      from: process.env.FROM_EMAIL_GMAIL,
      to: email,
      subject: "Tunisian Automotive Association - you will be contacted soon",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; color: #333;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <!-- Main Email Container -->
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <!-- Header Section -->
                    <tr>
                        <td align="center" style="background-color: #0056a8; padding: 20px;">
                            <img src="https://www.taa.tn/wp-content/uploads/2022/03/Logo-TAA.png" alt="TAA Logo" style="display: block; width: 150px; height: 40px;">
                        </td>
                    </tr>
                    <!-- Banner Image -->
                    <tr>
                        <td align="center" style="padding: 0;">
                            <img src="https://images.unsplash.com/photo-1611242320536-f12d3541249b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkfGVufDB8fDB8fHww" alt="Automotive Banner" style="width: 100%; display: block; height: 60px;">
                        </td>
                    </tr>
                    <!-- Main Content Section -->
                    <tr>
                        <td style="padding: 20px 30px; text-align: left;">
                            <h1 style="color: #0056a8; font-size: 24px; margin: 0;">Welcome to the Tunisian Automotive Association</h1>
                            <p style="font-size: 16px; line-height: 1.6; margin: 20px 0;">
                                Dear ${name},
                                <br><br>
                                We are thrilled to have you as a part of the Tunisian Automotive Association (TAA) family. As the driving force of the automotive industry in Tunisia, we are dedicated to fostering innovation, collaboration, and excellence in the sector.
                            </p>
                            <p style="font-size: 16px; line-height: 1.6; margin: 20px 0;">
                                Stay tuned for updates on our latest initiatives, events, and resources designed to support your growth and success. Together, we are paving the way for a sustainable and dynamic automotive future.
                            </p>
                                  <div style="margin-top: 20px; background: #f4f7fa; padding: 20px; border-radius: 5px;">
    
        <p style="font-size: 16px; margin: 0; margin-top: 10px;"><strong>Message:</strong></p>
        <p style="font-size: 16px; margin: 0; color: #555;">${message}</p>
      </div>
                            <a href="https://taa.tn" style="display: inline-block; padding: 12px 20px; background-color: #0056a8; color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 4px; margin-top: 10px;">
                                Visit Our Website
                            </a>
                        </td>
                    </tr>
                    <!-- Footer Section -->
                    <tr>
                        <td style="background-color: #0056a8; padding: 20px; text-align: center; color: #ffffff; font-size: 14px;">
                            <p style="margin: 0;">&copy; 2024 Tunisian Automotive Association. All Rights Reserved.</p>
                            <p style="margin: 5px 0;">Rue Hedi Nouira, Les Berges du Lac, 1053 Tunis</p>

        <a href="https://www.taa.tn">Visit our website</a> | 
        <a href="mailto:contact@taa.org.tn">Email us</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>


`,
    };

    await transporter.sendMail(mailOptions);

    // Handle Google Sheets data append
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    const range = "A1:C1"; // Same range for both
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message]],
      },
    });

    return NextResponse.json({
      message: "User registered and emails sent successfully.",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
