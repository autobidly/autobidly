import { NextRequest, NextResponse } from 'next/server';

const codes: Record<string, { code: string; expires: number }> = {};

export async function POST(req: NextRequest) {
  const { phone, action, code } = await req.json();

  if (!phone) return NextResponse.json({ error: 'Phone required' }, { status: 400 });

  const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const FROM_NUMBER = process.env.TWILIO_PHONE_NUMBER;

  if (!ACCOUNT_SID || !AUTH_TOKEN || !FROM_NUMBER) {
    return NextResponse.json({ error: 'Twilio credentials missing' }, { status: 500 });
  }

  if (action === 'send') {
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    codes[phone] = { code: verificationCode, expires: Date.now() + 10 * 60 * 1000 };

    const message = `Your AutoBidly verification code is: ${verificationCode}. Valid for 10 minutes.`;

    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${ACCOUNT_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${ACCOUNT_SID}:${AUTH_TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: phone,
          From: FROM_NUMBER,
          Body: message,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err.message || 'Failed to send SMS' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  }

  if (action === 'verify') {
    const stored = codes[phone];
    if (!stored) return NextResponse.json({ error: 'No code found. Please request a new one.' }, { status: 400 });
    if (Date.now() > stored.expires) return NextResponse.json({ error: 'Code expired. Please request a new one.' }, { status: 400 });
    if (stored.code !== code) return NextResponse.json({ error: 'Incorrect code. Please try again.' }, { status: 400 });

    delete codes[phone];
    return NextResponse.json({ success: true, verified: true });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}