"use client";
import { useState } from "react";

const now = new Date();
const monthName = now.toLocaleString('default', { month: 'long' });
const year = now.getFullYear();
const day = now.getDate();
const month = now.getMonth() + 1;

interface Incentives {
  gmEmployee: boolean;
  fordEmployee: boolean;
  stellantisEmployee: boolean;
  toyotaEmployee: boolean;
  hondaEmployee: boolean;
  hyundaiEmployee: boolean;
  kiaEmployee: boolean;
  bmwEmployee: boolean;
  mercedesEmployee: boolean;
  fordXPlan: boolean;
  gmFriends: boolean;
  stellantisChoice: boolean;
  stellantisFriends: boolean;
  hyundaiOPlan: boolean;
  kiaFriends: boolean;
  currentLeaseBrand: string;
  costco: boolean;
  military: boolean;
}

const defaultIncentives: Incentives = {
  gmEmployee: false, fordEmployee: false, stellantisEmployee: false,
  toyotaEmployee: false, hondaEmployee: false, hyundaiEmployee: false,
  kiaEmployee: false, bmwEmployee: false, mercedesEmployee: false,
  fordXPlan: false, gmFriends: false, stellantisChoice: false,
  stellantisFriends: false, hyundaiOPlan: false, kiaFriends: false,
  currentLeaseBrand: 'none', costco: false, military: false,
};

