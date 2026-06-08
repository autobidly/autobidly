import { NextRequest, NextResponse } from 'next/server';

async function getJWT() {
  const authRes = await fetch('https://carapi.app/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_token: process.env.CARAPI_TOKEN || 'acdc2c0a-4b05-4401-9827-94410f7d931c',
      api_secret: process.env.CARAPI_SECRET || '2b962aba0ff77524c37f93733f1c0618',
    }),
  });
  if (!authRes.ok) throw new Error('Auth failed');
  return await authRes.text();
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const trim = searchParams.get('trim');
  const year = '2025';

  try {
    const jwt = await getJWT();
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
      const trimList = [...new Set(data.data?.map((t: any) => t.trim).filter(Boolean) || [])] as string[];
      const msrpMap: Record<string, number> = {};
      data.data?.forEach((t: any) => { if (t.trim && t.msrp) msrpMap[t.trim] = t.msrp; });

      // Also get available body styles for this model
      const bodyRes = await fetch(
        `https://carapi.app/api/bodies/v2?year=${year}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`,
        { headers }
      );
      const bodyData = await bodyRes.json();
      const rawBodyTypes = [...new Set(bodyData.data?.map((b: any) => b.type).filter(Boolean) || [])] as string[];
      
      const bodyTypeMap: Record<string, string> = {
        'Truck (SuperCrew)': 'Crew Cab',
        'Truck (SuperCab)': 'SuperCab',
        'Truck (Regular Cab)': 'Regular Cab',
        'Sport Utility': 'SUV',
        'Passenger Van': 'Van',
        'Cargo Van': 'Van',
        'Extended Cab Pickup': 'SuperCab',
        'Crew Cab Pickup': 'Crew Cab',
        'Regular Cab Pickup': 'Regular Cab',
      };

      const bodyTypes = [...new Set(rawBodyTypes.map(b => bodyTypeMap[b] || b))] as string[];
      const driveTypes = [] as string[];

      return NextResponse.json({ trims: trimList, bodyTypes, driveTypes, msrpMap });
    }

    if (type === 'trimdetails' && make && model && trim) {
      const res = await fetch(
        `https://carapi.app/api/trims/v2?year=${year}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&trim=${encodeURIComponent(trim)}`,
        { headers }
      );
      const data = await res.json();
      const trimData = data.data?.[0];

      if (!trimData) return NextResponse.json({ body: '', drive: '' });

      const bodiesRes = await fetch(
        `https://carapi.app/api/bodies/v2?trim_id=${trimData.id}`,
        { headers }
      );
      const bodiesData = await bodiesRes.json();
      const bodyInfo = bodiesData.data?.[0];

      return NextResponse.json({
        body: bodyInfo?.type || '',
        drive: bodyInfo?.drive_type || '',
      });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}