import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import fs from "fs";
import path from "path";
import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(
  process.env.RESEND_API_KEY || "re_bpWiAQYJ_FMLDT1xMbULYJqYacyJGHnfh",
);

type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
  company: string;
  interest: string;
  location: string;
};

type DbData = {
  contacts: Contact[];
};

export async function POST(req: Request) {
  try {
    const { name, phone, email, message, location, company, interest } =
      await req.json();

    const dbDir = path.join(process.cwd(), "data");
    const dbPath = path.join(dbDir, "db.json");

    // Ensure data directory exists
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true });
    }

    // Ensure db.json exists with default structure
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(
        dbPath,
        JSON.stringify({ contacts: [] }, null, 2),
        "utf-8",
      );
    }

    // Read existing db
    const rawData = fs.readFileSync(dbPath, "utf-8");
    const db: DbData = JSON.parse(rawData);

    // Create new contact
    const newContact: Contact = {
      id: nanoid(),
      name,
      phone,
      email,
      message,
      company,
      interest,
      location,
      createdAt: new Date().toISOString(),
    };

    db.contacts.push(newContact);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

    // ✅ Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "noreply@insightvision.marketing", // Must use verified sender or Resend default
      to: "hanyelnahas@milestonepm.co", // Replace with where you want to receive the form submission
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Email sent via Resend:", emailResponse);

    return NextResponse.json({ success: true, contact: newContact });
  } catch (err) {
    console.error("Failed to add contact:", err);
    return NextResponse.json(
      { success: false, error: "Failed to add contact" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const dbPath = path.join(process.cwd(), "data", "db.json");
    if (!fs.existsSync(dbPath)) {
      return NextResponse.json({ success: true, contacts: [] });
    }

    const rawData = fs.readFileSync(dbPath, "utf-8");
    const db: DbData = JSON.parse(rawData);

    return NextResponse.json({
      success: true,
      contacts: Array.isArray(db.contacts) ? db.contacts : [],
    });
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch contacts" },
      { status: 500 },
    );
  }
}
