"use client";
import { useState } from "react";

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
  if (mo.includes('tucson') || mo.includes('santa fe') || mo.includes('telluride') || mo.includes('sorento')) score += 6;
  if (mo.includes('xt4') || mo.includes('xt5') || mo.includes('xt6') || mo.includes('escalade')) score += 8;
  if (mo.includes('navigator') || mo.includes('aviator') || mo.includes('nautilus')) score += 7;
  return Math.max(10, Math.min(100, score));
}

const allVehicles = [
  { make: 'Chevrolet', model: 'Trax', trim: 'LT', category: 'SUV', seats: 5, estPayment: 249 },
  { make: 'Hyundai', model: 'Tucson', trim: 'SEL', category: 'SUV', seats: 5, estPayment: 339 },
  { make: 'Chevrolet', model: 'Equinox', trim: 'LT', category: 'SUV', seats: 5, estPayment: 359 },
  { make: 'Honda', model: 'Accord', trim: 'EX-L', category: 'Sedan', seats: 5, estPayment: 349 },
  { make: 'Honda', model: 'CR-V', trim: 'EX-L', category: 'SUV', seats: 5, estPayment: 389 },
  { make: 'Ford', model: 'Ranger', trim: 'XLT', category: 'Truck', seats: 5, estPayment: 379 },
  { make: 'Chevrolet', model: 'Blazer', trim: 'RS', category: 'SUV', seats: 5, estPayment: 419 },
  { make: 'GMC', model: 'Canyon', trim: 'AT4', category: 'Truck', seats: 5, estPayment: 429 },
  { make: 'Ford', model: 'Explorer', trim: 'XLT', category: 'SUV', seats: 7, estPayment: 449 },
  { make: 'Kia', model: 'Telluride', trim: 'EX', category: 'SUV', seats: 8, estPayment: 459 },
  { make: 'Chevrolet', model: 'Silverado 1500', trim: 'LT', category: 'Truck', seats: 5, estPayment: 469 },
  { make: 'Ford', model: 'F-150', trim: 'XLT', category: 'Truck', seats: 5, estPayment: 469 },
  { make: 'Chevrolet', model: 'Traverse', trim: 'Premier', category: 'SUV', seats: 7, estPayment: 479 },
  { make: 'Buick', model: 'Enclave', trim: 'Avenir', category: 'SUV', seats: 7, estPayment: 499 },
  { make: 'BMW', model: '3 Series', trim: '330i', category: 'Sedan', seats: 5, estPayment: 499 },
  { make: 'GMC', model: 'Sierra 1500', trim: 'SLT', category: 'Truck', seats: 5, estPayment: 489 },
  { make: 'BMW', model: 'X3', trim: 'sDrive30i', category: 'SUV', seats: 5, estPayment: 529 },
  { make: 'GMC', model: 'Acadia', trim: 'Denali', category: 'SUV', seats: 7, estPayment: 549 },
  { make: 'Audi', model: 'Q5', trim: 'Premium Plus', category: 'SUV', seats: 5, estPayment: 569 },
  { make: 'Cadillac', model: 'XT5', trim: 'Premium Luxury', category: 'SUV', seats: 5, estPayment: 579 },
  { make: 'Lincoln', model: 'Nautilus', trim: 'Reserve', category: 'Luxury SUV', seats: 5, estPayment: 579 },
  { make: 'Mercedes-Benz', model: 'C-Class', trim: 'C 300', category: 'Sedan', seats: 5, estPayment: 509 },
  { make: 'Cadillac', model: 'XT6', trim: 'Premium Luxury', category: 'Luxury SUV', seats: 7, estPayment: 619 },
  { make: 'Mercedes-Benz', model: 'GLC', trim: '300', category: 'Luxury SUV', seats: 5, estPayment: 649 },
  { make: 'BMW', model: 'X5', trim: 'xDrive40i', category: 'Luxury SUV', seats: 7, estPayment: 729 },
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

const hotVehicles = allVehicles.slice(0, 12);

export default function HomePage() {
  const [fitBudget, setFitBudget] = useState('400');
  const [fitSeats, setFitSeats] = useState('5');
  const [fitMiles, setFitMiles] = useState('12');
  const [fitResults, setFitResults] = useState<typeof allVehicles | null>(null);

  function findMyFit() {
    const budget = parseInt(fitBudget);
    const seats = parseInt(fitSeats);
    const results = allVehicles.filter(v => v.estPayment <= budget && v.seats >= seats).slice(0, 5);
    setFitResults(results);
  }

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, background: '#fff' }}>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-mobile-only { display: none; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; max-width: 1100px; margin: 0 auto; }
        .phone-mockup { display: flex; justify-content: center; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .fit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: flex-start; }
        .certified-inner { display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: center; }
        .gap-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; max-width: 1100px; margin: 0 auto; }
        .li-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
        .hiw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: #e5e5e5; border-radius: 10px; overflow: hidden; }
        .hiw-cell { background: #fff; padding: 24px 20px; border-radius: 0; border: none; }
        .insider-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
        .certified-expiry { display: block; }
        .section-pad { padding: 56px 40px; }
        .section-pad-sm { padding: 40px 40px; }
        .hero-pad { padding: 48px 40px 40px; }
        .nav-pad { padding: 14px 40px; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav-mobile-only { display: flex; }
          .nav-pad { padding: 14px 20px; }
          .hero-grid { grid-template-columns: 1fr; gap: 0; }
          .phone-mockup { display: none; }
          .hero-pad { padding: 28px 20px 24px; }
          .features-grid { grid-template-columns: 1fr; gap: 12px; }
          .section-pad { padding: 36px 20px; }
          .section-pad-sm { padding: 28px 20px; }
          .fit-grid { grid-template-columns: 1fr; gap: 28px; }
          .certified-inner { grid-template-columns: 1fr; }
          .certified-expiry { display: none; }
          .gap-grid { grid-template-columns: 1fr; gap: 28px; }
          .li-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .hiw-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; background: transparent; border-radius: 0; overflow: visible; }
          .hiw-cell { border-radius: 10px; border: 1px solid #eee; padding: 18px 16px; }
          .insider-grid { grid-template-columns: 1fr; }
          h1 { font-size: 32px !important; }
          h2.section-title { font-size: 24px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e5e5e5', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
        <div className="nav-links">
          <a href="/how-it-works" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>How it works</a>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/lease-intelligence" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Lease Intelligence</a>
          <a href="/insider" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>The Insider</a>
          <a href="/dealer-login" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
        <div className="nav-mobile-only">
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 18px', fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-pad" style={{ background: '#fff' }}>
        <div className="hero-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #ddd', borderRadius: 99, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              <span style={{ fontSize: 12, color: '#555' }}>The lease marketplace that puts buyers in the driver&apos;s seat</span>
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
          <div className="phone-mockup">
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
                      <div style={{ fontSize: 9, fontWeight: 600, color: '#1D9E75', marginBottom: 4, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>Your BidLock™</div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#111', marginBottom: 1 }}>2026 Silverado 1500 LT</div>
                      <div style={{ fontSize: 10, color: '#999', marginBottom: 6 }}>Crew Cab · 4x4 · 36mo · 12k/yr</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div><div style={{ fontSize: 9, color: '#999' }}>Payment</div><div style={{ fontSize: 18, fontWeight: 700, color: '#1D9E75' }}>$489<span style={{ fontSize: 11, fontWeight: 400 }}>/mo</span></div></div>
                        <div style={{ textAlign: 'right' as const }}><div style={{ fontSize: 9, color: '#999' }}>Down</div><div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>$0</div></div>
                      </div>
                    </div>
                    <div style={{ background: '#E1F5EE', borderRadius: 8, padding: '8px 12px', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1D9E75', flexShrink: 0 }}></div>
                      <div><div style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56' }}>Bid sent to 6 dealers</div><div style={{ fontSize: 9, color: '#1D9E75' }}>Expires in 71:44:22</div></div>
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 6 }}>Dealer responses</div>
                    {[
                      { name: 'Feldman Chevrolet', location: 'Novi, MI', status: 'accepted', time: 'Just now' },
                      { name: 'LaFontaine Chevy', location: 'Highland, MI', status: 'reviewing', time: '4m ago' },
                      { name: 'Bill Brown Chevy', location: 'Livonia, MI', status: 'reviewing', time: '7m ago' },
                    ].map((dealer, i) => (
                      <div key={i} style={{ background: '#fff', borderRadius: 8, padding: '8px 10px', marginBottom: 6, border: dealer.status === 'accepted' ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div><div style={{ fontSize: 10, fontWeight: 600, color: '#111' }}>{dealer.name}</div><div style={{ fontSize: 9, color: '#999' }}>{dealer.location}</div></div>
                          <div style={{ textAlign: 'right' as const }}>
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
      <section className="section-pad-sm" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="features-grid">
            {[
              { icon: '🔒', title: 'Submit a BidLock™', desc: 'Name your exact vehicle and payment. Verified dealers compete. First to accept is locked in.', cta: 'Submit a bid →', href: '/bidlock', dark: true },
              { icon: '🔍', title: 'Browse verified deals', desc: 'Real lease prices near you. Only your incentives applied. No bait pricing. No surprises.', cta: 'See deals near me →', href: '/deals', dark: false },
              { icon: '📊', title: 'Best leases right now', desc: 'Our Lease Intelligence Score™ ranks every vehicle by how good the deal is today — personalized to your incentives.', cta: 'See top vehicles →', href: '/lease-intelligence', dark: false },
            ].map((f, i) => (
              <div key={i} style={{ background: f.dark ? '#111' : '#f9f9f7', border: f.dark ? 'none' : '1px solid #eee', borderRadius: 14, padding: '22px 20px' }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: f.dark ? '#fff' : '#111', marginBottom: 8 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: f.dark ? '#888' : '#666', lineHeight: 1.65, marginBottom: 16 }}>{f.desc}</div>
                <a href={f.href} style={{ fontSize: 13, fontWeight: 600, color: f.dark ? '#1D9E75' : '#111', textDecoration: 'none' }}>{f.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND MY FIT */}
      <section className="section-pad" style={{ background: '#f9f9f7', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="fit-grid">
            <div>
              <div style={{ display: 'inline-block', background: '#111', color: '#1D9E75', fontSize: 10, fontWeight: 600, padding: '3px 12px', borderRadius: 99, marginBottom: 14, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>Find My Fit</div>
              <h2 className="section-title" style={{ fontSize: 32, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 12 }}>
                What can I lease for <span style={{ color: '#1D9E75' }}>${fitBudget}/mo?</span>
              </h2>
              <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>
                Tell us your budget, seats, and mileage. We&apos;ll show you every vehicle that fits — ranked by score.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#111', display: 'block', marginBottom: 8 }}>Max monthly payment</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                    {['300', '350', '400', '450', '500', '600', '700'].map(val => (
                      <button key={val} onClick={() => { setFitBudget(val); setFitResults(null); }}
                        style={{ padding: '9px 14px', borderRadius: 99, fontSize: 14, fontWeight: 500, cursor: 'pointer', border: '1.5px solid', borderColor: fitBudget === val ? '#1D9E75' : '#ddd', background: fitBudget === val ? '#E1F5EE' : '#fff', color: fitBudget === val ? '#0F6E56' : '#555' }}
                      >${val}/mo</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#111', display: 'block', marginBottom: 8 }}>Minimum seats</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                    {[{ val: '2', label: 'Any' }, { val: '5', label: '5 seats' }, { val: '7', label: '7 seats' }, { val: '8', label: '8 seats' }].map(opt => (
                      <button key={opt.val} onClick={() => { setFitSeats(opt.val); setFitResults(null); }}
                        style={{ padding: '9px 16px', borderRadius: 99, fontSize: 14, fontWeight: 500, cursor: 'pointer', border: '1.5px solid', borderColor: fitSeats === opt.val ? '#1D9E75' : '#ddd', background: fitSeats === opt.val ? '#E1F5EE' : '#fff', color: fitSeats === opt.val ? '#0F6E56' : '#555' }}
                      >{opt.label}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#111', display: 'block', marginBottom: 8 }}>Miles per year</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
                    {[{ val: '10', label: '10,000' }, { val: '12', label: '12,000' }, { val: '15', label: '15,000' }].map(opt => (
                      <button key={opt.val} onClick={() => { setFitMiles(opt.val); setFitResults(null); }}
                        style={{ padding: '9px 16px', borderRadius: 99, fontSize: 14, fontWeight: 500, cursor: 'pointer', border: '1.5px solid', borderColor: fitMiles === opt.val ? '#1D9E75' : '#ddd', background: fitMiles === opt.val ? '#E1F5EE' : '#fff', color: fitMiles === opt.val ? '#0F6E56' : '#555' }}
                      >{opt.label} mi/yr</button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={findMyFit} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer', width: '100%' }}>
                Show me what fits →
              </button>
              <p style={{ fontSize: 12, color: '#999', marginTop: 10, lineHeight: 1.5 }}>
                * $0 down, 36mo, excellent credit. <a href="/lease-intelligence" style={{ color: '#1D9E75', textDecoration: 'none' }}>Personalize with your incentives →</a>
              </p>
            </div>
            <div>
              {fitResults === null ? (
                <div style={{ background: '#fff', borderRadius: 14, border: '1.5px dashed #ddd', padding: '40px 24px', textAlign: 'center' as const }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 8 }}>Your matches will appear here</div>
                  <div style={{ fontSize: 14, color: '#999', lineHeight: 1.65 }}>Select your budget, seats, and mileage then hit &quot;Show me what fits&quot;</div>
                </div>
              ) : fitResults.length === 0 ? (
                <div style={{ background: '#fff', borderRadius: 14, border: '1.5px solid #eee', padding: '40px 24px', textAlign: 'center' as const }}>
                  <div style={{ fontSize: 36, marginBottom: 12 }}>🤔</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 8 }}>No exact matches found</div>
                  <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: 16 }}>Submit a BidLock™ →</a>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' as const, gap: 8 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{fitResults.length} vehicle{fitResults.length !== 1 ? 's' : ''} fit your budget</div>
                    <div style={{ fontSize: 12, color: '#999' }}>Ranked by Lease Intelligence Score™</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                    {fitResults.map((v, i) => (
                      <a key={i} href={`/bidlock/express?make=${encodeURIComponent(v.make)}&model=${encodeURIComponent(v.model)}&trim=${encodeURIComponent(v.trim)}&payment=${v.estPayment}&seats=${v.seats}&miles=${fitMiles}`} style={{ textDecoration: 'none' }}>
                        <div style={{ background: '#fff', borderRadius: 12, border: i === 0 ? '1.5px solid #1D9E75' : '1px solid #eee', padding: '16px 18px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}
                          onMouseEnter={e => (e.currentTarget.style.borderColor = '#1D9E75')}
                          onMouseLeave={e => (e.currentTarget.style.borderColor = i === 0 ? '#1D9E75' : '#eee')}
                        >
                          <div>
                            {i === 0 && <div style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '2px 8px', borderRadius: 99, display: 'inline-block', marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>Best match</div>}
                            <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 2 }}>{v.make} {v.model} {v.trim}</div>
                            <div style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>{v.category} · {v.seats} seats · est. ${v.estPayment}/mo</div>
                            <div style={{ height: 3, background: '#eee', borderRadius: 99, overflow: 'hidden', maxWidth: 180 }}>
                              <div style={{ height: '100%', width: `${v.score}%`, background: scoreColor(v.score), borderRadius: 99 }} />
                            </div>
                          </div>
                          <div style={{ textAlign: 'center' as const }}>
                            <div style={{ fontSize: 28, fontWeight: 700, color: scoreColor(v.score), lineHeight: 1 }}>{v.score}</div>
                            <div style={{ fontSize: 10, color: scoreColor(v.score), fontWeight: 600, marginTop: 2 }}>{scoreLabel(v.score)}</div>
                            <div style={{ fontSize: 11, color: '#1D9E75', marginTop: 6, fontWeight: 500 }}>BidLock™ →</div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, textAlign: 'center' as const }}>
                    <a href="/lease-intelligence" style={{ fontSize: 13, color: '#1D9E75', fontWeight: 500, textDecoration: 'none' }}>See full rankings →</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#085041', padding: '11px 0', overflow: 'hidden', whiteSpace: 'nowrap' as const }}>
        <div style={{ display: 'inline-flex', gap: 48, animation: 'scroll 22s linear infinite' }}>
          {['2026 Silverado 1500 LT — $0 down, $489/mo · Detroit, MI', '2026 Equinox LT — $0 down, $359/mo · Novi, MI', '2026 Traverse Premier — $0 down, $479/mo · Troy, MI', '2026 Tahoe LT — $0 down, $699/mo · Birmingham, MI', '2026 Trax LT — $0 down, $279/mo · Livonia, MI', '2026 Silverado 1500 LT — $0 down, $489/mo · Detroit, MI', '2026 Equinox LT — $0 down, $359/mo · Novi, MI', '2026 Traverse Premier — $0 down, $479/mo · Troy, MI'].map((item, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 500, color: '#9FE1CB', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>{item}
            </span>
          ))}
        </div>
      </div>

      {/* CERTIFIED DEAL */}
      <section className="section-pad-sm" style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' as const }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#111', color: '#fff', fontSize: 10, fontWeight: 600, padding: '4px 12px', borderRadius: 99, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              AutoBidly Certified Deal
            </div>
            <span style={{ fontSize: 12, color: '#999' }}>Verified · Metro Detroit · This week only</span>
          </div>
          <div style={{ background: '#f9f9f7', borderRadius: 14, padding: '24px 28px', border: '1.5px solid #1D9E75' }}>
            <div className="certified-inner">
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>🛻</div>
                <div>
                  <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 3 }}>2026 Chevrolet Silverado 1500 LT</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 4 }}>$489/mo · $0 down · 36mo</div>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>Feldman Chevrolet · Novi, MI · 12,000 mi/yr · Crew Cab 4x4</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const }}>
                    {['GM Employee eligible', 'Conquest eligible', 'Verified VIN on lot', 'Lease loyalty eligible'].map((tag, i) => (
                      <span key={i} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 99, background: '#E1F5EE', color: '#0F6E56', border: '1px solid #9FE1CB' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10, minWidth: 148 }}>
                <div className="certified-expiry" style={{ textAlign: 'center' as const, padding: '0 20px', borderLeft: '1px solid #eee' }}>
                  <div style={{ fontSize: 10, color: '#999', marginBottom: 3 }}>Expires in</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#111', fontFamily: 'monospace' }}>4d 12h</div>
                </div>
                <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '11px 20px', fontSize: 13, fontWeight: 500, textDecoration: 'none', textAlign: 'center' as const }}>Lock this deal →</a>
                <div style={{ fontSize: 10, color: '#999', textAlign: 'center' as const }}>✓ AutoBidly verified · Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING GAP */}
      <section className="section-pad" style={{ background: '#f9f9f7' }}>
        <div className="gap-grid">
          <div>
            <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 99, marginBottom: 14 }}>The pricing gap</span>
            <h2 className="section-title" style={{ fontSize: 32, fontWeight: 700, color: '#111', lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 16 }}>
              Same car. Same sticker.<br /><span style={{ color: '#1D9E75' }}>Wildly different prices.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 10 }}>Five dealers. Same 2026 Silverado 1500 LT. Same GM incentives available to all of them.</p>
            <p style={{ fontSize: 15, color: '#111', fontWeight: 600 }}>AutoBidly helps you find your Dealer D.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
            {[
              { dealer: 'Dealer A · Northville, MI', price: '$619/mo + $15,000 down', good: false },
              { dealer: 'Dealer B · Novi, MI', price: '$578/mo + $3,000 down', good: false },
              { dealer: 'Dealer C · Canton, MI', price: '$541/mo + $1,000 down', good: false },
              { dealer: 'Dealer D · 20 min away', price: '$489/mo + $0 down', good: true },
            ].map((d, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px 18px', border: d.good ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                <div style={{ fontSize: 10, fontWeight: 500, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.07em', marginBottom: 4 }}>{d.dealer}</div>
                <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px', color: d.good ? '#1D9E75' : '#E24B4A' }}>{d.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEASE INTELLIGENCE */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap' as const, gap: 12 }}>
            <div>
              <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 99, marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>Lease Intelligence Score™</div>
              <h2 className="section-title" style={{ fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 4 }}>Best vehicles to lease right now</h2>
              <p style={{ fontSize: 14, color: '#666' }}>Updated daily · Based on manufacturer incentives, inventory & market timing</p>
            </div>
            <a href="/lease-intelligence" style={{ fontSize: 13, color: '#1D9E75', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>See full rankings →</a>
          </div>
          <div className="li-grid">
            {hotVehicles.map((v, i) => (
              <a key={i} href="/bidlock" style={{ textDecoration: 'none' }}>
                <div style={{ background: '#f9f9f7', borderRadius: 10, border: '1px solid #eee', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.background = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.background = '#f9f9f7'; }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: '#999', marginBottom: 2 }}>{v.category}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 1 }}>{v.make} {v.model}</div>
                    <div style={{ fontSize: 11, color: '#888' }}>{v.trim}</div>
                    <div style={{ marginTop: 8, height: 3, background: '#e5e5e5', borderRadius: 99, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${v.score}%`, background: scoreColor(v.score), borderRadius: 99 }} />
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' as const, flexShrink: 0 }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: scoreColor(v.score), lineHeight: 1 }}>{v.score}</div>
                    <div style={{ fontSize: 10, color: scoreColor(v.score), fontWeight: 600, marginTop: 1 }}>{scoreLabel(v.score)}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center' as const, marginTop: 24 }}>
            <a href="/lease-intelligence" style={{ fontSize: 14, color: '#1D9E75', fontWeight: 500, textDecoration: 'none' }}>Personalize with your incentives → Custom Lease Intelligence™</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ background: '#f9f9f7' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 99, marginBottom: 12 }}>How it works</span>
          <h2 className="section-title" style={{ fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 6 }}>From browser to keys in 4 steps.</h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 32 }}>No phone calls. No haggling. No &quot;let me check with my manager.&quot;</p>
          <div className="hiw-grid">
            {[
              { num: '01', title: 'Select your eligibility', body: 'Employee pricing, conquest, returning lessee, military, Costco. Every discount you qualify for.' },
              { num: '02', title: 'Browse or bid', body: 'See the lowest real lease prices near you, or build your exact vehicle and name the payment you want.' },
              { num: '03', title: 'Dealers accept', body: 'Your pre-qualified offer hits every dealer dashboard. The first to accept wins your business.' },
              { num: '04', title: 'Walk in & sign', body: 'Price is locked. Show up within 72 hours, sign the paperwork, drive away.' },
            ].map((s, i) => (
              <div key={i} className="hiw-cell">
                <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', marginBottom: 14, letterSpacing: '0.05em' }}>{s.num} —</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDER */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap' as const, gap: 12 }}>
            <div>
              <div style={{ display: 'inline-block', background: '#111', color: '#1D9E75', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 99, marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>The AutoBidly Insider</div>
              <h2 className="section-title" style={{ fontSize: 28, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 4 }}>The informed buyer&apos;s guide to leasing</h2>
              <p style={{ fontSize: 14, color: '#666' }}>Everything you should know before you sign</p>
            </div>
            <a href="/insider" style={{ fontSize: 13, color: '#1D9E75', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>See all guides →</a>
          </div>
          <div className="insider-grid">
            {[
              { slug: 'why-autobidly-exists', tag: 'Our Story', title: 'Why AutoBidly exists — the founding story' },
              { slug: 'employee-pricing-detroit', tag: 'Insider Intel', title: 'Employee pricing in Metro Detroit — the complete guide' },
              { slug: 'no-money-down', tag: 'Lease Math', title: 'Why you should almost never put money down on a lease' },
              { slug: 'costco-auto-program', tag: 'Insider Intel', title: 'Your Costco membership and car leasing — what it actually does' },
            ].map((article, i) => (
              <a key={i} href={`/insider/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#f9f9f7', borderRadius: 12, border: '1px solid #eee', padding: '20px', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#1D9E75'; e.currentTarget.style.background = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.background = '#f9f9f7'; }}
                >
                  <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '2px 8px', borderRadius: 99, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 10, display: 'inline-block' }}>{article.tag}</span>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111', lineHeight: 1.4, marginTop: 8 }}>{article.title}</div>
                  <div style={{ fontSize: 13, color: '#1D9E75', fontWeight: 500, marginTop: 12 }}>Read more →</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="section-pad" style={{ background: '#E1F5EE' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' as const }}>
          <div style={{ display: 'inline-block', background: '#1D9E75', color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 99, marginBottom: 12, letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>Launching in Metro Detroit</div>
          <h2 className="section-title" style={{ fontSize: 26, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 10 }}>Be first when we go live.</h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 24, lineHeight: 1.7 }}>Join the waitlist and you&apos;ll be the first to know when real dealer deals are live in your area.</p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 460, margin: '0 auto', flexWrap: 'wrap' as const, justifyContent: 'center' as const }}>
            <input id="waitlist-email" type="email" placeholder="your@email.com"
              style={{ flex: 1, minWidth: 200, padding: '12px 16px', borderRadius: 99, border: '1.5px solid #9FE1CB', fontSize: 14, outline: 'none', fontFamily: 'system-ui' }} />
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
          <p style={{ fontSize: 11, color: '#888', marginTop: 10 }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: '#04342C', textAlign: 'center' as const }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: '-1px', marginBottom: 12, lineHeight: 1.15 }}>Stop negotiating.<br /><span style={{ color: '#5DCAA5' }}>Start driving.</span></h2>
        <p style={{ fontSize: 16, color: '#9FE1CB', marginBottom: 28 }}>Free to browse deals and submit bids. No commitment until you say yes.</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' as const, flexWrap: 'wrap' as const }}>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Submit a BidLock™ — free</a>
          <a href="/deals" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #ffffff44', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Browse verified deals</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '24px 40px', background: '#0a0a0a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: 12 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: '#fff' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' as const }}>
          <a href="/privacy" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Terms</a>
          <a href="/insider" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>The Insider</a>
          <a href="/dealer-login" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Dealer login</a>
          <a href="mailto:info@autobidly.com" style={{ fontSize: 12, color: '#666', textDecoration: 'none' }}>Contact</a>
        </div>
        <div style={{ fontSize: 11, color: '#444' }}>© 2026 AutoBidly LLC · Michigan</div>
      </footer>

    </main>
  );
}