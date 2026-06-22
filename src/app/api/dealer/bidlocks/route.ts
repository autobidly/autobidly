import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  'https://wwvieytvxygrbbtbxaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmlleXR2eHlncmJidGJ4YWFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg3NTg3NCwiZXhwIjoyMDk3NDUxODc0fQ.AGmz0jtxujO9HbVgFewA1mLrvp4yNBr1UY2bV0uFD6c'
);

function distanceMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

export async function GET(req: Request) {
  try {
    // Get dealer email from query param or default to test dealer
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email') || 'dealer@test.com';

    // Get dealer's market info
    const { data: dealer } = await supabaseAdmin
      .from('dealers')
      .select('market_zip, market_radius')
      .eq('email', email)
      .single();

    // Get dealer's ZIP coordinates
    let dealerLat: number | null = null;
    let dealerLng: number | null = null;
    let radius = 50;

    if (dealer?.market_zip) {
      radius = dealer.market_radius || 50;
      const { data: zipData } = await supabaseAdmin
        .from('zip_codes')
        .select('lat, lng')
        .eq('zip', dealer.market_zip)
        .single();
      if (zipData) {
        dealerLat = zipData.lat;
        dealerLng = zipData.lng;
      }
    }

    // Get all active bidlocks
    const { data, error } = await supabaseAdmin
      .from('bidlocks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Filter by distance if we have dealer coordinates
    let filtered = data || [];
    if (dealerLat !== null && dealerLng !== null) {
      const bidlockZips = [...new Set(filtered.map(b => b.zip))];
      
      const zipCoords: Record<string, { lat: number; lng: number }> = {};
      const { data: zips } = await supabaseAdmin
        .from('zip_codes')
        .select('zip, lat, lng')
        .in('zip', bidlockZips);
      
      zips?.forEach(z => { zipCoords[z.zip] = { lat: z.lat, lng: z.lng }; });

      filtered = filtered.filter(b => {
        const coords = zipCoords[b.zip];
        if (!coords) return true; // include if ZIP not found
        const dist = distanceMiles(dealerLat!, dealerLng!, coords.lat, coords.lng);
        return dist <= radius;
      });
    }

    return NextResponse.json({ bidlocks: filtered });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}