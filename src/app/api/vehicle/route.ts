import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const year = '2025';

  try {
    const authRes = await fetch('https://carapi.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_token: process.env.CARAPI_TOKEN || 'acdc2c0a-4b05-4401-9827-94410f7d931c',
        api_secret: process.env.CARAPI_SECRET || '2b962aba0ff77524c37f93733f1c0618',
      }),
    });

    if (!authRes.ok) {
      const authError = await authRes.text();
      return NextResponse.json({ error: `Auth failed: ${authError}` }, { status: 500 });
    }

    const jwt = await authRes.text();
    const headers = { Authorization: `Bearer ${jwt.trim()}` };

    if (type === 'models' && make) {
      const res = await fetch(
        `https://carapi.app/api/models/v2?year=${year}&make=${encodeURIComponent(make)}&sort=name&direction=asc`,
        { headers }
      );
      const data = await res.json();
      const models = data.data?.map((m: any) => m.name).filter(Boolean) || [];
      return NextResponse.json({ models });
    }

    if (type === 'trims' && make && model) {
      const res = await fetch(
        `https://carapi.app/api/trims/v2?year=${year}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&sort=trim&direction=asc`,
        { headers }
      );
      const data = await res.json();
      const trims = [...new Set(data.data?.map((t: any) => t.trim).filter(Boolean) || [])] as string[];
      return NextResponse.json({ trims });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}