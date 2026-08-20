import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

async function sendToEmailMarketing(payload: Record<string, string>) {
  const webhookUrl = process.env.EMAIL_MARKETING_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "digital-bhanu-contact", ...payload })
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    full_name: String(formData.get("fullName") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    subject: String(formData.get("subject") || ""),
    message: String(formData.get("message") || "")
  };

  const supabase = getAdminClient();
  if (supabase) {
    await supabase.from("contact_messages").insert(payload);
  }

  await sendToEmailMarketing({
    fullName: payload.full_name,
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject,
    message: payload.message
  });

  return NextResponse.redirect(new URL("/thank-you?type=contact", request.url), 303);
}
