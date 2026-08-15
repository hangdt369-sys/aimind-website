import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

// ΓöÇΓöÇΓöÇ API: Gß╗¡i email qua Gmail SMTP ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
// Env cß║ºn c├│ trong Vercel:
//   GMAIL_USER  = aimind.hcm@gmail.com
//   GMAIL_PASS  = app password 16 k├╜ tß╗▒ tß╗½ Google

const ARCHETYPE_LABELS: Record<string, { name: string; desc: string; gift: string; challenge: string }> = {
  "lo-au": {
    name: "Lo ├éu",
    desc: "Bß║ín lu├┤n sß║╡n s├áng cho ─æiß╗üu tß╗ç nhß║Ñt ΓÇö n├úo bß║ín ─æang hoß║ít ─æß╗Öng ß╗ƒ chß║┐ ─æß╗Ö bß║úo vß╗ç li├¬n tß╗Ñc.",
    gift: "Cß║⌐n thß║¡n, chu ─æ├ío, nhß║íy b├⌐n vß╗¢i rß╗ºi ro. Bß║ín th╞░ß╗¥ng l├á ng╞░ß╗¥i ph├ít hiß╗çn vß║Ñn ─æß╗ü tr╞░ß╗¢c khi n├│ xß║úy ra.",
    challenge: "Kh├│ tß║¡n h╞░ß╗ƒng hiß╗çn tß║íi v├¼ lu├┤n lo vß╗ü t╞░╞íng lai. Cß║ºn hß╗ìc c├ích ph├ón biß╗çt mß╗æi lo c├│ thß╗▒c v├á mß╗æi lo do n├úo tß╗▒ tß║ío ra.",
  },
  "ne-tranh": {
    name: "N├⌐ Tr├ính",
    desc: "Bß║ín ╞░u ti├¬n h├▓a kh├¡ v├á tr├ính ─æß╗æi ─æß║ºu ΓÇö th╞░ß╗¥ng hi sinh nhu cß║ºu m├¼nh ─æß╗â giß╗» kh├┤ng kh├¡ b├¼nh y├¬n.",
    gift: "Khß║ú n─âng thß║Ñu cß║úm, kh├┤ng ph├ín x├⌐t, tß║ío kh├┤ng gian an to├án cho ng╞░ß╗¥i kh├íc.",
    challenge: "Nhu cß║ºu v├á cß║úm x├║c thß║¡t cß╗ºa bß║ín bß╗ï ch├┤n v├╣i theo thß╗¥i gian. Xung ─æß╗Öt n├⌐ tr├ính kh├┤ng biß║┐n mß║Ñt ΓÇö n├│ t├¡ch l┼⌐y.",
  },
  "kiem-soat": {
    name: "Kiß╗âm So├ít",
    desc: "Bß║ín cß║ºn mß╗ìi thß╗⌐ trong tß║ºm kiß╗âm so├ít ΓÇö kh├┤ng chß║»c chß║»n tß║ío ra lo lß║»ng s├óu.",
    gift: "C├│ tß╗ò chß╗⌐c, ─æ├íng tin cß║¡y, khß║ú n─âng lß║¡p kß║┐ hoß║ích v├á thß╗▒c thi xuß║Ñt sß║»c.",
    challenge: "Kiß╗âm so├ít th├íi qu├í c├│ thß╗â g├óy stress cho bß║ín v├á ng╞░ß╗¥i xung quanh. Gß╗æc rß╗à th╞░ß╗¥ng l├á nß╗ùi sß╗ú mß║Ñt an to├án.",
  },
  "hy-sinh": {
    name: "Hy Sinh",
    desc: "Bß║ín ─æß║╖t ng╞░ß╗¥i kh├íc l├¬n tr╞░ß╗¢c ΓÇö cß║úm gi├íc c├│ lß╗ùi khi ngh─⌐ ─æß║┐n nhu cß║ºu cß╗ºa ch├¡nh m├¼nh.",
    gift: "H├áo ph├│ng, quan t├óm s├óu sß║»c, tß║ío ra gi├í trß╗ï thß║¡t cho ng╞░ß╗¥i xung quanh.",
    challenge: "Cho ─æi li├¬n tß╗Ñc m├á kh├┤ng nhß║¡n lß║íi dß║½n ─æß║┐n kiß╗çt sß╗⌐c v├á o├ín tr├ích ngß║ºm.",
  },
  "tu-huy": {
    name: "Tß╗▒ Hß╗ºy",
    desc: "Bß║ín c├│ xu h╞░ß╗¢ng tß╗▒ ph├í hoß║íi nhß╗»ng ─æiß╗üu tß╗æt ─æß║╣p khi ch├║ng gß║ºn ─æß║┐n tay.",
    gift: "Tß╗▒ nhß║¡n thß╗⌐c cao, trung thß╗▒c vß╗¢i bß║ún th├ón, nhß║íy cß║úm vß╗¢i sß╗▒ giß║ú dß╗æi.",
    challenge: "V├┤ thß╗⌐c tin rß║▒ng m├¼nh kh├┤ng xß╗⌐ng ─æ├íng ΓÇö cß║ºn nhß║¡n diß╗çn c╞í chß║┐ n├áy tr╞░ß╗¢c khi n├│ vß║¡n h├ánh.",
  },
  "can-bang": {
    name: "C├ón Bß║▒ng",
    desc: "Bß║ín ─æang trong qu├í tr├¼nh t├¡ch hß╗úp ΓÇö ─æ├ú nhß║¡n ra m├┤ thß╗⌐c cß╗ºa m├¼nh v├á ─æang t├¼m c├ích thay ─æß╗òi.",
    gift: "Khß║ú n─âng tß╗▒ quan s├ít v├á ─æiß╗üu chß╗ënh. ─É├óy l├á ─æiß╗âm khß╗ƒi ─æß║ºu cß╗ºa chuyß╗ân h├│a thß║¡t.",
    challenge: "Duy tr├¼ h├ánh tr├¼nh khi kh├┤ng c├│ ├íp lß╗▒c b├¬n ngo├ái. Thay ─æß╗òi cß║ºn nhß║Ñt qu├ín h╞ín cß║ºn c╞░ß╗¥ng ─æß╗Ö.",
  },
};

