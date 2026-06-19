import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!url || !key) {
      return NextResponse.json({ error: `Missing env vars: url=${!!url} key=${!!key}` }, { status: 500 });
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(url, key);

    const { data, error } = await supabaseAdmin
      .from('bidlocks')
      .insert([{
        make: body.make,
        model: body.model,
        trim: body.trim,
        config: body.config,
        cab: body.cab,
        color: body.color || null,
        term: body.term,
        miles: body.miles,
        payment: parseInt(body.payment),
        down: parseInt(body.down) || 0,
        zip: body.zip,
        credit: body.credit,
        loyalty: body.loyalty || false,
        employee: body.employee || false,
        conquest: body.conquest || false,
        military: body.military || false,
        costco: body.costco || false,
        buyer_name: body.name,
        buyer_email: body.email,
        buyer_phone: body.phone,
        phone_verified: body.phoneVerified || false,
        status: 'active',
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message, details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, bidlock: data });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}