function getLeaseScore(make: string, model: string, trim: string = '', incentives?: Incentives): number {
  let score = 60;
  const m = make.toLowerCase();
  const mo = model.toLowerCase();
  const t = trim.toLowerCase();

  if (day >= 26) score += 10;
  if ([3, 6, 9, 12].includes(month)) score += 15;
  if (month === 12) score += 10;
  if (day >= 26 && [3, 6, 9, 12].includes(month)) score += 5;

  const isGM = m.includes('chevrolet') || m.includes('gmc') || m.includes('buick') || m.includes('cadillac');
  const isFord = m.includes('ford') || m.includes('lincoln');
  const isStellantis = m.includes('jeep') || m.includes('ram') || m.includes('chrysler') || m.includes('dodge');
  const isToyota = m.includes('toyota') || m.includes('lexus');
  const isHonda = m.includes('honda') || m.includes('acura');
  const isHyundai = m.includes('hyundai') || m.includes('genesis');
  const isKia = m.includes('kia');
  const isBMW = m.includes('bmw');
  const isMercedes = m.includes('mercedes');
  const isAudi = m.includes('audi');

  if (isGM) score += 10;
  if (isBMW || isMercedes || isAudi) score += 8;
  if (isHonda || isHyundai || isKia) score += 6;
  if (isFord) score += 5;
  if (isToyota) score += 3;

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
  if (mo.includes('x3') || mo.includes('x5')) score += 6;
  if (mo.includes('glc') || mo.includes('gle')) score += 6;

  if (incentives) {
    if (incentives.gmEmployee && isGM) score += 8;
    if (incentives.fordEmployee && isFord) score += 8;
    if (incentives.stellantisEmployee && isStellantis) score += 8;
    if (incentives.toyotaEmployee && isToyota) score += 4;
    if (incentives.hondaEmployee && isHonda) score += 4;
    if (incentives.hyundaiEmployee && isHyundai) score += 5;
    if (incentives.kiaEmployee && isKia) score += 4;
    if (incentives.bmwEmployee && isBMW) score += 4;
    if (incentives.mercedesEmployee && isMercedes) score += 4;

    if (incentives.fordXPlan && isFord) score += 5;
    if (incentives.gmFriends && isGM) score += 4;
    if (incentives.stellantisChoice && isStellantis) score += 7;
    if (incentives.stellantisFriends && isStellantis) score += 3;
    if (incentives.hyundaiOPlan && isHyundai) score += 3;
    if (incentives.kiaFriends && isKia) score += 3;

    const cl = incentives.currentLeaseBrand;
    const isReturning =
      (cl === 'gm' && isGM) || (cl === 'ford' && isFord) ||
      (cl === 'stellantis' && isStellantis) || (cl === 'toyota' && isToyota) ||
      (cl === 'honda' && isHonda) || (cl === 'hyundai' && isHyundai) ||
      (cl === 'kia' && isKia) || (cl === 'bmw' && isBMW) ||
      (cl === 'mercedes' && isMercedes);

    if (isReturning) {
      score += 5;
    } else if (cl !== 'none' && cl !== 'other') {
      const hasGMAccess = incentives.gmEmployee || incentives.gmFriends;
      const hasFordAccess = incentives.fordEmployee || incentives.fordXPlan;
      const hasStellantisAccess = incentives.stellantisEmployee || incentives.stellantisChoice || incentives.stellantisFriends;
      const hasHyundaiAccess = incentives.hyundaiEmployee || incentives.hyundaiOPlan;
      const hasKiaAccess = incentives.kiaEmployee || incentives.kiaFriends;
      if (
        (isGM && hasGMAccess) || (isFord && hasFordAccess) ||
        (isStellantis && hasStellantisAccess) || (isHyundai && hasHyundaiAccess) ||
        (isKia && hasKiaAccess) || (isToyota && incentives.toyotaEmployee) ||
        (isHonda && incentives.hondaEmployee) || (isBMW && incentives.bmwEmployee) ||
        (isMercedes && incentives.mercedesEmployee)
      ) {
        score += 4;
      }
    }

    if (incentives.costco) {
      if (isGM) score += 6;
      else if (isBMW || isAudi) score += 4;
      else if (isStellantis) score += 2;
      else score += 1;
    }

    if (incentives.military) {
      if (isGM && incentives.gmEmployee) {
        // Cannot stack GM military with GM employee pricing
      } else {
        score += 3;
      }
    }
  }

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

function getTimingMessage() {
  const isEOM = day >= 26;
  const isEOQ = [3, 6, 9, 12].includes(month);
  const isEOY = month === 12;
  if (isEOY && isEOM) return `December end-of-month, end-of-quarter, and end-of-year incentives are all active simultaneously — historically the strongest lease conditions of the year.`;
  if (isEOQ && isEOM) return `${monthName} is end of quarter and we're in the final days of the month. Dealer urgency is elevated — acceptance rates on BidLocks are higher right now.`;
  if (isEOQ) return `${monthName} is end of quarter. Manufacturers are adding dealer incentives to help hit quarterly targets. Scores are elevated across most brands.`;
  if (isEOM) return `We're in the final days of ${monthName}. Dealers are pushing to hit monthly targets — a strong time to submit a BidLock™.`;
  return `Scores update automatically based on market timing, inventory trends, and manufacturer incentive patterns.`;
}

const vehicleData = [
  { make: 'Buick', model: 'Enclave', trim: 'Avenir', category: 'SUV', msrp: '$58,500', seats: 7, estPayment: 499, why: 'GM is offering strong subvented money factors on Enclave. High dealer inventory means dealers are motivated to move units.' },
  { make: 'Chevrolet', model: 'Traverse', trim: 'Premier', category: 'SUV', msrp: '$52,300', seats: 7, estPayment: 479, why: 'Chevy has been pushing aggressive lease support on Traverse all year. Excellent value in the 3-row SUV segment.' },
  { make: 'Chevrolet', model: 'Equinox', trim: 'LT', category: 'SUV', msrp: '$34,500', seats: 5, estPayment: 359, why: 'One of the highest-volume lease vehicles in the country. GM keeps rates competitive to maintain market share.' },
  { make: 'Chevrolet', model: 'Blazer', trim: 'RS', category: 'SUV', msrp: '$45,200', seats: 5, estPayment: 419, why: 'Strong manufacturer support and ample dealer inventory make Blazer one of the best mid-size SUV leases available.' },
  { make: 'Chevrolet', model: 'Trax', trim: 'LT', category: 'SUV', msrp: '$24,400', seats: 5, estPayment: 249, why: "Chevy's most affordable lease. Trax offers excellent value for budget-conscious buyers who want a new vehicle." },
  { make: 'GMC', model: 'Acadia', trim: 'Denali', category: 'SUV', msrp: '$56,800', seats: 7, estPayment: 549, why: 'GMC is supporting Acadia with competitive money factors. Denali trim offers excellent perceived value per dollar.' },
  { make: 'Cadillac', model: 'XT5', trim: 'Premium Luxury', category: 'SUV', msrp: '$58,900', seats: 5, estPayment: 579, why: 'Cadillac offers competitive rates on XT5 to compete with European luxury brands. Strong residual values help.' },
  { make: 'Honda', model: 'CR-V', trim: 'EX-L', category: 'SUV', msrp: '$36,800', seats: 5, estPayment: 389, why: 'Honda Financial Services consistently offers strong CR-V lease support. High demand is offset by excellent residuals.' },
  { make: 'Ford', model: 'Explorer', trim: 'XLT', category: 'SUV', msrp: '$42,100', seats: 7, estPayment: 449, why: 'Ford Motor Credit supports Explorer with competitive rates. High inventory at dealers creates room for negotiation.' },
  { make: 'Audi', model: 'Q5', trim: 'Premium Plus', category: 'SUV', msrp: '$58,400', seats: 5, estPayment: 569, why: 'Audi Financial Services typically offers the strongest lease support on Q5. Excellent residual values in the luxury segment.' },
  { make: 'Hyundai', model: 'Tucson', trim: 'SEL', category: 'SUV', msrp: '$32,600', seats: 5, estPayment: 339, why: 'Hyundai Motor Finance offers aggressive Tucson rates to build market share. Strong value proposition.' },
  { make: 'Kia', model: 'Telluride', trim: 'EX', category: 'SUV', msrp: '$43,500', seats: 8, estPayment: 459, why: 'Kia Motor Finance has been supporting Telluride with improved rates. Growing inventory is helping availability.' },
  { make: 'BMW', model: 'X3', trim: 'sDrive30i', category: 'SUV', msrp: '$48,900', seats: 5, estPayment: 529, why: 'BMW Financial Services offers competitive X3 money factors. Strong residuals make this one of the best luxury SUV leases.' },
  { make: 'GMC', model: 'Sierra 1500', trim: 'SLT', category: 'Truck', msrp: '$54,900', seats: 5, estPayment: 489, why: 'GM is pushing hard on Sierra with manufacturer cash and subvented rates. Dealers have strong incentive to move inventory.' },
  { make: 'GMC', model: 'Canyon', trim: 'AT4', category: 'Truck', msrp: '$46,200', seats: 5, estPayment: 429, why: 'Mid-size truck with strong GM backing. Canyon AT4 offers excellent off-road capability at a competitive lease rate.' },
  { make: 'Chevrolet', model: 'Silverado 1500', trim: 'LT', category: 'Truck', msrp: '$49,800', seats: 5, estPayment: 469, why: 'One of the most leased trucks in America. GM consistently supports Silverado with competitive rates and high residuals.' },
  { make: 'Ford', model: 'F-150', trim: 'XLT', category: 'Truck', msrp: '$46,500', seats: 5, estPayment: 469, why: "America's best-selling truck. Ford Motor Credit offers competitive rates and Ford employee pricing makes it even more compelling." },
  { make: 'Ford', model: 'Ranger', trim: 'XLT', category: 'Truck', msrp: '$38,200', seats: 5, estPayment: 379, why: 'Ford Motor Credit supports Ranger with solid rates in the mid-size segment. Good alternative to larger full-size trucks.' },
  { make: 'BMW', model: '3 Series', trim: '330i', category: 'Sedan', msrp: '$47,800', seats: 5, estPayment: 499, why: 'BMW Financial Services offers some of the strongest sedan lease support in the luxury segment. Excellent residuals.' },
  { make: 'Mercedes-Benz', model: 'C-Class', trim: 'C 300', category: 'Sedan', msrp: '$48,100', seats: 5, estPayment: 509, why: 'Mercedes-Benz Financial Services supports C-Class with competitive rates. Strong residual values in the luxury segment.' },
  { make: 'Honda', model: 'Accord', trim: 'EX-L', category: 'Sedan', msrp: '$33,900', seats: 5, estPayment: 349, why: 'Honda Financial Services keeps Accord rates competitive. One of the best value sedans to lease in any market condition.' },
  { make: 'Cadillac', model: 'XT6', trim: 'Premium Luxury', category: 'Luxury SUV', msrp: '$62,400', seats: 7, estPayment: 619, why: 'Cadillac supports XT6 with strong rates to compete with European 3-row luxury SUVs. Good inventory at dealers.' },
  { make: 'Lincoln', model: 'Nautilus', trim: 'Reserve', category: 'Luxury SUV', msrp: '$56,800', seats: 5, estPayment: 579, why: 'Ford Motor Credit supports Lincoln with competitive rates. Nautilus offers luxury at a lower price point than European alternatives.' },
  { make: 'BMW', model: 'X5', trim: 'xDrive40i', category: 'Luxury SUV', msrp: '$68,900', seats: 7, estPayment: 729, why: 'BMW Financial Services supports X5 with competitive rates and the Corporate Sales Program makes it even stronger.' },
  { make: 'Mercedes-Benz', model: 'GLC', trim: '300', category: 'Luxury SUV', msrp: '$54,700', seats: 5, estPayment: 649, why: 'Mercedes-Benz Preferred Employer program and strong residuals make GLC one of the best luxury SUV leases available.' },
];

export default function LeaseIntelligenceClient() {
  const [incentives, setIncentives] = useState<Incentives>(defaultIncentives);
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [showIncentivePanel, setShowIncentivePanel] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>('employee');

  const allVehicles = vehicleData
    .map(v => ({ ...v, score: getLeaseScore(v.make, v.model, v.trim, isPersonalized ? incentives : undefined) }))
    .sort((a, b) => b.score - a.score);

  const topScore = allVehicles[0].score;
  const topVehicles = allVehicles.filter(v => v.score === topScore);
  const suvs = allVehicles.filter(v => v.category === 'SUV');
  const trucks = allVehicles.filter(v => v.category === 'Truck');
  const sedans = allVehicles.filter(v => v.category === 'Sedan');
  const luxurySuvs = allVehicles.filter(v => v.category === 'Luxury SUV');
  const bestTruck = trucks[0];
  const bestSuv = suvs[0];
  const bestSedan = sedans[0];
  const bestLuxury = luxurySuvs[0];

  const brandCounts: Record<string, number> = {};
  allVehicles.slice(0, 5).forEach(v => { brandCounts[v.make] = (brandCounts[v.make] || 0) + 1; });
  const topBrand = Object.entries(brandCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '';

  const activeCount = Object.entries(incentives)
    .filter(([k, v]) => k !== 'currentLeaseBrand' && v === true).length
    + (incentives.currentLeaseBrand !== 'none' ? 1 : 0);

  const hasAnyIncentive = activeCount > 0;
  const toggle = (key: keyof Incentives) => setIncentives(prev => ({ ...prev, [key]: !prev[key] }));

  function checkStyle(checked: boolean) {
    return {
      display: 'flex' as const,
      gap: 14,
      alignItems: 'flex-start' as const,
      cursor: 'pointer',
      padding: '16px 18px',
      background: checked ? '#0F6E5620' : '#1e1e1e',
      borderRadius: 10,
      border: `1.5px solid ${checked ? '#1D9E75' : '#333'}`,
      marginBottom: 10,
    };
  }

  function CheckItem({ label, detail, checked, onChange, warning }: {
    label: string; detail: string; checked: boolean; onChange: () => void; warning?: string;
  }) {
    return (
      <label style={checkStyle(checked)}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          style={{ accentColor: '#1D9E75', width: 18, height: 18, marginTop: 2, flexShrink: 0 }}
        />
        <div>
          <div style={{ fontSize: 15, color: checked ? '#1D9E75' : '#ffffff', fontWeight: 600, lineHeight: 1.4, marginBottom: 6 }}>
            {label}
          </div>
          <div style={{ fontSize: 14, color: '#aaaaaa', lineHeight: 1.7 }}>
            {detail}
          </div>
          {warning && (
            <div style={{ fontSize: 13, color: '#f59e0b', marginTop: 8, lineHeight: 1.6, fontWeight: 500 }}>
              ⚠️ {warning}
            </div>
          )}
        </div>
      </label>
    );
  }

  function Section({ id, title, subtitle, children }: {
    id: string; title: string; subtitle: string; children: React.ReactNode;
  }) {
    const open = openSection === id;
    return (
      <div style={{ marginBottom: 12 }}>
        <button
          onClick={() => setOpenSection(open ? null : id)}
          style={{ width: '100%', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
        >
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '16px 20px',
            background: open ? '#1a1a1a' : '#1e1e1e',
            borderRadius: open ? '10px 10px 0 0' : 10,
            border: '1.5px solid #333',
            borderBottom: open ? 'none' : '1.5px solid #333',
          }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#ffffff' }}>{title}</div>
              <div style={{ fontSize: 13, color: '#888', marginTop: 3 }}>{subtitle}</div>
            </div>
            <div style={{ fontSize: 20, color: '#555', fontWeight: 300 }}>{open ? '−' : '+'}</div>
          </div>
        </button>
        {open && (
          <div style={{
            background: '#141414',
            borderRadius: '0 0 10px 10px',
            border: '1.5px solid #333',
            borderTop: 'none',
            padding: '20px 18px',
          }}>
            {children}
          </div>
        )}
      </div>
    );
  }

  function VehicleSection({ title, vehicles }: { title: string; vehicles: any[] }) {
    if (vehicles.length === 0) return null;
    return (
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 6 }}>{title}</h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 20 }}>
          {isPersonalized ? 'Ranked by your Custom Lease Intelligence Score™' : 'Ranked by Lease Intelligence Score™'} · Click any vehicle to submit a BidLock™
        </p>
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
                  <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>MSRP from {v.msrp} · Est. ${v.estPayment}/mo · {v.seats} seats</div>
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

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/lease-intelligence" style={{ fontSize: 14, color: '#1D9E75', textDecoration: 'none', fontWeight: 500 }}>Lease Intelligence</a>
          <a href="/insider" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>The Insider</a>
          <a href="/dealer-login" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px' }}>

        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Updated {monthName} {year}</div>
            {isPersonalized && (
              <div style={{ display: 'inline-block', background: '#111', color: '#1D9E75', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                ✓ Personalized · {activeCount} incentive{activeCount !== 1 ? 's' : ''} applied
              </div>
            )}
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            {isPersonalized ? 'Your Custom Lease Intelligence™' : 'Best vehicles to lease right now'}
          </h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.75, maxWidth: 700, marginBottom: 8 }}>
            {isPersonalized
              ? `Scores personalized based on ${activeCount} incentive${activeCount !== 1 ? 's' : ''} you qualify for — stacked across all applicable brands simultaneously.`
              : "AutoBidly's Lease Intelligence Score™ ranks every vehicle from 1–100 based on manufacturer incentives, inventory levels, and market timing. Tell us what you qualify for and we'll personalize every score — you may qualify for more than you think."}
          </p>
          {!isPersonalized && (
            <p style={{ fontSize: 13, color: '#999', marginBottom: 20 }}>
              Scores are based on AutoBidly's proprietary scoring methodology and update automatically. They reflect our analysis of manufacturer incentive patterns, inventory trends, and seasonal demand — not live data feeds from lenders.
            </p>
          )}

          {/* CUSTOM LEASE INTELLIGENCE PANEL */}
          <div style={{ background: '#111', borderRadius: 14, padding: '24px 28px', marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showIncentivePanel ? 24 : 0 }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#1D9E75', marginBottom: 4 }}>🎯 Custom Lease Intelligence™</div>
                <div style={{ fontSize: 14, color: '#aaa' }}>
                  {isPersonalized
                    ? `${activeCount} incentive${activeCount !== 1 ? 's' : ''} applied — scores updated across all brands`
                    : 'Tell us everything you qualify for — stack incentives across multiple brands at once'}
                </div>
              </div>
              <button
                onClick={() => setShowIncentivePanel(!showIncentivePanel)}
                style={{ background: showIncentivePanel ? '#333' : '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: '11px 22px', fontSize: 14, fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}
              >
                {showIncentivePanel ? 'Close' : isPersonalized ? 'Edit my incentives' : 'Personalize my scores →'}
              </button>
            </div>

            {showIncentivePanel && (
              <div>
                {/* IMPORTANT NOTE */}
                <div style={{ background: '#1D9E7518', border: '1px solid #1D9E7540', borderRadius: 10, padding: '16px 20px', marginBottom: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1D9E75', marginBottom: 6 }}>
                    Check everything that applies — you can qualify across multiple brands at the same time
                  </div>
                  <div style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7 }}>
                    You might have GM Family First pricing through your family AND a friend at Ford who can give you X-Plan. Both count. Both move your scores independently. A GM household with a Ford-employee neighbor is extremely common in Metro Detroit — and both incentives apply simultaneously on their respective brands.
                  </div>
                </div>

                {/* EMPLOYEE PRICING */}
                <Section id="employee" title="Employee pricing" subtitle="You or a family member works or worked at one of these manufacturers — check all that apply">
                  <CheckItem
                    checked={incentives.gmEmployee}
                    onChange={() => toggle('gmEmployee')}
                    label="GM Family First — Chevrolet, Buick, GMC, Cadillac"
                    detail="You or a family member (including aunts, uncles, nieces, nephews, grandparents, in-laws) works or worked at GM or GM Financial. Access via gmfamilyfirst.com. Requires an authorization number. One of the broadest and most generous employee programs available — stackable with most national incentives."
                  />
                  <CheckItem
                    checked={incentives.fordEmployee}
                    onChange={() => toggle('fordEmployee')}
                    label="Ford A-Plan or Z-Plan — Ford & Lincoln"
                    detail="You or an immediate family member is an active Ford corporate employee (A-Plan) or retired Ford employee (Z-Plan). Same deep discount pricing on both plans. Up to 4 PINs per year. Generate your PIN at axz.ford.com before you go to the dealer — you cannot use this without a PIN. Does not apply to F-150 Raptor or Mustang Dark Horse."
                  />
                  <CheckItem
                    checked={incentives.stellantisEmployee}
                    onChange={() => toggle('stellantisEmployee')}
                    label="Stellantis Employee Purchase (EP) — Jeep, Ram, Chrysler, Dodge"
                    detail="You or an immediate family member works or worked at Stellantis. Price is fixed at 5% below dealer invoice plus a $200 program fee. Requires a Control Number generated through the Stellantis employee portal. Up to 6 Control Numbers per year."
                    warning="Important: Stellantis often requires you to CHOOSE between employee pricing OR public cash rebates — they frequently do not stack. Always compare both options before deciding which to use."
                  />
                  <CheckItem
                    checked={incentives.toyotaEmployee}
                    onChange={() => toggle('toyotaEmployee')}
                    label="Toyota VSPP — Toyota & Lexus"
                    detail="You or an immediate family member works at Toyota corporate or a Toyota manufacturing plant (Vehicle Special Purchase Program). Price is set at dealer invoice minus factory holdbacks. The employee must be physically present at the dealership during the sale. High-demand models including TRD Pro trims are excluded. Individual dealers may choose not to participate."
                  />
                  <CheckItem
                    checked={incentives.hondaEmployee}
                    onChange={() => toggle('hondaEmployee')}
                    label="Honda THPP — Honda & Acura"
                    detail="You or an immediate family member works at Honda corporate (Team Honda Purchase Program). Price is fixed at dealer invoice minus 3.5% of MSRP — typically 7-12% off the window sticker. Covers Honda and Acura vehicles. Honda does not have a Friends & Neighbors tier — family relationship must be verified. Note: dealers may offset by offering less on your trade-in."
                  />
                  <CheckItem
                    checked={incentives.hyundaiEmployee}
                    onChange={() => toggle('hyundaiEmployee')}
                    label="Hyundai Circle E-Plan — Hyundai & Genesis"
                    detail="You work directly at Hyundai Motor America corporate or a Hyundai manufacturing facility (E-Plan). This is the deepest Hyundai discount available. Requires a Hyundai Circle Certificate — your name on the certificate must match your ID exactly. E-Plan vehicles cannot be resold for 6 months after purchase. Note: Hyundai and Kia are completely separate programs."
                  />
                  <CheckItem
                    checked={incentives.kiaEmployee}
                    onChange={() => toggle('kiaEmployee')}
                    label="Kia Vehicle Purchase Program — Kia"
                    detail="You work directly at Kia corporate or a Kia manufacturing facility. Fixed pricing tied to dealer invoice. Note that Hyundai and Kia run completely separate programs — a Hyundai employee cannot use their benefit on a Kia. Dealers on high-demand models may decline to participate."
                    warning="Kia's program typically requires you to choose employee pricing OR public incentives — stacking is usually not permitted."
                  />
                  <CheckItem
                    checked={incentives.bmwEmployee}
                    onChange={() => toggle('bmwEmployee')}
                    label="BMW Corporate Sales Program — BMW"
                    detail="You work at BMW Group or an approved BMW partner company. Provides a flat dollar reduction of $500-$3,000 depending on model, trim, and financing method. Stackable with most public incentives and regional lease deals — one of the better stacking programs among luxury brands. Performance models like the M4 CS or XM may be excluded."
                  />
                  <CheckItem
                    checked={incentives.mercedesEmployee}
                    onChange={() => toggle('mercedesEmployee')}
                    label="Mercedes-Benz Star or Preferred Employer Program"
                    detail="You work at Mercedes-Benz corporate (Star Program — up to $5,000 in factory incentives) or at an approved partner company such as Apple, Google, Microsoft, or Delta Air Lines (Preferred Employer Program). The Preferred Employer discount applies to the employee only and cannot be transferred to family members. Obtain your Company Account Number (CAN) from your HR department to generate a control form."
                  />
                </Section>

                {/* FRIENDS & NEIGHBORS */}
                <Section id="friends" title="Friends & Neighbors access" subtitle="You don't have to work at these companies — you just have to know someone who does">
                  <div style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7, marginBottom: 16 }}>
                    Ford employees can sponsor up to 4 people per year. GM and Stellantis have similar programs. If you know anyone at these companies — a neighbor, a family friend, a coworker's spouse — ask whether they have unused sponsorships. Many employees have PINs sitting unused every single year. This is one of the most overlooked opportunities in Metro Detroit.
                  </div>
                  <CheckItem
                    checked={incentives.fordXPlan}
                    onChange={() => toggle('fordXPlan')}
                    label="Ford X-Plan — Ford & Lincoln"
                    detail="A Ford employee or retiree is willing to sponsor you. They generate a PIN for you at myplan.ford.com — you must have this PIN before you go to the dealer. Up to 4 sponsorships per Ford employee per year. Applies to friends, neighbors, extended family, or anyone they choose. Does not apply to F-150 Raptor or Mustang Dark Horse."
                  />
                  <CheckItem
                    checked={incentives.gmFriends}
                    onChange={() => toggle('gmFriends')}
                    label="GM Supplier for Friends — Chevrolet, Buick, GMC, Cadillac"
                    detail="A GM active or retired employee is sharing supplier-level pricing with you through the GM Supplier for Friends program. This is slightly less deep than the full GM Family First employee discount but still provides meaningful savings. Stackable with most national incentives."
                  />
                  <CheckItem
                    checked={incentives.stellantisChoice}
                    onChange={() => toggle('stellantisChoice')}
                    label="Stellantis Employee Choice voucher — Jeep, Ram, Chrysler, Dodge"
                    detail="A Stellantis active employee is giving you their one annual Employee Choice voucher. This voucher can go to literally anyone they choose — friend, neighbor, or acquaintance — regardless of relationship. It provides the same full EP pricing (5% below invoice + $200 fee). Extremely limited — only one per active employee per year. If someone is offering you this, use it."
                    warning="Stellantis Employee Choice may not stack with public cash rebates. Always compare employee pricing vs current public incentives to see which gives you the better total payment."
                  />
                  <CheckItem
                    checked={incentives.stellantisFriends}
                    onChange={() => toggle('stellantisFriends')}
                    label="Stellantis Friends Program — Jeep, Ram, Chrysler, Dodge"
                    detail="A Stellantis employee is sponsoring you through the standard Friends Program. This is approximately 1% below invoice plus a $75 administrative fee — meaningfully weaker than the Employee Choice voucher but still better than retail pricing on most models."
                    warning="Stellantis Friends pricing may conflict with current public cash rebates. Verify which option gives you the better total deal before committing."
                  />
                  <CheckItem
                    checked={incentives.hyundaiOPlan}
                    onChange={() => toggle('hyundaiOPlan')}
                    label="Hyundai Circle O-Plan — Hyundai & Genesis"
                    detail="A direct Hyundai corporate employee is sponsoring you through the O-Plan (Friends & Family). Price is set at invoice minus 3% of MSRP minus select Circle cash credits. Requires a Hyundai Circle Certificate — the name on the certificate must match your ID exactly at the dealership."
                  />
                  <CheckItem
                    checked={incentives.kiaFriends}
                    onChange={() => toggle('kiaFriends')}
                    label="Kia Friends & Family — Kia"
                    detail="A direct Kia corporate employee is sponsoring you with a Friends & Family discount voucher. One sponsored person per employee per year. Note: Hyundai and Kia are completely separate programs — a Hyundai employee cannot sponsor you for Kia pricing or vice versa."
                    warning="Kia Friends pricing typically cannot be stacked with public retail incentives or special financing offers."
                  />
                </Section>

                {/* CURRENT LEASE */}
                <Section id="loyalty" title="Current lease" subtitle="Returning to the same brand earns loyalty bonuses. Switching can earn conquest cash on brands where you have pricing access.">
                  <div style={{ fontSize: 14, color: '#bbb', lineHeight: 1.7, marginBottom: 14 }}>
                    If you are currently leasing a vehicle, tell us which brand. Returning to the same brand family typically earns a loyalty bonus from the manufacturer. Switching brands can earn conquest cash — but on AutoBidly we only apply conquest bonuses when you have actual employee or Friends pricing access on the new brand, since that is when conquest truly compounds your savings.
                  </div>
                  <select
                    value={incentives.currentLeaseBrand}
                    onChange={e => setIncentives({ ...incentives, currentLeaseBrand: e.target.value })}
                    style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1.5px solid #333', fontSize: 15, fontFamily: 'system-ui', outline: 'none', background: '#1e1e1e', color: '#ffffff' }}
                  >
                    <option value="none">I am not currently leasing a vehicle</option>
                    <option value="gm">Currently leasing a GM vehicle — Chevrolet, GMC, Buick, or Cadillac</option>
                    <option value="ford">Currently leasing a Ford or Lincoln</option>
                    <option value="stellantis">Currently leasing a Jeep, Ram, Chrysler, or Dodge</option>
                    <option value="toyota">Currently leasing a Toyota or Lexus</option>
                    <option value="honda">Currently leasing a Honda or Acura</option>
                    <option value="hyundai">Currently leasing a Hyundai or Genesis</option>
                    <option value="kia">Currently leasing a Kia</option>
                    <option value="bmw">Currently leasing a BMW</option>
                    <option value="mercedes">Currently leasing a Mercedes-Benz</option>
                    <option value="other">Currently leasing another brand</option>
                  </select>
                </Section>

                {/* ADDITIONAL */}
                <Section id="additional" title="Additional incentives" subtitle="These stack on top of everything above">
                  <CheckItem
                    checked={incentives.costco}
                    onChange={() => toggle('costco')}
                    label="Costco member"
                    detail="GM is the most consistent Costco Auto Program partner — typically $1,000 to $2,000 in stackable cash on select Chevrolet, GMC, Buick, and Cadillac vehicles. BMW and Audi also participate regularly with meaningful incentives. Ford and Stellantis rarely offer direct Costco cash programs. You must have been a Costco member before the promotional period begins to qualify — joining just for the rebate typically does not work."
                  />
                  <CheckItem
                    checked={incentives.military}
                    onChange={() => toggle('military')}
                    label="Military or veteran"
                    detail="Most manufacturers offer $500 to $1,000 in Military Appreciation cash. Ford offers $500-$1,000. BMW's program scales from $500 up to $11,000 on select models depending on financing method. Honda and Toyota typically require financing through their captive lenders (Honda Financial Services or Toyota Financial Services) to unlock the discount. Verification through ID.me or SheerID is required at the dealership."
                    warning="GM Military Appreciation cannot be combined with GM Family First employee pricing — you must choose whichever gives you the larger discount."
                  />
                </Section>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
                  <button
                    onClick={() => { if (hasAnyIncentive) { setIsPersonalized(true); setShowIncentivePanel(false); } }}
                    disabled={!hasAnyIncentive}
                    style={{
                      background: hasAnyIncentive ? '#1D9E75' : '#333',
                      color: hasAnyIncentive ? '#fff' : '#666',
                      border: 'none', borderRadius: 99, padding: '13px 30px',
                      fontSize: 15, fontWeight: 600,
                      cursor: hasAnyIncentive ? 'pointer' : 'not-allowed'
                    }}
                  >
                    Show my personalized scores →
                  </button>
                  {isPersonalized && (
                    <button
                      onClick={() => { setIsPersonalized(false); setIncentives(defaultIncentives); setShowIncentivePanel(false); }}
                      style={{ background: 'transparent', color: '#888', border: '1px solid #444', borderRadius: 99, padding: '13px 24px', fontSize: 15, cursor: 'pointer' }}
                    >
                      Reset to general scores
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* CATEGORY TOP PICKS */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>
              {isPersonalized ? 'Your top pick by category' : 'Top pick by category right now'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 12 }}>
              {[
                { label: '🏆 Best overall', vehicle: topVehicles[0] },
                { label: '🛻 Best truck', vehicle: bestTruck },
                { label: '🚙 Best SUV', vehicle: bestSuv },
                { label: '🚗 Best sedan', vehicle: bestSedan },
                { label: '⭐ Best luxury SUV', vehicle: bestLuxury },
              ].map((item, i) => (
                <a key={i} href="/bidlock" style={{ textDecoration: 'none' }}>
                  <div
                    style={{ background: i === 0 ? '#111' : '#fff', borderRadius: 12, border: i === 0 ? 'none' : '1px solid #eee', padding: '16px', cursor: 'pointer' }}
                    onMouseEnter={e => { if (i !== 0) e.currentTarget.style.borderColor = '#1D9E75'; }}
                    onMouseLeave={e => { if (i !== 0) e.currentTarget.style.borderColor = '#eee'; }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? '#1D9E75' : '#999', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? '#fff' : '#111', marginBottom: 2, lineHeight: 1.3 }}>{item.vehicle.make} {item.vehicle.model}</div>
                    <div style={{ fontSize: 12, color: i === 0 ? '#888' : '#999', marginBottom: 10 }}>{item.vehicle.trim}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: 13, color: i === 0 ? '#888' : '#666' }}>Est. ${item.vehicle.estPayment}/mo</div>
                      <div style={{ fontSize: 20, fontWeight: 700, color: scoreColor(item.vehicle.score) }}>{item.vehicle.score}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#bbb', fontStyle: 'italic', marginTop: 10 }}>* Est. payment based on $0 down, 36mo, 12k mi/yr, excellent credit. Actual payment varies by market and incentives.</p>
          </div>

          {/* SLIM CTA STRIP */}
          <div style={{ background: '#111', borderRadius: 12, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75', marginBottom: 4 }}>
                {monthName} {year} · {topBrand} leads {isPersonalized ? 'your' : 'our'} rankings with a top score of {topScore}
              </div>
              <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6, maxWidth: 560 }}>{getTimingMessage()}</div>
            </div>
            <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Submit a BidLock™ — free
            </a>
          </div>
        </div>

        {/* HOW SCORE WORKS */}
        <div style={{ background: '#fff', borderRadius: 14, padding: '28px 32px', marginBottom: 40, border: '1px solid #eee' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12 }}>
            {isPersonalized ? 'How your Custom Lease Intelligence Score™ works' : 'How the Lease Intelligence Score™ works'}
          </h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
            {isPersonalized
              ? 'Your score starts with market timing, manufacturer incentives, and inventory levels — then adds every incentive you qualify for, stacked across all brands simultaneously. Employee pricing, Friends & Neighbors access, loyalty bonuses, Costco, and military all move your number independently.'
              : 'The Lease Intelligence Score is a proprietary AutoBidly algorithm that scores every vehicle from 1 to 100 based on how favorable current lease conditions are. Personalize your scores above — your incentive stack can significantly change which vehicles rank highest for your specific situation.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              { factor: 'Manufacturer incentives', desc: 'Subvented money factors, lease cash, and special programs directly from the manufacturer.' },
              { factor: 'Dealer inventory levels', desc: 'Higher inventory levels create more flexibility and competitive pricing.' },
              { factor: 'Market timing', desc: 'End of month, end of quarter, and end of year create better conditions for buyers.' },
              { factor: isPersonalized ? 'Your incentive stack' : 'Model demand', desc: isPersonalized ? 'All your incentives — employee pricing, Friends & Neighbors, loyalty, Costco, military — applied simultaneously across every applicable brand.' : 'High-demand vehicles score lower — strong demand reduces the need for incentive programs.' },
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

        <VehicleSection title={isPersonalized ? 'Best SUVs for your situation' : 'Best SUVs to lease right now'} vehicles={suvs} />
        <VehicleSection title={isPersonalized ? 'Best trucks for your situation' : 'Best trucks to lease right now'} vehicles={trucks} />
        <VehicleSection title={isPersonalized ? 'Best sedans for your situation' : 'Best sedans to lease right now'} vehicles={sedans} />
        <VehicleSection title={isPersonalized ? 'Best luxury SUVs for your situation' : 'Best luxury SUVs to lease right now'} vehicles={luxurySuvs} />

        <div style={{ background: '#FEF2F2', borderRadius: 14, padding: '28px 32px', marginBottom: 40, border: '1px solid #FECACA' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12 }}>Vehicles with lower lease scores right now</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>These vehicles have lower scores due to high demand, limited inventory, or reduced manufacturer lease support. You can still lease them — conditions just favor the buyer less right now.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {[
              { vehicle: 'Jeep Wrangler', reason: 'Consistently high demand means strong incentive programs are rarely needed. Limited lease support from Stellantis at this time.' },
              { vehicle: 'Toyota Tacoma', reason: 'Supply constraints and strong resale values reduce the need for competitive lease rates from Toyota Financial.' },
              { vehicle: 'Ford Bronco', reason: 'High demand and strong brand loyalty reduce the need for aggressive lease incentives from Ford Motor Credit.' },
              { vehicle: 'Toyota 4Runner', reason: 'Legendary reliability and off-road reputation creates consistent demand. Lease programs reflect that strength.' },
            ].map((v, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '14px 16px', border: '1px solid #FECACA' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#991B1B', marginBottom: 4 }}>↓ {v.vehicle}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{v.reason}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: 14, padding: '28px 32px', marginBottom: 40, border: '1px solid #eee' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12 }}>Best time of month to lease a car</h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>Timing matters almost as much as which vehicle you choose. Dealers have monthly sales targets and manufacturers run monthly incentive programs that reset on the first of every month.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { time: 'Last 5 days of the month', impact: '+10 pts', desc: 'Dealers are working toward monthly targets. Acceptance rates on BidLocks increase significantly during this window.' },
              { time: 'End of quarter (March, June, September, December)', impact: '+15 pts', desc: 'Quarterly targets create additional urgency. Manufacturers often add dealer incentives to help close the gap.' },
              { time: 'End of year (December)', impact: '+25 pts combined', desc: 'The strongest month for lease deals in most years. Year-end, quarter-end, and month-end all align simultaneously.' },
              { time: 'First week of the month', impact: '0 pts', desc: 'Monthly targets just reset. Less urgency on both the dealer and manufacturer side during this window.' },
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