function createHannaEmail(
  email: string,
  phone: string,
  archetypeKey: string,
  archetypeName: string,
  timestamp: string
): string {
  const a = ARCHETYPE_LABELS[archetypeKey];
  const name = a?.name || archetypeName || archetypeKey;
  return `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
  <div style="background:#1C1A3E;border-radius:12px;padding:24px;color:white;margin-bottom:24px">
    <p style="color:#B8B3FA;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em">AIMIND ΓÇö Kh├ích mß╗¢i</p>
    <h2 style="margin:0;font-size:20px">M├┤ thß╗⌐c: ${name}</h2>
    <p style="color:#9B96C0;font-size:13px;margin:8px 0 0">${timestamp}</p>
  </div>

  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    <tr><td style="padding:12px;border:1px solid #E8E3F0;background:#F8F4EE;font-weight:600;width:120px">Email</td><td style="padding:12px;border:1px solid #E8E3F0">${email}</td></tr>
    <tr><td style="padding:12px;border:1px solid #E8E3F0;background:#F8F4EE;font-weight:600">─Éiß╗çn thoß║íi</td><td style="padding:12px;border:1px solid #E8E3F0">${phone || "Ch╞░a cung cß║Ñp"}</td></tr>
    <tr><td style="padding:12px;border:1px solid #E8E3F0;background:#F8F4EE;font-weight:600">M├┤ thß╗⌐c</td><td style="padding:12px;border:1px solid #E8E3F0"><strong>${name}</strong> (${archetypeKey})</td></tr>
  </table>

  <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:16px;margin-bottom:16px">
    <p style="margin:0;font-size:14px;color:#166534">Γ£à H├ánh ─æß╗Öng tiß║┐p theo: Nhß║»n Zalo/email cho kh├ích, gß╗¡i t├ái liß╗çu thß╗▒c h├ánh v├á offer coaching nß║┐u ph├╣ hß╗úp.</p>
  </div>

  <p style="color:#9B96C0;font-size:12px;text-align:center">AIMIND ┬╖ aimind.hcm@gmail.com</p>
</div>`;
}

