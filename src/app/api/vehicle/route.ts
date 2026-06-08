import { NextRequest, NextResponse } from 'next/server';

const TRUCK_CONFIGS: Record<string, string[]> = {
  // Ford
  'Ford|F-150': [
    'Regular Cab · 6.5ft Bed',
    'Regular Cab · 8ft Bed',
    'SuperCab · 6.5ft Bed',
    'SuperCrew · 5.5ft Bed',
    'SuperCrew · 6.5ft Bed',
  ],
  'Ford|F-250 Super Duty': [
    'Regular Cab · 8ft Bed',
    'SuperCab · 6.75ft Bed',
    'SuperCab · 8ft Bed',
    'Crew Cab · 6.75ft Bed',
    'Crew Cab · 8ft Bed',
  ],
  'Ford|F-350 Super Duty': [
    'Regular Cab · 8ft Bed',
    'SuperCab · 6.75ft Bed',
    'SuperCab · 8ft Bed',
    'Crew Cab · 6.75ft Bed',
    'Crew Cab · 8ft Bed',
  ],
  'Ford|Ranger': [
    'SuperCab · 6ft Bed',
    'Crew Cab · 5ft Bed',
  ],
  'Ford|Maverick': [
    'Crew Cab · 4.5ft Bed',
  ],
  'Ford|F-150 Lightning': [
    'SuperCrew · 5.5ft Bed',
    'SuperCrew · 6ft Bed',
  ],
  // Chevrolet
  'Chevrolet|Silverado 1500': [
    'Regular Cab · Standard Bed',
    'Regular Cab · Long Bed',
    'Double Cab · Standard Bed',
    'Crew Cab · Short Bed',
    'Crew Cab · Standard Bed',
  ],
  'Chevrolet|Silverado 2500HD': [
    'Regular Cab · Standard Bed',
    'Regular Cab · Long Bed',
    'Double Cab · Standard Bed',
    'Double Cab · Long Bed',
    'Crew Cab · Standard Bed',
    'Crew Cab · Long Bed',
  ],
  'Chevrolet|Silverado 3500HD': [
    'Regular Cab · Standard Bed',
    'Regular Cab · Long Bed',
    'Double Cab · Standard Bed',
    'Double Cab · Long Bed',
    'Crew Cab · Standard Bed',
    'Crew Cab · Long Bed',
  ],
  'Chevrolet|Colorado': [
    'Extended Cab · Standard Bed',
    'Crew Cab · Short Bed',
    'Crew Cab · Standard Bed',
  ],
  'Chevrolet|Silverado EV': [
    'Crew Cab · Short Bed',
    'Crew Cab · Standard Bed',
  ],
  // GMC
  'GMC|Sierra 1500': [
    'Regular Cab · Standard Bed',
    'Regular Cab · Long Bed',
    'Double Cab · Standard Bed',
    'Crew Cab · Short Bed',
    'Crew Cab · Standard Bed',
  ],
  'GMC|Sierra 2500HD': [
    'Regular Cab · Standard Bed',
    'Regular Cab · Long Bed',
    'Double Cab · Standard Bed',
    'Double Cab · Long Bed',
    'Crew Cab · Standard Bed',
    'Crew Cab · Long Bed',
  ],
  'GMC|Sierra 3500HD': [
    'Regular Cab · Standard Bed',
    'Regular Cab · Long Bed',
    'Double Cab · Standard Bed',
    'Double Cab · Long Bed',
    'Crew Cab · Standard Bed',
    'Crew Cab · Long Bed',
  ],
  'GMC|Canyon': [
    'Extended Cab · Standard Bed',
    'Crew Cab · Short Bed',
    'Crew Cab · Standard Bed',
  ],
  'GMC|Sierra EV': [
    'Crew Cab · Short Bed',
    'Crew Cab · Standard Bed',
  ],
  // Ram
  'Ram|1500': [
    'Quad Cab · 6.4ft Bed',
    'Crew Cab · 5.7ft Bed',
    'Crew Cab · 6.4ft Bed',
  ],
  'Ram|2500': [
    'Regular Cab · 8ft Bed',
    'Crew Cab · 6.4ft Bed',
    'Crew Cab · 8ft Bed',
    'Mega Cab · 6.4ft Bed',
  ],
  'Ram|3500': [
    'Regular Cab · 8ft Bed',
    'Crew Cab · 6.4ft Bed',
    'Crew Cab · 8ft Bed',
    'Mega Cab · 6.4ft Bed',
  ],
  'Ram|1500 Classic': [
    'Quad Cab · 6.4ft Bed',
    'Crew Cab · 5.7ft Bed',
    'Crew Cab · 6.4ft Bed',
  ],
  // Toyota
  'Toyota|Tacoma': [
    'XtraCab · 6ft Bed',
    'Double Cab · 5ft Bed',
  ],
  'Toyota|Tundra': [
    'Double Cab · 6.5ft Bed',
    'Double Cab · 8.1ft Bed',
    'CrewMax · 5.5ft Bed',
    'CrewMax · 6.5ft Bed',
  ],
  // Nissan
  'Nissan|Frontier': [
    'King Cab · 6ft Bed',
    'Crew Cab · 5ft Bed',
  ],
  'Nissan|Titan': [
    'King Cab · 6.5ft Bed',
    'Crew Cab · 5.5ft Bed',
  ],
  'Nissan|Titan XD': [
    'King Cab · 6.5ft Bed',
    'Crew Cab · 5.5ft Bed',
  ],
  // Honda
  'Honda|Ridgeline': [
    'Crew Cab · 5.4ft Bed',
  ],
  // Jeep
  'Jeep|Gladiator': [
    'Crew Cab · 5ft Bed',
  ],
  // Hyundai
  'Hyundai|Santa Cruz': [
    'Crew Cab · 4.3ft Bed',
  ],
  // Ford Maverick already listed above
};

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

