import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  'https://wwvieytvxygrbbtbxaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmlleXR2eHlncmJidGJ4YWFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg3NTg3NCwiZXhwIjoyMDk3NDUxODc0fQ.AGmz0jtxujO9HbVgFewA1mLrvp4yNBr1UY2bV0uFD6c'
);

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
      return NextResponse.json({ error: error.message, details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, bidlock: data });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}