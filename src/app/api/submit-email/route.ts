import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── API: Submit Email Capture ───────────────────────────────────────────────
// Saves email + archetype to Supabase and triggers welcome sequence via Resend

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      email: string;
      archetypeKey: string;
      source: string;
    };

    const { email, archetypeKey, source } = body;

    if (!email || !archetypeKey) {
      return NextResponse.json(
        { error: "Email và archetypeKey là bắt buộc" },
        { status: 400 }
      );
    }

    // TODO: Save to Supabase
    // const supabase = createServerClient(...)
    // await supabase.from("email_captures").insert({ email, archetype_key: archetypeKey, source })

    // TODO: Send welcome email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from, to: email, subject, html })

    // Log for now (remove in production)
    console.log("Email capture:", { email, archetypeKey, source });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email submission error:", error);
    return NextResponse.json(
      { error: "Lỗi server. Vui lòng thử lại." },
      { status: 500 }
    );
  }
}
