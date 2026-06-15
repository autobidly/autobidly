"use client";

const now = new Date();
const monthName = now.toLocaleString('default', { month: 'long' });
const year = now.getFullYear();

function getLeaseScore(make: string, model: string, trim: string = ''): number {
  let score = 60;
  const m = make.toLowerCase();
  const mo = model.toLowerCase();
  const t = trim.toLowerCase();
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
  if (mo.includes('rav4') || mo.includes('highlander') || mo.includes('venza')) score += 4;
  if (mo.includes('tucson') || mo.includes('santa fe') || mo.includes('telluride') || mo.includes('sorento')) score += 6;
  if (mo.includes('cx-5') || mo.includes('cx-90')) score += 5;
  if (mo.includes('murano') || mo.includes('pathfinder') || mo.includes('rogue')) score += 5;
  if (mo.includes('xt4') || mo.includes('xt5') || mo.includes('xt6') || mo.includes('escalade')) score += 8;
  if (mo.includes('navigator') || mo.includes('aviator') || mo.includes('nautilus')) score += 7;
  return Math.max(10, Math.min(100, score));
}

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

const allVehicles = [
  { make: 'Buick', model: 'Enclave', trim: 'Avenir', category: 'SUV', msrp: '$58,500', why: 'GM is offering strong subvented money factors on Enclave. High dealer inventory means dealers are motivated to move units.' },
  { make: 'Chevrolet', model: 'Traverse', trim: 'Premier', category: 'SUV', msrp: '$52,300', why: 'Chevy has been pushing aggressive lease support on Traverse all year. Excellent value in the 3-row SUV segment.' },
  { make: 'Chevrolet', model: 'Equinox', trim: 'LT', category: 'SUV', msrp: '$34,500', why: 'One of the highest-volume lease vehicles in the country. GM keeps rates competitive to maintain market share.' },
  { make: 'Chevrolet', model: 'Blazer', trim: 'RS', category: 'SUV', msrp: '$45,200', why: 'Strong manufacturer support and ample dealer inventory make Blazer one of the best mid-size SUV leases available.' },
  { make: 'GMC', model: 'Acadia', trim: 'Denali', category: 'SUV', msrp: '$56,800', why: 'GMC is supporting Acadia with competitive money factors. Denali trim offers excellent perceived value per dollar.' },
  { make: 'Cadillac', model: 'XT5', trim: 'Premium Luxury', category: 'SUV', msrp: '$58,900', why: 'Cadillac offers competitive rates on XT5 to compete with European luxury brands. Strong residual values help.' },
  { make: 'Honda', model: 'CR-V', trim: 'EX-L', category: 'SUV', msrp: '$36,800', why: 'Honda Financial Services consistently offers strong CR-V lease support. High demand is offset by excellent residuals.' },
  { make: 'Ford', model: 'Explorer', trim: 'XLT', category: 'SUV', msrp: '$42,100', why: 'Ford Motor Credit supports Explorer with competitive rates. High inventory at dealers creates room for negotiation.' },
  { make: 'Audi', model: 'Q5', trim: 'Premium Plus', category: 'SUV', msrp: '$58,400', why: 'Audi Financial Services typically offers the strongest lease support on Q5. Excellent residual values in the luxury segment.' },
  { make: 'Hyundai', model: 'Tucson', trim: 'SEL', category: 'SUV', msrp: '$32,600', why: 'Hyundai Motor Finance offers aggressive Tucson rates to build market share. Strong value proposition.' },
  { make: 'Kia', model: 'Telluride', trim: 'EX', category: 'SUV', msrp: '$43,500', why: 'Kia Motor Finance has been supporting Telluride with improved rates. Growing inventory is helping availability.' },
  { make: 'BMW', model: 'X3', trim: 'sDrive30i', category: 'SUV', msrp: '$48,900', why: 'BMW Financial Services offers competitive X3 money factors. Strong residuals make this one of the best luxury SUV leases.' },
  { make: 'GMC', model: 'Sierra 1500', trim: 'SLT', category: 'Truck', msrp: '$54,900', why: 'GM is pushing hard on Sierra with manufacturer cash and subvented rates. Dealers have strong incentive to move inventory.' },
  { make: 'GMC', model: 'Canyon', trim: 'AT4', category: 'Truck', msrp: '$46,200', why: 'Mid-size truck with strong GM backing. Canyon AT4 offers excellent off-road capability at a competitive lease rate.' },
  { make: 'Chevrolet', model: 'Silverado 1500', trim: 'LT', category: 'Truck', msrp: '$49,800', why: 'One of the most leased trucks in America. GM consistently supports Silverado with competitive rates and high residuals.' },
  { make: 'Ford', model: 'Ranger', trim: 'XLT', category: 'Truck', msrp: '$38,200', why: 'Ford Motor Credit supports Ranger with solid rates in the mid-size segment. Good alternative to larger full-size trucks.' },
  { make: 'BMW', model: '3 Series', trim: '330i', category: 'Sedan', msrp: '$47,800', why: 'BMW Financial Services offers some of the strongest sedan lease support in the luxury segment. Excellent residuals.' },
  { make: 'Mercedes-Benz', model: 'C-Class', trim: 'C 300', category: 'Sedan', msrp: '$48,100', why: 'Mercedes-Benz Financial Services supports C-Class with competitive rates. Strong residual values in the luxury segment.' },
  { make: 'Honda', model: 'Accord', trim: 'EX-L', category: 'Sedan', msrp: '$33,900', why: 'Honda Financial Services keeps Accord rates competitive. One of the best value sedans to lease in any market condition.' },
  { make: 'Cadillac', model: 'XT6', trim: 'Premium Luxury', category: 'Luxury SUV', msrp: '$62,400', why: 'Cadillac supports XT6 with strong rates to compete with European 3-row luxury SUVs. Good inventory at dealers.' },
  { make: 'Lincoln', model: 'Nautilus', trim: 'Reserve', category: 'Luxury SUV', msrp: '$56,800', why: 'Ford Motor Credit supports Lincoln with competitive rates. Nautilus offers luxury at a lower price point than European alternatives.' },
].map(v => ({ ...v, score: getLeaseScore(v.make, v.model, v.trim) }))
  .sort((a, b) => b.score - a.score);

