import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  'https://wwvieytvxygrbbtbxaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmlleXR2eHlncmJidGJ4YWFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg3NTg3NCwiZXhwIjoyMDk3NDUxODc0fQ.AGmz0jtxujO9HbVgFewA1mLrvp4yNBr1UY2bV0uFD6c'
);

const BREVO_API_KEY = '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';

export async function POST(req: NextRequest) {
  try {
    const { bidlockId, dealerEmail } = await req.json();

    if (!bidlockId || !dealerEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get the bidlock
    const { data: bidlock, error: fetchError } = await supabaseAdmin
      .from('bidlocks')
      .select('*')
      .eq('id', bidlockId)
      .single();

    if (fetchError || !bidlock) {
      return NextResponse.json({ error: 'BidLock not found' }, { status: 404 });
    }

    if (bidlock.status !== 'active') {
      return NextResponse.json({ error: 'This BidLock has already been accepted or expired' }, { status: 400 });
    }

    // Get dealer info
    const { data: dealer } = await supabaseAdmin
      .from('dealers')
      .select('*')
      .eq('email', dealerEmail)
      .single();

    // Update bidlock status
    const { error: updateError } = await supabaseAdmin
      .from('bidlocks')
      .update({
        status: 'accepted',
        accepted_by: dealerEmail,
        accepted_at: new Date().toISOString(),
      })
      .eq('id', bidlockId);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // Send email to buyer via Brevo
    const buyerEmailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'AutoBidly', email: 'info@autobidly.com' },
        to: [{ email: bidlock.buyer_email, name: bidlock.buyer_name }],
        subject: '🎉 Your BidLock™ was accepted!',
        htmlContent: `
          <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
            <div style="font-size: 24px; font-weight: 700; color: #111; margin-bottom: 4px;">
              Auto<span style="color: #1D9E75;">Bidly</span>
            </div>
            <div style="font-size: 13px; color: #999; margin-bottom: 32px;">The lease marketplace that works for you</div>
            
            <div style="background: #E1F5EE; border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
              <div style="font-size: 32px; margin-bottom: 8px;">🎉</div>
              <div style="font-size: 22px; font-weight: 700; color: #0F6E56; margin-bottom: 4px;">Your BidLock™ was accepted!</div>
              <div style="font-size: 14px; color: #1D9E75;">A dealer has matched your price</div>
            </div>

            <div style="background: #fff; border: 1.5px solid #1D9E75; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <div style="font-size: 11px; font-weight: 600; color: #1D9E75; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Your BidLock™ summary</div>
              <div style="font-size: 18px; font-weight: 700; color: #111; margin-bottom: 4px;">${bidlock.make} ${bidlock.model} ${bidlock.trim}</div>
              <div style="font-size: 13px; color: #666; margin-bottom: 16px;">${bidlock.config} · ${bidlock.cab} · ${bidlock.term}mo · ${parseInt(bidlock.miles).toLocaleString()} mi/yr</div>
              <div style="font-size: 28px; font-weight: 700; color: #1D9E75;">$${bidlock.payment}/mo</div>
              <div style="font-size: 13px; color: #999;">$${bidlock.down} down payment</div>
            </div>

            <div style="background: #f9f9f7; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <div style="font-size: 14px; font-weight: 600; color: #111; margin-bottom: 12px;">What happens next:</div>
              <div style="font-size: 13px; color: #555; line-height: 1.8;">
                1. A dealer representative will contact you within 2 hours<br>
                2. Visit the dealership within <strong>72 hours</strong> to sign<br>
                3. The price is locked — no renegotiation<br>
                4. Drive away in your new vehicle!
              </div>
            </div>

            <div style="font-size: 12px; color: #999; text-align: center; line-height: 1.6;">
              Questions? Reply to this email or contact us at info@autobidly.com<br>
              AutoBidly LLC · Michigan · autobidly.com
            </div>
          </div>
        `,
      }),
    });

    if (!buyerEmailRes.ok) {
      console.error('Failed to send buyer email');
    }

    return NextResponse.json({ 
      success: true, 
      buyer: {
        name: bidlock.buyer_name,
        email: bidlock.buyer_email,
        phone: bidlock.buyer_phone,
      }
    });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}