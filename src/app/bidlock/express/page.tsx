"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ExpressContent() {
  const searchParams = useSearchParams();
  const make = searchParams.get('make') || '';
  const model = searchParams.get('model') || '';
  const trim = searchParams.get('trim') || '';
  const payment = searchParams.get('payment') || '';
  const seats = searchParams.get('seats') || '';
  const miles = searchParams.get('miles') || '12';

  const [zip, setZip] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = zip.length === 5 && name.trim().length > 0 && email.includes('@') && phone.length >= 10;

  async function handleSubmit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/bidlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          make,
          model,
          trim,
          config: 'Standard',
          cab: 'Standard',
          term: '36',
          miles: (parseInt(miles) * 1000).toString(),
          payment,
          down: '0',
          zip,
          credit: 'excellent',
          name,
          email,
          phone,
          phoneVerified: false,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  }

  if (!make || !model || !payment) {
    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ fontSize: 18, color: '#111', marginBottom: 16 }}>No vehicle selected.</div>
          <a href="/" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 600 }}>← Back to AutoBidly</a>
        </div>
      </div>
    );
  }

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <a href="/" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>← Back</a>
      </nav>

      <div style={{ maxWidth: 560, margin: '0 auto', padding: '48px 20px' }}>

        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 12 }}>Your BidLock™ is live!</h1>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>
              Verified dealers near {zip} can now see your bid for the {make} {model} {trim} at <strong>${payment}/mo</strong>. The first dealer to accept is locked in at your price.
            </p>
            <div style={{ background: '#E1F5EE', borderRadius: 14, padding: '24px', marginBottom: 28 }}>
              <div style={{ fontSize: 14, color: '#0F6E56', lineHeight: 1.8 }}>
                ✓ Your BidLock™ has been submitted<br />
                ✓ Dealers in your area have been notified<br />
                ✓ You&apos;ll receive an email at {email} when a dealer accepts<br />
                ✓ Acceptance locks the price — no renegotiation
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/lease-intelligence" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '13px 28px', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>See more vehicles →</a>
              <a href="/" style={{ background: '#f9f9f7', color: '#111', border: '1.5px solid #eee', borderRadius: 99, padding: '13px 28px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Back to home</a>
            </div>
          </div>
        ) : (
          <>
            <div style={{ background: '#111', borderRadius: 16, padding: '28px', marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Your BidLock™ — ready to submit</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{make} {model} {trim}</div>
              <div style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>
                {seats} seats · {miles},000 mi/yr · 36 months · $0 down
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
                <div style={{ fontSize: 48, fontWeight: 700, color: '#1D9E75', lineHeight: 1 }}>${payment}</div>
                <div style={{ fontSize: 18, color: '#888' }}>/mo</div>
              </div>
              <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>
                  When you submit, this BidLock™ goes live to verified dealers in your area. The first dealer to accept is locked in at <strong style={{ color: '#fff' }}>${payment}/mo</strong>. No negotiating. No games.
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 28 }}>
              {[
                { num: '1', text: 'Your bid goes live to dealers near you' },
                { num: '2', text: 'First dealer to accept is locked in' },
                { num: '3', text: 'You get an email — show up & sign' },
              ].map((step, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px', border: '1px solid #eee', textAlign: 'center' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E1F5EE', color: '#0F6E56', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>{step.num}</div>
                  <div style={{ fontSize: 12, color: '#555', lineHeight: 1.5 }}>{step.text}</div>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 14, padding: '28px', border: '1px solid #eee', marginBottom: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 20 }}>Where should dealers look for you?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { label: 'Your name', value: name, setter: setName, placeholder: 'First and last name', type: 'text' },
                  { label: 'Email address', value: email, setter: setEmail, placeholder: 'you@email.com', type: 'email' },
                  { label: 'Phone number', value: phone, setter: setPhone, placeholder: '(248) 555-0100', type: 'tel' },
                ].map((field, i) => (
                  <div key={i}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: '#111', display: 'block', marginBottom: 6 }}>{field.label}</label>
                    <input
                      value={field.value}
                      onChange={e => { field.setter(e.target.value); setError(''); }}
                      placeholder={field.placeholder}
                      type={field.type}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid #eee', fontSize: 15, fontFamily: 'system-ui', outline: 'none', boxSizing: 'border-box' as const }}
                      onFocus={e => (e.target.style.borderColor = '#1D9E75')}
                      onBlur={e => (e.target.style.borderColor = '#eee')}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#111', display: 'block', marginBottom: 6 }}>Your ZIP code</label>
                  <input
                    value={zip}
                    onChange={e => { setZip(e.target.value.replace(/\D/g, '').slice(0, 5)); setError(''); }}
                    placeholder="48167"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid #eee', fontSize: 15, fontFamily: 'system-ui', outline: 'none', boxSizing: 'border-box' as const }}
                    onFocus={e => (e.target.style.borderColor = '#1D9E75')}
                    onBlur={e => (e.target.style.borderColor = '#eee')}
                  />
                  <div style={{ fontSize: 12, color: '#999', marginTop: 6 }}>Dealers within 50 miles of your ZIP will see your bid.</div>
                </div>
              </div>
            </div>

            {error && (
              <div style={{ fontSize: 14, color: '#DC2626', marginBottom: 12, textAlign: 'center', padding: '10px', background: '#FEF2F2', borderRadius: 8 }}>
                {error}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={!canSubmit || submitting}
              style={{
                width: '100%',
                background: canSubmit ? '#1D9E75' : '#ddd',
                color: canSubmit ? '#fff' : '#999',
                border: 'none',
                borderRadius: 99,
                padding: '16px',
                fontSize: 16,
                fontWeight: 700,
                cursor: canSubmit ? 'pointer' : 'not-allowed',
                marginBottom: 12,
              }}
            >
              {submitting ? 'Submitting...' : `Submit BidLock™ — $${payment}/mo on ${make} ${model}`}
            </button>

            <p style={{ fontSize: 12, color: '#999', textAlign: 'center', lineHeight: 1.6 }}>
              Free for buyers. No commitment until a dealer accepts. Your contact info is only shared with the dealer who accepts your bid.
            </p>
          </>
        )}
      </div>
    </main>
  );
}

export default function ExpressPage() {
  return (
    <Suspense fallback={
      <div style={{ fontFamily: 'system-ui', background: '#f9f9f7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#999' }}>Loading...</div>
      </div>
    }>
      <ExpressContent />
    </Suspense>
  );
}