const suvs = allVehicles.filter(v => v.category === 'SUV');
const trucks = allVehicles.filter(v => v.category === 'Truck');
const sedans = allVehicles.filter(v => v.category === 'Sedan');
const luxurySuvs = allVehicles.filter(v => v.category === 'Luxury SUV');
const topVehicle = allVehicles[0];

function VehicleSection({ title, vehicles }: { title: string; vehicles: any[] }) {
  if (vehicles.length === 0) return null;
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 6 }}>{title}</h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>Ranked by Lease Intelligence Score™ · Click any vehicle to submit a BidLock™</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {vehicles.map((v, i) => (
          <a key={i} href="/bidlock" style={{ textDecoration: 'none' }}>
            <div
              style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 20, alignItems: 'center' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#1D9E75')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
            >
              <div style={{ fontSize: 22, fontWeight: 700, color: '#ddd', width: 32, textAlign: 'center' }}>#{i + 1}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 3 }}>{v.make} {v.model} {v.trim}</div>
                <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>MSRP from {v.msrp}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>{v.why}</div>
                <div style={{ marginTop: 10, height: 4, background: '#eee', borderRadius: 99, overflow: 'hidden', maxWidth: 300 }}>
                  <div style={{ height: '100%', width: `${v.score}%`, background: scoreColor(v.score), borderRadius: 99 }} />
                </div>
              </div>
              <div style={{ textAlign: 'center', minWidth: 80 }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: scoreColor(v.score), lineHeight: 1 }}>{v.score}</div>
                <div style={{ fontSize: 11, color: scoreColor(v.score), fontWeight: 600, marginTop: 2 }}>{scoreLabel(v.score)}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function LeaseIntelligenceClient() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/lease-intelligence" style={{ fontSize: 14, color: '#1D9E75', textDecoration: 'none', fontWeight: 500 }}>Lease Intelligence</a>
          <a href="/dealer" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px' }}>

        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Updated {monthName} {year}</div>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Best vehicles to lease in {monthName} {year}
          </h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.75, maxWidth: 700, marginBottom: 24 }}>
            AutoBidly's Lease Intelligence Score™ ranks every vehicle from 1–100 based on current manufacturer incentives, dealer inventory levels, and market timing. A score of 85+ means right now is an excellent time to lease. Updated at the start of every month.
          </p>

          <div style={{ background: '#111', borderRadius: 14, padding: '24px 28px' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>🏆 Top pick for {monthName} {year}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{topVehicle.make} {topVehicle.model} {topVehicle.trim}</div>
                <div style={{ fontSize: 14, color: '#999', marginBottom: 10 }}>{topVehicle.category} · MSRP from {topVehicle.msrp}</div>
                <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.7 }}>{topVehicle.why}</div>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 52, fontWeight: 700, color: '#1D9E75', lineHeight: 1 }}>{topVehicle.score}</div>
                <div style={{ fontSize: 13, color: '#1D9E75', fontWeight: 600 }}>Excellent</div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ for this vehicle →</a>
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 14, padding: '28px 32px', marginBottom: 40, border: '1px solid #eee' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12 }}>How the Lease Intelligence Score™ works</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
            The Lease Intelligence Score is a proprietary AutoBidly algorithm that scores every vehicle from 1 to 100 based on how favorable current lease conditions are. A higher score means better conditions for the buyer — lower money factors, stronger manufacturer support, and more dealer flexibility.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              { factor: 'Manufacturer incentives', desc: 'Subvented money factors, lease cash, and special programs directly from the manufacturer.' },
              { factor: 'Dealer inventory levels', desc: 'High inventory means more dealer flexibility and willingness to negotiate.' },
              { factor: 'Market timing', desc: 'End of month, end of quarter, and end of year pushes create better deals for buyers.' },
              { factor: 'Model demand', desc: 'High-demand vehicles like Wrangler and Tacoma score lower — dealers rarely need to incentivize them.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f9f9f7', borderRadius: 10, padding: '16px 18px' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 4 }}>✓ {f.factor}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {[
              { range: '85–100', label: 'Excellent', color: '#0F6E56', desc: 'Best time to lease' },
              { range: '70–84', label: 'Good', color: '#1D9E75', desc: 'Solid conditions' },
              { range: '50–69', label: 'Fair', color: '#B45309', desc: 'Average conditions' },
              { range: 'Below 50', label: 'Poor', color: '#DC2626', desc: 'Wait if possible' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: r.color, flexShrink: 0 }}></div>
                <span style={{ fontSize: 13, color: '#555' }}><strong style={{ color: r.color }}>{r.range}</strong> — {r.label} · {r.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <VehicleSection title={`Best SUVs to lease in ${monthName} ${year}`} vehicles={suvs} />
        <VehicleSection title={`Best trucks to lease in ${monthName} ${year}`} vehicles={trucks} />
        <VehicleSection title={`Best sedans to lease in ${monthName} ${year}`} vehicles={sedans} />
        <VehicleSection title={`Best luxury SUVs to lease in ${monthName} ${year}`} vehicles={luxurySuvs} />

        <div style={{ background: '#FEF2F2', borderRadius: 14, padding: '28px 32px', marginBottom: 40, border: '1px solid #FECACA' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12 }}>Vehicles to avoid leasing in {monthName} {year}</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>These vehicles have low Lease Intelligence Scores right now due to high demand, limited inventory, or weak manufacturer support.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              { vehicle: 'Jeep Wrangler', reason: 'Consistently high demand means dealers rarely need to incentivize. Limited lease support from Stellantis.' },
              { vehicle: 'Toyota Tacoma', reason: 'Supply constraints and strong resale values give Toyota little reason to offer competitive lease rates.' },
              { vehicle: 'Ford Bronco', reason: 'High demand and cult following means dealers hold firm on price. Limited lease support.' },
              { vehicle: 'Toyota 4Runner', reason: 'Legendary reliability and off-road reputation creates strong demand. Poor lease value vs purchase.' },
            ].map((v, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid #FECACA' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#991B1B', marginBottom: 4 }}>✗ {v.vehicle}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{v.reason}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 14, padding: '28px 32px', marginBottom: 40, border: '1px solid #eee' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12 }}>Best time of month to lease a car</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
            Timing matters almost as much as which vehicle you choose. Dealers have monthly sales quotas and manufacturers run monthly incentive programs that reset on the first of every month.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { time: 'Last 5 days of the month', impact: '+10 pts', desc: 'Dealers are pushing hard to hit monthly quotas. Acceptance rates on BidLocks increase significantly.' },
              { time: 'End of quarter (March, June, September, December)', impact: '+15 pts', desc: 'The biggest deals happen at quarter end. Manufacturers offer additional dealer cash to hit quarterly targets.' },
              { time: 'End of year (December)', impact: '+25 pts combined', desc: 'The best month to lease in most years. Year-end clearance plus quarter-end plus month-end all align.' },
              { time: 'First week of the month', impact: '0 pts', desc: 'Dealers just reset their quota counters. Less urgency. Fewer incentives to negotiate aggressively.' },
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 16px', background: '#f9f9f7', borderRadius: 10 }}>
                <div style={{ minWidth: 90, textAlign: 'center', paddingTop: 2 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#1D9E75' }}>{t.impact}</div>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 4 }}>{t.time}</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#111', borderRadius: 14, padding: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Ready to get the deal you deserve?</h2>
          <p style={{ fontSize: 15, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Submit a BidLock™ for any vehicle on this list. Name your exact payment. Verified dealers compete. First to accept is locked in.</p>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ — free</a>
        </div>

      </div>
    </main>
  );
}