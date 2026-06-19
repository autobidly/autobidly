import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  'https://wwvieytvxygrbbtbxaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmlleXR2eHlncmJidGJ4YWFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg3NTg3NCwiZXhwIjoyMDk3NDUxODc0fQ.AGmz0jtxujO9HbVgFewA1mLrvp4yNBr1UY2bV0uFD6c'
);

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('bidlocks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ bidlocks: data });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}