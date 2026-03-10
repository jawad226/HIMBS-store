import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 0;">
          <div style="background-color: #00385F; padding: 25px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">HAFIZ IRON STORE</h1>
            <p style="color: #60a5fa; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase;">New Customer Inquiry</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 3px solid #00385F; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #f8fafc; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: bold; width: 80px;">Name</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 16px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: bold;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none; font-size: 15px;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; text-transform: uppercase; font-weight: bold;">Phone</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 15px;">${phone || 'Not provided'}</td>
                </tr>
              </table>
            </div>

            <h3 style="color: #00385F; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0;">Message</h3>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 15px;">
              <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #0ea5e9; color: white; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-weight: bold; font-size: 14px;">Reply to Customer</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; margin-bottom: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">This inquiry was sent from your website's contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
