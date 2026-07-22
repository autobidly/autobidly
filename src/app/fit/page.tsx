"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function FitContent() {
  const searchParams = useSearchParams();
  const make = searchParams.get('make') || '';
  const model = searchParams.get('model') || '';
  const trim = searchParams.get('trim') || '';
  const payment = searchParams.get('payment') || '';
  const seats = searchParams.get('seats') || '';
  const miles = searchParams.get('miles') || '12';
  const category = searchParams.get('category') || '';

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

  const expressUrl = `/bidlock/express?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&trim=${encodeURIComponent(trim)}&payment=${payment}&seats=${seats}&miles=${miles}`;
  const dealsUrl = `/deals?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`;

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <style>{`
        .choice-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 768px) {
          .choice-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <a href="/" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>← Back</a>
      </nav>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '48px 20px' }}>

        {/* VEHICLE CARD */}
        <div style={{ background: '#111', borderRadius: 16, padding: '28px', marginBottom: 32 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>Your selection</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{make} {model} {trim}</div>
          <div style={{ fontSize: 14, color: '#888', marginBottom: 16 }}>
            {category && `${category} · `}{seats} seats · {miles},000 mi/yr · 36 months · $0 down
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <div style={{ fontSize: 42, fontWeight: 700, color: '#1D9E75', lineHeight: 1 }}>${payment}</div>
            <div style={{ fontSize: 18, color: '#888' }}>/mo</div>
          </div>
        </div>

        {/* HEADLINE */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 10 }}>
            What would you like to do?
          </h1>
          <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7 }}>
            You can browse dealers who have this vehicle in stock near you, or submit a BidLock™ and let dealers compete for your business at your exact price.
          </p>
        </div>

        {/* TWO OPTIONS */}
        <div className="choice-grid" style={{ marginBottom: 32 }}>

          {/* OPTION 1 — SEE DEALERS */}
          <a href={dealsUrl} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #eee', padding: '28px 24px', height: '100%', boxSizing: 'border-box', cursor: 'pointer', transition: 'border-color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#1D9E75')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>🔍</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 10 }}>See dealers near me</div>
              <div style={{ fontSize: 14, color: '#666', lineHeight: 1.7, marginBottom: 20 }}>
                Browse verified dealers within 50 miles who have the {make} {model} in stock. See real prices, inventory counts, and how far each dealer is from you.
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f9f9f7', border: '1.5px solid #eee', borderRadius: 99, padding: '10px 20px', fontSize: 14, fontWeight: 600, color: '#111' }}>
                Browse dealers →
              </div>
            </div>
          </a>

          {/* OPTION 2 — BIDLOCK */}
          <a href={expressUrl} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#111', borderRadius: 14, padding: '28px 24px', height: '100%', boxSizing: 'border-box', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.95')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>🔒</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Submit a BidLock™</div>
              <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7, marginBottom: 20 }}>
                Name your exact payment — <strong style={{ color: '#fff' }}>${payment}/mo</strong>. Verified dealers compete. The first to accept is locked in at your price. No negotiating.
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#1D9E75', borderRadius: 99, padding: '10px 20px', fontSize: 14, fontWeight: 600, color: '#fff' }}>
                Submit a BidLock™ — free →
              </div>
            </div>
          </a>
        </div>

        {/* EXPLAINER */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', border: '1px solid #eee' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 12 }}>What&apos;s the difference?</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: '🔍', title: 'Browse dealers', desc: 'See what\'s available now. Good if you\'re still researching or want to compare options before committing.' },
              { icon: '🔒', title: 'BidLock™', desc: 'You name your price and dealers compete. Good if you know what you want and are ready to move. First dealer to accept is locked in — binding on both sides.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #f0f0f0' }}>
                <div style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 3 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

export default function FitPage() {
  return (
    <Suspense fallback={
      <div style={{ fontFamily: 'system-ui', background: '#f9f9f7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#999' }}>Loading...</div>
      </div>
    }>
      <FitContent />
    </Suspense>
  );
}