function createCustomerEmail(
  archetypeKey: string,
  archetypeName: string
): string {
  const a = ARCHETYPE_LABELS[archetypeKey];
  const name = a?.name || archetypeName || archetypeKey;
  return `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:24px">
  <div style="background:linear-gradient(135deg,#2D2A5E,#1C1A3E);border-radius:16px;padding:32px;color:white;text-align:center;margin-bottom:28px">
    <p style="color:#B8B3FA;font-size:12px;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.1em">Kß║┐t quß║ú Bß║ún ─Éß╗ô Nß╗Öi T├óm</p>
    <h1 style="margin:0;font-size:26px;font-weight:800">M├┤ thß╗⌐c cß╗ºa bß║ín:</h1>
    <h2 style="margin:8px 0 0;font-size:32px;font-weight:900;color:#B8B3FA">${name}</h2>
  </div>

  ${a ? `
  <div style="margin-bottom:24px">
    <p style="color:#1C1A3E;font-size:16px;line-height:1.8">${a.desc}</p>
  </div>

  <div style="border:1px solid #E8E3F0;border-radius:12px;padding:20px;margin-bottom:16px">
    <p style="color:#7C6FF7;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">─Éiß╗âm mß║ính cß╗ºa bß║ín</p>
    <p style="color:#1C1A3E;font-size:15px;line-height:1.75;margin:0">${a.gift}</p>
  </div>

  <div style="border:1px solid #E8E3F0;border-radius:12px;padding:20px;margin-bottom:28px">
    <p style="color:#E85A71;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Th├ích thß╗⌐c cß║ºn nhß║¡n diß╗çn</p>
    <p style="color:#1C1A3E;font-size:15px;line-height:1.75;margin:0">${a.challenge}</p>
  </div>
  ` : ""}

  <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:12px;padding:20px;margin-bottom:20px">
    <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#166534">≡ƒÄü C├┤ng cß╗Ñ thß╗▒c h├ánh miß╗àn ph├¡ d├ánh cho bß║ín</p>
    <p style="margin:0 0 14px;font-size:13px;color:#1C4A48;line-height:1.6">Nhß║¡t k├╜ quan s├ít m├┤ thß╗⌐c ${name} ΓÇö 3 buß╗òi/ng├áy, c├óu hß╗Åi ─æ╞░ß╗úc thiß║┐t kß║┐ ri├¬ng cho m├┤ thß╗⌐c cß╗ºa bß║ín. D├╣ng miß╗àn ph├¡, kh├┤ng cß║ºn ─æ─âng k├╜.</p>
    <a href="https://aimind-website.vercel.app/thuc-hanh?mo-thuc=${archetypeKey}" style="display:inline-block;background:#166534;color:white;padding:10px 22px;border-radius:999px;text-decoration:none;font-weight:700;font-size:13px">Mß╗ƒ c├┤ng cß╗Ñ thß╗▒c h├ánh ΓåÆ</a>
  </div>

  <div style="background:#1C1A3E;border-radius:12px;padding:20px;margin-bottom:16px">
    <p style="color:#C4C0E0;font-size:13px;font-weight:700;margin:0 0 8px">≡ƒôû H╞░ß╗¢ng dß║½n sß╗¡ dß╗Ñng c├┤ng cß╗Ñ</p>
    <ul style="color:#9B96C0;font-size:13px;line-height:1.8;margin:0;padding-left:18px">
      <li>D├╣ng <strong style="color:white">3 lß║ºn mß╗ùi ng├áy</strong>: s├íng ΓÇô giß╗»a ng├áy ΓÇô tß╗æi</li>
      <li>Viß║┐t thß║¡t, kh├┤ng cß║ºn ho├án hß║úo ΓÇö kh├┤ng ai ─æß╗ìc c├óu trß║ú lß╗¥i cß╗ºa bß║ín</li>
      <li>L├ám mß╗ùi ng├áy trong <strong style="color:white">21 ng├áy</strong> ─æß╗â nhß║¡n ra khu├┤n mß║½u r├╡ h╞ín</li>
      <li>Sao ch├⌐p c├óu trß║ú lß╗¥i v├áo note ri├¬ng ─æß╗â ─æß╗ìc lß║íi</li>
    </ul>
  </div>

  <div style="background:#1C1A3E;border-radius:12px;padding:20px;text-align:center;margin-bottom:20px">
    <p style="color:#C4C0E0;font-size:13px;line-height:1.75;margin:0 0 14px">Muß╗æn ─æi s├óu h╞ín v├áo m├┤ thß╗⌐c cß╗ºa m├¼nh? Nhß║»n trß╗▒c tiß║┐p cho Hanna.</p>
    <a href="https://zalo.me/0848270819" style="display:inline-block;background:linear-gradient(135deg,#7C6FF7,#5B4FD4);color:white;padding:11px 24px;border-radius:999px;text-decoration:none;font-weight:700;font-size:13px">Nhß║»n Zalo vß╗¢i Hanna ΓåÆ</a>
  </div>

  <p style="color:#9B96C0;font-size:12px;text-align:center">Hanna Dang ΓÇö AIMIND ┬╖ aimind.hcm@gmail.com ┬╖ Zalo: 0848270819</p>
</div>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      email: string;
      phone?: string;
      archetypeKey: string;
      archetypeName?: string;
    };

    const { email, phone, archetypeKey, archetypeName = "" } = body;

    if (!email || !archetypeKey) {
      return NextResponse.json({ error: "Thiß║┐u th├┤ng tin" }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;

    if (!gmailUser || !gmailPass) {
      console.warn("GMAIL_USER / GMAIL_PASS ch╞░a ─æ╞░ß╗úc cß║Ñu h├¼nh trong Vercel");
      return NextResponse.json({ success: true, warn: "email_not_configured" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailPass.replace(/\s/g, ""), // bß╗Å dß║Ñu c├ích nß║┐u c├│
      },
    });

    // Verify connection tr╞░ß╗¢c khi gß╗¡i
    await transporter.verify();

    const timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

    // 1. Th├┤ng b├ío cho Hanna
    await transporter.sendMail({
      from: `"AIMIND Website" <${gmailUser}>`,
      to: gmailUser,
      subject: `[AIMIND] Kh├ích mß╗¢i: ${ARCHETYPE_LABELS[archetypeKey]?.name || archetypeName} ΓÇö ${email}`,
      html: createHannaEmail(email, phone ?? "", archetypeKey, archetypeName, timestamp),
    });

    // 2. Email kß║┐t quß║ú cho kh├ích
    await transporter.sendMail({
      from: `"Hanna Dang ΓÇö AIMIND" <${gmailUser}>`,
      to: email,
      replyTo: gmailUser,
      subject: `Kß║┐t quß║ú Bß║ún ─Éß╗ô Nß╗Öi T├óm: ${ARCHETYPE_LABELS[archetypeKey]?.name || archetypeName}`,
      html: createCustomerEmail(archetypeKey, archetypeName),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Lß╗ùi gß╗¡i email" }, { status: 500 });
  }
}

