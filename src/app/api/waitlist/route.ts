import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': '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',
    },
    body: JSON.stringify({
      email,
      listIds: [2],
      updateEnabled: true,
    }),
  });

  if (res.ok || res.status === 204) {
    return NextResponse.json({ success: true });
  } else {
    const error = await res.json();
    return NextResponse.json({ error }, { status: 500 });
  }
}