function mapBody(raw: string): string {
  const r = raw.toLowerCase();
  if (r.includes('supercrew') || r.includes('crew cab pickup')) return 'Crew Cab';
  if (r.includes('supercab') || r.includes('extended cab')) return 'SuperCab';
  if (r.includes('regular cab')) return 'Regular Cab';
  if (r.includes('double cab')) return 'Double Cab';
  if (r.includes('sport utility') || r.includes('suv')) return 'SUV';
  if (r.includes('sedan')) return 'Sedan';
  if (r.includes('coupe')) return 'Coupe';
  if (r.includes('convert') || r.includes('cabrio') || r.includes('roadster') || r.includes('spyder')) return 'Convertible';
  if (r.includes('hatch')) return 'Hatchback';
  if (r.includes('wagon')) return 'Wagon';
  if (r.includes('minivan') || r.includes('passenger van')) return 'Minivan';
  if (r.includes('van')) return 'Van';
  if (r.includes('truck')) return 'Truck';
  return raw;
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

      const truckKey = `${make}|${model}`;
      if (TRUCK_CONFIGS[truckKey]) {
        return NextResponse.json({
          trims: trimList,
          bodyTypes: TRUCK_CONFIGS[truckKey],
          driveTypes: [],
          msrpMap,
          isTruck: true,
        });
      }

      const bodyRes = await fetch(
        `https://carapi.app/api/bodies/v2?year=${year}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`,
        { headers }
      );
      const bodyData = await bodyRes.json();
      const rawBodyTypes = [...new Set(bodyData.data?.map((b: any) => b.type).filter(Boolean) || [])] as string[];
      const bodyTypes = [...new Set(rawBodyTypes.map(mapBody))] as string[];

      return NextResponse.json({ trims: trimList, bodyTypes, driveTypes: [], msrpMap, isTruck: false });
    }

    if (type === 'trimdetails' && make && model && trim) {
      const truckKey = `${make}|${model}`;
      if (TRUCK_CONFIGS[truckKey]) {
        return NextResponse.json({ body: '', drive: '', isTruck: true });
      }

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
        isTruck: false,
      });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}