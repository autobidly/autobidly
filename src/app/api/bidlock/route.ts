import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

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
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, bidlock: data });

  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}