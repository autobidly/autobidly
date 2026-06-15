"use client";

export default function HomePage() {

  function getLeaseScore(make: string, model: string, trim: string = ''): number {
    let score = 60;
    const m = make.toLowerCase();
    const mo = model.toLowerCase();
    const t = trim.toLowerCase();
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    if (day >= 26) score += 10;
    if ([3, 6, 9, 12].includes(month)) score += 15;
    if (month === 12) score += 10;
    if (day >= 26 && [3, 6, 9, 12].includes(month)) score += 5;
    if (m.includes('chevrolet') || m.includes('gmc') || m.includes('buick') || m.includes('cadillac')) score += 10;
    if (m.includes('bmw') || m.includes('mercedes') || m.includes('audi') || m.includes('lexus')) score += 8;
    if (m.includes('honda') || m.includes('hyundai') || m.includes('kia')) score += 6;
    if (m.includes('ford') || m.includes('ram')) score += 5;
    if (mo.includes('wrangler') || mo.includes('bronco') || mo.includes('tacoma') || mo.includes('4runner')) score -= 12;
    if (mo.includes('maverick') || mo.includes('santa cruz')) score -= 8;
    if (t.includes('gt3') || t.includes('raptor') || t.includes('hellcat') || t.includes('nismo')) score -= 15;
    if (t.includes('rubicon') || t.includes('trd pro') || t.includes('at4x')) score -= 8;
    if (mo.includes('equinox') || mo.includes('trax') || mo.includes('blazer') || mo.includes('traverse')) score += 8;
    if (mo.includes('enclave') || mo.includes('envision') || mo.includes('encore')) score += 10;
    if (mo.includes('3 series') || mo.includes('c-class') || mo.includes('a4') || mo.includes('q5')) score += 8;
    if (mo.includes('escape') || mo.includes('explorer') || mo.includes('edge')) score += 6;
    if (mo.includes('sierra') || mo.includes('silverado')) score += 6;
    if (mo.includes('accord') || mo.includes('cr-v') || mo.includes('pilot')) score += 6;
    return Math.max(10, Math.min(100, score));
  }

  const hotVehicles = [
    { make: 'Buick', model: 'Enclave', trim: 'Avenir', category: 'SUV' },
    { make: 'GMC', model: 'Sierra 1500', trim: 'SLT', category: 'Truck' },
    { make: 'Chevrolet', model: 'Traverse', trim: 'Premier', category: 'SUV' },
    { make: 'BMW', model: '3 Series', trim: '330i', category: 'Sedan' },
    { make: 'Chevrolet', model: 'Equinox', trim: 'LT', category: 'SUV' },
    { make: 'GMC', model: 'Acadia', trim: 'Denali', category: 'SUV' },
    { make: 'Honda', model: 'CR-V', trim: 'EX-L', category: 'SUV' },
    { make: 'Cadillac', model: 'XT5', trim: 'Premium Luxury', category: 'SUV' },
    { make: 'Ford', model: 'Explorer', trim: 'XLT', category: 'SUV' },
    { make: 'Audi', model: 'Q5', trim: 'Premium Plus', category: 'SUV' },
    { make: 'Chevrolet', model: 'Blazer', trim: 'RS', category: 'SUV' },
    { make: 'GMC', model: 'Canyon', trim: 'AT4', category: 'Truck' },
  ].map(v => ({ ...v, score: getLeaseScore(v.make, v.model, v.trim) }))
    .sort((a, b) => b.score - a.score);

  function scoreColor(score: number) {
    if (score >= 85) return '#0F6E56';
    if (score >= 70) return '#1D9E75';
    if (score >= 50) return '#B45309';
    return '#DC2626';
  }

  function scoreLabel(score: number) {
    if (score >= 85) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
  }

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, background: '#fff' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 40px', borderBottom: '1px solid #e5e5e5', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/how-it-works" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>How it works</a>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/dealer" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="/lease-intelligence" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Lease Intelligence</a>
          <a href="/profile" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>My Lease Passport</a>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '48px 40px 40px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #ddd', borderRadius: 99, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              <span style={{ fontSize: 12, color: '#555' }}>The lease marketplace dealers didn&apos;t want you to know about</span>
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 16, color: '#111' }}>
              Name your price.<br />Dealers <span style={{ color: '#1D9E75' }}>compete.</span>
            </h1>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, maxWidth: 460, marginBottom: 24 }}>
              Submit the exact vehicle and payment you want. Verified dealers compete. First to accept is locked in. No negotiating. No games.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              <a href="/bidlock" style={{ background: '#111', color: '#fff', borderRadius: 99, padding: '13px 28px', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Submit a BidLock™ — free</a>
              <a href="/deals" style={{ background: '#f9f9f7', color: '#111', border: '1.5px solid #e5e5e5', borderRadius: 99, padding: '13px 28px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Browse verified deals</a>
            </div>
            <div style={{ display: 'flex', gap: 28 }}>
              {[{ value: '$184', label: 'avg monthly savings' }, { value: '4,200+', label: 'bids accepted' }, { value: '47', label: 'dealer partners' }].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: '#111', letterSpacing: '-0.5px' }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: '#999', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* PHONE */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 260, background: '#111', borderRadius: 36, padding: 10, boxShadow: '0 32px 64px rgba(0,0,0,0.18)' }}>
              <div style={{ background: '#111', borderRadius: 28, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 6, paddingBottom: 4 }}>
                  <div style={{ width: 70, height: 18, background: '#000', borderRadius: 99 }}></div>
                </div>
                <div style={{ background: '#f9f9f7', borderRadius: 22, overflow: 'hidden' }}>
                  <div style={{ background: '#fff', padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
                  </div>
                  <div style={{ padding: 12 }}>
                    <div style={{ background: '#fff', borderRadius: 10, padding: 12, marginBottom: 10, border: '1px solid #eee' }}>
                      <div style={{ fontSize: 9, fontWeight: 600, color: '#1D9E75', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your BidLock™</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#111', marginBottom: 1 }}>2025 F-150 XLT 4x4</div>
                      <div style={{ fontSize: 10, color: '#999', marginBottom: 6 }}>Crew Cab · 36mo · 12k/yr</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div><div style={{ fontSize: 9, color: '#999' }}>Payment</div><div style={{ fontSize: 18, fontWeight: 700, color: '#1D9E75' }}>$495<span style={{ fontSize: 11, fontWeight: 400 }}>/mo</span></div></div>
                        <div style={{ textAlign: 'right' }}><div style={{ fontSize: 9, color: '#999' }}>Down</div><div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>$0</div></div>
                      </div>
                    </div>
                    <div style={{ background: '#E1F5EE', borderRadius: 8, padding: '8px 12px', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', flexShrink: 0 }}></div>
                      <div><div style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56' }}>Bid sent to 8 dealers</div><div style={{ fontSize: 9, color: '#1D9E75' }}>Expires in 47:32:18</div></div>
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Dealer responses</div>
                    {[
                      { name: 'Suburban Ford', location: 'Sterling Heights', status: 'reviewing', time: '2m ago' },
                      { name: 'LaFontaine Buick', location: 'Highland', status: 'accepted', time: 'Just now' },
                      { name: 'Fox Ford', location: 'Ann Arbor', status: 'reviewing', time: '5m ago' },
                    ].map((dealer, i) => (
                      <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '8px 10px', marginBottom: 6, border: dealer.status === 'accepted' ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div><div style={{ fontSize: 10, fontWeight: 600, color: '#111' }}>{dealer.name}</div><div style={{ fontSize: 9, color: '#999' }}>{dealer.location}</div></div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: 9, fontWeight: 600, color: dealer.status === 'accepted' ? '#1D9E75' : '#f59e0b', background: dealer.status === 'accepted' ? '#E1F5EE' : '#FEF3C7', padding: '2px 6px', borderRadius: 99 }}>{dealer.status === 'accepted' ? '✓ Accepted' : 'Reviewing'}</div>
                            <div style={{ fontSize: 8, color: '#bbb', marginTop: 1 }}>{dealer.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button style={{ width: '100%', background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: 10, fontSize: 11, fontWeight: 600, cursor: 'pointer', marginTop: 2 }}>View accepted deal →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE FEATURES */}
      <section style={{ padding: '0 40px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { icon: '🔒', title: 'Submit a BidLock™', desc: 'Name your exact vehicle and payment. Verified dealers compete. First to accept is locked in.', cta: 'Submit a bid →', href: '/bidlock', dark: true },
            { icon: '🔍', title: 'Browse verified deals', desc: 'Real lease prices near you. Only your incentives applied. No bait pricing. No surprises.', cta: 'See deals near me →', href: '/deals', dark: false },
            { icon: '📊', title: 'Best leases right now', desc: 'Our Lease Intelligence Score™ ranks every vehicle by how good the deal is today.', cta: 'See top vehicles →', href: '#lease-intelligence', dark: false },
          ].map((f, i) => (
            <div key={i} style={{ background: f.dark ? '#111' : '#f9f9f7', border: f.dark ? 'none' : '1px solid #eee', borderRadius: 14, padding: '22px 20px' }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: f.dark ? '#fff' : '#111', marginBottom: 8 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: f.dark ? '#888' : '#666', lineHeight: 1.65, marginBottom: 16 }}>{f.desc}</div>
              <a href={f.href} style={{ fontSize: 13, fontWeight: 600, color: f.dark ? '#1D9E75' : '#111', textDecoration: 'none' }}>{f.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#085041', padding: '11px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: 48, animation: 'scroll 22s linear infinite' }}>
          {['2025 F-150 XLT 4x4 — $0 down, $489/mo accepted · Detroit, MI', '2025 RAV4 Hybrid XSE — $0 down, $312/mo accepted · Chicago, IL', '2025 Silverado 1500 LT — $0 down, $419/mo accepted · Dallas, TX', '2025 Enclave Essence — $0 down, $539/mo accepted · Columbus, OH', '2025 Model 3 RWD — $0 down, $379/mo accepted · Austin, TX', '2025 F-150 XLT 4x4 — $0 down, $489/mo accepted · Detroit, MI', '2025 RAV4 Hybrid XSE — $0 down, $312/mo accepted · Chicago, IL', '2025 Silverado 1500 LT — $0 down, $419/mo accepted · Dallas, TX'].map((item, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 500, color: '#9FE1CB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>{item}
            </span>
          ))}
        </div>
      </div>

      {/* CERTIFIED DEAL */}
      <section style={{ padding: '40px 40px', background: '#fff', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#111', color: '#fff', fontSize: 10, fontWeight: 600, padding: '4px 12px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              AutoBidly Certified Deal
            </div>
            <span style={{ fontSize: 12, color: '#999' }}>Verified by AutoBidly · Metro Detroit · This week only</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', background: '#f9f9f7', borderRadius: 14, padding: '24px 28px', border: '1.5px solid #1D9E75' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 24, alignItems: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🚙</div>
              <div>
                <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>2025 Buick Enclave Avenir AWD</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 4 }}>$499/mo · $0 down · 36mo</div>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>Feldman Buick GMC · West Bloomfield, MI · 12,000 mi/yr</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['GM Employee eligible', 'Conquest eligible', 'Lease loyalty eligible', 'Verified VIN on lot'].map((tag, i) => (
                    <span key={i} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 99, background: '#E1F5EE', color: '#0F6E56', border: '1px solid #9FE1CB' }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'center', padding: '0 20px', borderLeft: '1px solid #eee' }}>
                <div style={{ fontSize: 10, color: '#999', marginBottom: 3 }}>Expires in</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#111', fontFamily: 'monospace' }}>4d 12h</div>
                <div style={{ fontSize: 10, color: '#999', marginTop: 3 }}>This week only</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 148 }}>
              <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '11px 20px', fontSize: 13, fontWeight: 500, textDecoration: 'none', textAlign: 'center' }}>Lock this deal →</a>
              <div style={{ fontSize: 10, color: '#999', textAlign: 'center' }}>✓ AutoBidly verified · Free to lock</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRTY SECRET */}
      <section style={{ padding: '56px 40px', background: '#f9f9f7' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 99, marginBottom: 14 }}>The dirty secret</span>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#111', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 16 }}>
              Same car. Same sticker.<br /><span style={{ color: '#1D9E75' }}>Wildly different prices.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 10 }}>Five dealers. Same 2025 Sierra 1500 Elevation. Same GM incentives. Same customer with GM employee pricing and Costco membership.</p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>Five completely different monthly payments — because every dealer decides for themselves how much they think they can get away with.</p>
            <p style={{ fontSize: 15, color: '#111', fontWeight: 600 }}>AutoBidly fixes this. We show you what you should actually be paying.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { dealer: 'Dealer A · Northville, MI', price: '$619/mo + $15,000 down', good: false },
              { dealer: 'Dealer B · Novi, MI', price: '$578/mo + $3,000 down', good: false },
              { dealer: 'Dealer C · Novi, MI', price: '$541/mo + $1,000 down', good: false },
              { dealer: 'Dealer D · 20 min away', price: '$389/mo + $0 down', good: true },
            ].map((d, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px 18px', border: d.good ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                <div style={{ fontSize: 10, fontWeight: 500, color: '#999', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{d.dealer}</div>
                <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', color: d.good ? '#1D9E75' : '#E24B4A' }}>{d.price}</div>
                <div style={{ fontSize: 11, color: '#999', marginTop: 3 }}>Same car. Same incentives available.</div>
              </div>
            ))}
            <div style={{ fontSize: 12, color: '#999', textAlign: 'center', fontStyle: 'italic' }}>AutoBidly finds your Dealer D every time.</div>
          </div>
        </div>
      </section>

      {/* LEASE INTELLIGENCE SCORE */}
      <section id="lease-intelligence" style={{ padding: '56px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
            <div>
              <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 99, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lease Intelligence Score™</div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 4 }}>Best vehicles to lease right now</h2>
              <p style={{ fontSize: 14, color: '#666' }}>Updated daily · Based on manufacturer incentives, inventory & market timing</p>
            </div>
            <a href="/bidlock" style={{ fontSize: 13, color: '#1D9E75', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>Submit a BidLock™ for any vehicle →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {hotVehicles.map((v, i) => (
              <a key={i} href="/bidlock" style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: '#f9f9f7', borderRadius: 10, border: '1px solid #eee', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.background = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.background = '#f9f9f7'; }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: '#999', marginBottom: 2 }}>{v.category}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 1 }}>{v.make} {v.model}</div>
                    <div style={{ fontSize: 11, color: '#888' }}>{v.trim}</div>
                    <div style={{ marginTop: 8, height: 3, background: '#e5e5e5', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${v.score}%`, background: scoreColor(v.score), borderRadius: 99 }} />
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: scoreColor(v.score), lineHeight: 1 }}>{v.score}</div>
                    <div style={{ fontSize: 10, color: scoreColor(v.score), fontWeight: 600, marginTop: 1 }}>{scoreLabel(v.score)}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '56px 40px', background: '#f9f9f7' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 99, marginBottom: 12 }}>How it works</span>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 6 }}>From browser to keys in 4 steps.</h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 32 }}>No phone calls. No haggling. No &quot;let me check with my manager.&quot;</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: '#e5e5e5', borderRadius: 10, overflow: 'hidden' }}>
            {[
              { num: '01', title: 'Select your eligibility', body: 'Employee pricing, conquest, returning lessee, military, Costco. Every discount you qualify for, applied automatically.' },
              { num: '02', title: 'Browse or bid', body: 'See the lowest real lease prices near you, or build your exact vehicle and name the payment you want.' },
              { num: '03', title: 'Dealers accept', body: 'Your pre-qualified offer hits every dealer dashboard. The first to accept wins your business — binding.' },
              { num: '04', title: 'Walk in & sign', body: "Price is locked. You're already qualified. Show up within 72 hours, sign the paperwork, drive away." },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '24px 20px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', marginBottom: 14, letterSpacing: '0.05em' }}>{s.num} —</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section style={{ padding: '56px 40px', background: '#E1F5EE' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#1D9E75', color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 99, marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Launching in Metro Detroit</div>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 10 }}>Be first when we go live.</h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 24, lineHeight: 1.7 }}>Join the waitlist and you&apos;ll be the first to know when real dealer deals are live in your area.</p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 460, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input id="waitlist-email" type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: 220, padding: '12px 16px', borderRadius: 99, border: '1.5px solid #9FE1CB', fontSize: 14, outline: 'none', fontFamily: 'system-ui' }} />
            <button id="waitlist-btn" onClick={async () => {
              const emailEl = document.getElementById('waitlist-email') as HTMLInputElement;
              const btn = document.getElementById('waitlist-btn') as HTMLButtonElement;
              const msg = document.getElementById('waitlist-msg') as HTMLDivElement;
              const email = emailEl.value;
              if (!email || !email.includes('@')) { msg.textContent = 'Please enter a valid email.'; msg.style.color = '#E24B4A'; return; }
              btn.textContent = 'Joining...'; btn.disabled = true;
              try {
                const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
                if (res.ok) { msg.textContent = "You're on the list!"; msg.style.color = '#0F6E56'; emailEl.value = ''; btn.textContent = "You're in!"; }
                else { msg.textContent = 'Something went wrong.'; msg.style.color = '#E24B4A'; btn.textContent = 'Join waitlist'; btn.disabled = false; }
              } catch { msg.textContent = 'Something went wrong.'; msg.style.color = '#E24B4A'; btn.textContent = 'Join waitlist'; btn.disabled = false; }
            }} style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Join waitlist</button>
          </div>
          <div id="waitlist-msg" style={{ marginTop: 10, fontSize: 13, minHeight: 18 }}></div>
          <p style={{ fontSize: 11, color: '#888', marginTop: 10 }}>No spam. No selling your email. Just a heads up when we launch.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 40px', background: '#04342C', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: 12, lineHeight: 1.15 }}>Stop negotiating.<br /><span style={{ color: '#5DCAA5' }}>Start driving.</span></h2>
        <p style={{ fontSize: 16, color: '#9FE1CB', marginBottom: 28 }}>Free to browse deals and submit bids. No commitment until you say yes.</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Submit a BidLock™ — free</a>
          <a href="/deals" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #ffffff44', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Browse verified deals</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '24px 40px', background: '#0a0a0a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/privacy" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Terms</a>
          <a href="/dealer" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="mailto:info@autobidly.com" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Contact</a>
        </div>
        <div style={{ fontSize: 11, color: '#444' }}>© 2026 AutoBidly LLC · Michigan</div>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </main>
  );
}