import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email: string; archetypeKey: string; source: string; };
    const { email, archetypeKey, source } = body;
    if (!email || !archetypeKey) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    console.log("Email capture:", { email, archetypeKey, source });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
