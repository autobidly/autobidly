"use client";
import { useState, useEffect } from "react";

export default function BidLockPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [models, setModels] = useState<string[]>([]);
  const [trims, setTrims] = useState<string[]>([]);
  const [availableBodies, setAvailableBodies] = useState<string[]>([]);
  const [availableDrives, setAvailableDrives] = useState<string[]>([]);
  const [msrpMap, setMsrpMap] = useState<Record<string, number>>({});
  const [isTruck, setIsTruck] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingTrims, setLoadingTrims] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);
  const [verifyError, setVerifyError] = useState('');

  const [form, setForm] = useState({
    make: "Ford", model: "", trim: "", config: "", cab: "",
    color: "", term: "36", miles: "12000",
    payment: "", down: "0", zip: "",
    loyalty: false, employee: false, conquest: false, military: false, costco: false,
    credit: "excellent", name: "", email: "", phone: ""
  });

  const update = (k: string, v: any) => setForm(f => ({ ...f, [k]: v }));
  const makes = ['Ford','Chevrolet','GMC','Ram','Toyota','Honda','BMW','Mercedes-Benz','Cadillac','Buick','Jeep','Kia','Hyundai','Nissan','Lexus','Audi','Porsche','Subaru','Mazda','Volkswagen','Infiniti'];

  function mapBody(raw: string): string {
    const r = raw.toLowerCase();
    if (r.includes('supercrew') || r.includes('crew cab pickup')) return 'Crew Cab';
    if (r.includes('supercab') || r.includes('extended cab')) return 'SuperCab';
    if (r.includes('regular cab')) return 'Regular Cab';
    if (r.includes('double cab')) return 'Double Cab';
    if (r.includes('sport utility') || r.includes('suv')) return 'SUV';
    if (r.includes('sedan')) return 'Sedan';
    if (r.includes('coupe')) return 'Coupe';
    if (r.includes('convert') || r.includes('cabrio') || r.includes('roadster') || r.includes('spyder')) return 'Convertible';
    if (r.includes('hatch')) return 'Hatchback';
    if (r.includes('wagon')) return 'Wagon';
    if (r.includes('minivan') || r.includes('passenger van')) return 'Minivan';
    if (r.includes('van')) return 'Van';
    return raw;
  }

  function getDrives(make: string, model: string, trim: string): string[] {
    const m = make.toLowerCase();
    const t = trim.toLowerCase();
    const mo = model.toLowerCase();
    if (m.includes('porsche')) return t.includes('carrera 4') || t.includes('targa 4') || t.includes('4 gts') ? ['AWD'] : ['RWD'];
    if (m.includes('mazda')) return mo.includes('mx-5') || mo.includes('miata') ? ['RWD'] : ['AWD', 'FWD'];
    if (m.includes('bmw')) return t.includes('xdrive') ? ['AWD'] : ['RWD', 'AWD'];
    if (m.includes('mercedes')) return t.includes('4matic') ? ['AWD'] : ['RWD', 'AWD'];
    if (m.includes('audi')) return ['AWD'];
    if (m.includes('subaru')) return ['AWD'];
    if (m.includes('volkswagen')) return t.includes('4motion') ? ['AWD'] : ['FWD', 'AWD'];
    if (m.includes('lexus')) return ['AWD', 'FWD'];
    if (m.includes('infiniti')) return ['RWD', 'AWD'];
    if (m.includes('jeep')) {
      if (mo.includes('wrangler') || mo.includes('gladiator')) return ['4x4'];
      return ['4x4', 'AWD', '4x2'];
    }
    if (m.includes('ford')) {
      if (mo.includes('mustang')) return ['RWD'];
      if (mo.includes('bronco') && !mo.includes('sport')) return ['4x4'];
      if (mo.includes('bronco sport') || mo.includes('escape') || mo.includes('edge') || mo.includes('explorer') || mo.includes('maverick')) return ['AWD', 'FWD'];
      return ['4x4', '4x2'];
    }
    if (m.includes('chevrolet') || m.includes('gmc')) {
      if (mo.includes('camaro') || mo.includes('corvette')) return ['RWD'];
      if (mo.includes('equinox') || mo.includes('traverse') || mo.includes('trax') || mo.includes('blazer') || mo.includes('terrain') || mo.includes('acadia') || mo.includes('envoy') || mo.includes('envista')) return ['AWD', 'FWD'];
      return ['4x4', '4x2'];
    }
    if (m.includes('ram')) return ['4x4', '4x2'];
    if (m.includes('toyota')) {
      if (mo.includes('camry') || mo.includes('corolla') || mo.includes('prius') || mo.includes('avalon')) return ['AWD', 'FWD'];
      if (mo.includes('tacoma') || mo.includes('tundra') || mo.includes('4runner') || mo.includes('sequoia')) return ['4x4', '4x2'];
      return ['AWD', 'FWD'];
    }
    if (m.includes('honda')) return ['AWD', 'FWD'];
    if (m.includes('hyundai') || m.includes('kia') || m.includes('genesis')) return ['AWD', 'FWD'];
    if (m.includes('nissan')) {
      if (mo.includes('370z') || mo.includes('gt-r')) return ['RWD'];
      if (mo.includes('frontier') || mo.includes('titan')) return ['4x4', '4x2'];
      return ['AWD', 'FWD'];
    }
    if (m.includes('cadillac')) return ['AWD', 'RWD'];
    if (m.includes('buick')) return ['AWD', 'FWD'];
    return ['AWD', 'FWD', 'RWD'];
  }

  useEffect(() => {
    if (!form.make) return;
    setLoadingModels(true);
    setModels([]);
    setTrims([]);
    setAvailableBodies([]);
    setAvailableDrives([]);
    setMsrpMap({});
    setIsTruck(false);
    update('model', '');
    update('trim', '');
    update('config', '');
    update('cab', '');
    fetch(`/api/vehicle?type=models&make=${encodeURIComponent(form.make)}`)
      .then(r => r.json())
      .then(data => { setModels(data.models || []); setLoadingModels(false); })
      .catch(() => setLoadingModels(false));
  }, [form.make]);

  useEffect(() => {
    if (!form.make || !form.model) return;
    setLoadingTrims(true);
    setTrims([]);
    setAvailableBodies([]);
    setAvailableDrives([]);
    setMsrpMap({});
    setIsTruck(false);
    update('trim', '');
    update('config', '');
    update('cab', '');
    fetch(`/api/vehicle?type=trims&make=${encodeURIComponent(form.make)}&model=${encodeURIComponent(form.model)}`)
      .then(r => r.json())
      .then(data => {
        setTrims(data.trims || []);
        setMsrpMap(data.msrpMap || {});
        setIsTruck(data.isTruck || false);
        const bodies = data.bodyTypes || [];
        setAvailableBodies(bodies);
        if (bodies.length === 1) update('cab', bodies[0]);
        setLoadingTrims(false);
      })
      .catch(() => setLoadingTrims(false));
  }, [form.make, form.model]);

  useEffect(() => {
    if (!form.make || !form.model || !form.trim) return;
    fetch(`/api/vehicle?type=trimdetails&make=${encodeURIComponent(form.make)}&model=${encodeURIComponent(form.model)}&trim=${encodeURIComponent(form.trim)}`)
      .then(r => r.json())
      .then(data => {
        if (!data.isTruck && data.body) {
          const cab = mapBody(data.body);
          update('cab', cab);
          setAvailableBodies([cab]);
        }
        const drives = getDrives(form.make, form.model, form.trim);
        setAvailableDrives(drives);
        update('config', drives[0]);
      })
      .catch(() => {
        const drives = getDrives(form.make, form.model, form.trim);
        setAvailableDrives(drives);
        update('config', drives[0]);
      });
  }, [form.trim]);

  async function sendCode() {
    if (!form.phone || form.phone.length < 10) return;
    setSendingCode(true);
    setVerifyError('');
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: form.phone, action: 'send' }),
      });
      const data = await res.json();
      if (data.success) {
        setCodeSent(true);
      } else {
        setVerifyError(data.error || 'Failed to send code.');
      }
    } catch {
      setVerifyError('Failed to send code. Please try again.');
    }
    setSendingCode(false);
  }

  async function verifyCode() {
    if (!codeInput || codeInput.length !== 6) return;
    setVerifyingCode(true);
    setVerifyError('');
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: form.phone, action: 'verify', code: codeInput }),
      });
      const data = await res.json();
      if (data.verified) {
        setPhoneVerified(true);
        setVerifyError('');
      } else {
        setVerifyError(data.error || 'Incorrect code.');
      }
    } catch {
      setVerifyError('Verification failed. Please try again.');
    }
    setVerifyingCode(false);
  }

  const incentiveCount = [form.loyalty, form.employee, form.conquest, form.military, form.costco].filter(Boolean).length;
  const selectStyle = { width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7', fontFamily: 'system-ui' } as any;
  const inputStyle = { ...selectStyle };
  const labelStyle = { fontSize: 12, color: '#666', display: 'block', marginBottom: 6 } as any;
  const lockedStyle = { ...inputStyle, background: '#E1F5EE', color: '#0F6E56', fontWeight: 500, cursor: 'default', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } as any;

  function getBidStrength(payment: string, trim: string, make: string) {
    const p = parseInt(payment);
    const msrp = msrpMap[trim] || 0;
    let market = 0;
    if (msrp > 0) {
      market = Math.round(msrp * 0.010);
    } else {
      const m = make.toLowerCase();
      market = m.includes('bmw') || m.includes('mercedes') || m.includes('audi') || m.includes('lexus') || m.includes('porsche') ? 750
        : m.includes('cadillac') || m.includes('lincoln') || m.includes('genesis') ? 650 : 499;
    }
    const ratio = p / market;
    const strong = ratio >= 0.90;
    const fair = ratio >= 0.75 && ratio < 0.90;
    const suggested = Math.round(market * 0.90);
    return { strong, fair, suggested, market, msrp };
  }

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <a href="/how-it-works" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>How it works</a>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/dealer" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="/profile" style={{ fontSize: 14, color: '#1D9E75', textDecoration: 'none', fontWeight: 500 }}>My Lease Passport</a>
        </div>
      </nav>

      {submitted ? (
        <div style={{ maxWidth: 560, margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32 }}>✓</div>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: '#111', marginBottom: 12 }}>Your BidLock™ is live!</h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, marginBottom: 32 }}>Your offer has been sent to dealers near <strong>{form.zip}</strong>. We'll text and email you the moment a dealer accepts.</p>
          <div style={{ background: '#fff', border: '1.5px solid #1D9E75', borderRadius: 12, padding: 24, marginBottom: 24, textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Your BidLock™ summary</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{form.make} {form.model} {form.trim}</div>
            <div style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>{form.config} · {form.cab} · {form.term}mo · {parseInt(form.miles).toLocaleString()} mi/yr</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div><div style={{ fontSize: 11, color: '#999' }}>Monthly payment</div><div style={{ fontSize: 24, fontWeight: 700, color: '#1D9E75' }}>${form.payment}/mo</div></div>
              <div style={{ textAlign: 'right' }}><div style={{ fontSize: 11, color: '#999' }}>Down payment</div><div style={{ fontSize: 20, fontWeight: 600, color: '#111' }}>${form.down}</div></div>
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 16, marginBottom: 32, fontSize: 13, color: '#555', lineHeight: 1.7 }}>
            <strong style={{ color: '#111' }}>What happens next:</strong><br />
            1. We verify your eligibility documents<br />
            2. Your offer goes live to dealers in your area<br />
            3. First dealer to accept is bound to your price<br />
            4. You have 72 hours to visit and sign
          </div>
          <a href="/deals" style={{ background: '#1D9E75', color: '#fff', padding: '14px 32px', borderRadius: 99, textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>Browse more deals</a>
        </div>
      ) : (
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>BidLock™</div>
            <h1 style={{ fontSize: 32, fontWeight: 600, color: '#111', letterSpacing: '-0.5px', marginBottom: 8 }}>Name your price. Lock it in.</h1>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>Tell us exactly what you want. Dealers compete. The first to accept is bound to your price.</p>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 32, alignItems: 'center', justifyContent: 'center' }}>
            {[1,2,3].map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: step >= s ? '#1D9E75' : '#eee', color: step >= s ? '#fff' : '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500 }}>{s}</div>
                <span style={{ fontSize: 12, color: step === s ? '#111' : '#999', fontWeight: step === s ? 500 : 400 }}>{s === 1 ? 'Your vehicle' : s === 2 ? 'Your deal' : 'Your info'}</span>
                {s < 3 && <div style={{ width: 40, height: 1, background: step > s ? '#1D9E75' : '#eee' }}></div>}
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #eee', padding: 32 }}>
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 24 }}>What vehicle do you want?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={labelStyle}>Make</label>
                    <select value={form.make} onChange={e => update('make', e.target.value)} style={selectStyle}>
                      {makes.map(m => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Model {loadingModels && <span style={{ color: '#1D9E75' }}>loading...</span>}</label>
                    <select value={form.model} onChange={e => update('model', e.target.value)} style={selectStyle} disabled={loadingModels || models.length === 0}>
                      <option value="">Select model</option>
                      {models.map(m => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Trim {loadingTrims && <span style={{ color: '#1D9E75' }}>loading...</span>}</label>
                    <select value={form.trim} onChange={e => update('trim', e.target.value)} style={selectStyle} disabled={loadingTrims || trims.length === 0}>
                      <option value="">Select trim</option>
                      {trims.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Config</label>
                    {availableDrives.length === 1 ? (
                      <div style={lockedStyle}>{form.config} <span style={{ fontSize: 11, fontWeight: 400 }}>✓ auto-filled</span></div>
                    ) : availableDrives.length > 1 ? (
                      <select value={form.config} onChange={e => update('config', e.target.value)} style={selectStyle}>
                        {availableDrives.map(c => <option key={c}>{c}</option>)}
                      </select>
                    ) : (
                      <div style={{ ...inputStyle, color: '#999' }}>Select trim first</div>
                    )}
                  </div>
                  <div>
                    <label style={labelStyle}>Cab / Body</label>
                    {availableBodies.length === 1 ? (
                      <div style={lockedStyle}>{form.cab} <span style={{ fontSize: 11, fontWeight: 400 }}>✓ auto-filled</span></div>
                    ) : availableBodies.length > 1 ? (
                      <select value={form.cab} onChange={e => update('cab', e.target.value)} style={selectStyle}>
                        {availableBodies.map(c => <option key={c}>{c}</option>)}
                      </select>
                    ) : (
                      <div style={{ ...inputStyle, color: '#999' }}>Select model first</div>
                    )}
                  </div>
                  <div>
                    <label style={labelStyle}>Preferred color (optional)</label>
                    <input value={form.color} onChange={e => update('color', e.target.value)} placeholder="e.g. White, Black, Any" style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setStep(2)} disabled={!form.model || !form.trim} style={{ background: form.model && form.trim ? '#111' : '#ccc', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: form.model && form.trim ? 'pointer' : 'not-allowed' }}>Next — your deal →</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 24 }}>What deal do you want?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div>
                    <label style={labelStyle}>Monthly payment target</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 14 }}>$</span>
                      <input type="number" value={form.payment} onChange={e => update('payment', e.target.value)} placeholder="495" style={{ ...inputStyle, paddingLeft: 24 }} />
                    </div>
                    {form.payment && (() => {
                      const { strong, fair, suggested, msrp } = getBidStrength(form.payment, form.trim, form.make);
                      return (
                        <div style={{ marginTop: 8, padding: '10px 14px', borderRadius: 8, background: strong ? '#E1F5EE' : fair ? '#FFFBEB' : '#FEF2F2', border: `1px solid ${strong ? '#9FE1CB' : fair ? '#FCD34D' : '#FECACA'}` }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: strong ? '#0F6E56' : fair ? '#92400E' : '#991B1B', marginBottom: 2 }}>{strong ? '✓ Strong bid' : fair ? '~ Fair bid' : '✗ Weak bid'}</div>
                          <div style={{ fontSize: 12, color: strong ? '#1D9E75' : fair ? '#B45309' : '#DC2626' }}>
                            {msrp > 0 ? `Based on MSRP of $${msrp.toLocaleString()}. ` : ''}
                            {strong ? 'This payment is competitive. High chance of same-day acceptance.' : fair ? `Slightly below market. Consider $${suggested}/mo for a stronger chance.` : `Below what dealers are accepting. Try $${suggested}/mo or higher.`}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                  <div>
                    <label style={labelStyle}>Down payment</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 14 }}>$</span>
                      <input type="number" value={form.down} onChange={e => update('down', e.target.value)} placeholder="0" style={{ ...inputStyle, paddingLeft: 24 }} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Lease term</label>
                    <select value={form.term} onChange={e => update('term', e.target.value)} style={selectStyle}>
                      {['24','36','48','60'].map(t => <option key={t} value={t}>{t} months</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Miles per year</label>
                    <select value={form.miles} onChange={e => update('miles', e.target.value)} style={selectStyle}>
                      {['10000','12000','15000','18000'].map(m => <option key={m} value={m}>{parseInt(m).toLocaleString()} miles/yr</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Your ZIP code</label>
                    <input value={form.zip} onChange={e => update('zip', e.target.value)} placeholder="48167" maxLength={5} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Credit score</label>
                    <select value={form.credit} onChange={e => update('credit', e.target.value)} style={selectStyle}>
                      <option value="excellent">Excellent (720+)</option>
                      <option value="good">Good (680-719)</option>
                      <option value="fair">Fair (620-679)</option>
                    </select>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #eee', paddingTop: 20, marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: '#111', display: 'block', marginBottom: 4 }}>Your eligible incentives</label>
                  <p style={{ fontSize: 12, color: '#888', marginBottom: 14 }}>Select every discount you qualify for.</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {[
                      { key: 'employee', label: 'Employee / A-Plan' },
                      { key: 'loyalty', label: 'Lease Loyalty' },
                      { key: 'conquest', label: 'Conquest' },
                      { key: 'military', label: 'Military' },
                      { key: 'costco', label: 'Costco Member' },
                    ].map(({ key, label }) => (
                      <button key={key} onClick={() => update(key, !(form as any)[key])} style={{ padding: '8px 16px', borderRadius: 99, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: (form as any)[key] ? '1.5px solid #1D9E75' : '1px solid #ddd', background: (form as any)[key] ? '#E1F5EE' : '#f9f9f7', color: (form as any)[key] ? '#0F6E56' : '#666' }}>
                        {(form as any)[key] ? '✓ ' : ''}{label}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => setStep(1)} style={{ background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 99, padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>← Back</button>
                  <button onClick={() => setStep(3)} disabled={!form.payment || !form.zip} style={{ background: form.payment && form.zip ? '#111' : '#ccc', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: form.payment && form.zip ? 'pointer' : 'not-allowed' }}>Next — your info →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 8 }}>Almost there — your contact info</h2>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Dealers only see your info after you accept their response. Your data is never sold.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Full name</label>
                    <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Bryan Vigna" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => { update('phone', e.target.value); setCodeSent(false); setPhoneVerified(false); setCodeInput(''); setVerifyError(''); }}
                        placeholder="(248) 555-0100"
                        style={{ ...inputStyle, flex: 1 }}
                        disabled={phoneVerified}
                      />
                      {!phoneVerified && (
                        <button
                          onClick={sendCode}
                          disabled={sendingCode || form.phone.length < 10}
                          style={{ background: form.phone.length >= 10 ? '#111' : '#ccc', color: '#fff', border: 'none', borderRadius: 8, padding: '0 16px', fontSize: 13, fontWeight: 500, cursor: form.phone.length >= 10 ? 'pointer' : 'not-allowed', whiteSpace: 'nowrap' }}
                        >
                          {sendingCode ? 'Sending...' : codeSent ? 'Resend' : 'Send code'}
                        </button>
                      )}
                      {phoneVerified && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0F6E56', fontSize: 13, fontWeight: 500 }}>
                          ✓ Verified
                        </div>
                      )}
                    </div>
                  </div>

                  {codeSent && !phoneVerified && (
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={labelStyle}>Enter the 6-digit code sent to your phone</label>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <input
                          type="text"
                          value={codeInput}
                          onChange={e => setCodeInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          placeholder="000000"
                          maxLength={6}
                          style={{ ...inputStyle, flex: 1, letterSpacing: '0.2em', fontWeight: 600 }}
                        />
                        <button
                          onClick={verifyCode}
                          disabled={verifyingCode || codeInput.length !== 6}
                          style={{ background: codeInput.length === 6 ? '#1D9E75' : '#ccc', color: '#fff', border: 'none', borderRadius: 8, padding: '0 16px', fontSize: 13, fontWeight: 500, cursor: codeInput.length === 6 ? 'pointer' : 'not-allowed' }}
                        >
                          {verifyingCode ? 'Verifying...' : 'Verify'}
                        </button>
                      </div>
                      {verifyError && <div style={{ fontSize: 12, color: '#DC2626', marginTop: 6 }}>{verifyError}</div>}
                    </div>
                  )}
                </div>

                <div style={{ background: '#f9f9f7', borderRadius: 12, padding: 20, marginBottom: 24, border: '1px solid #eee' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Your BidLock™ summary</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{form.make} {form.model} {form.trim}</div>
                  <div style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>{form.config} · {form.cab} · {form.term}mo · {parseInt(form.miles).toLocaleString()} mi/yr{form.color ? ` · ${form.color}` : ''}</div>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <div><div style={{ fontSize: 11, color: '#999' }}>Your target payment</div><div style={{ fontSize: 22, fontWeight: 700, color: '#1D9E75' }}>${form.payment}/mo</div></div>
                    <div><div style={{ fontSize: 11, color: '#999' }}>Down payment</div><div style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>${form.down}</div></div>
                    <div><div style={{ fontSize: 11, color: '#999' }}>Incentives</div><div style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>{incentiveCount}</div></div>
                  </div>
                </div>

                <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '14px 16px', marginBottom: 24, fontSize: 13, color: '#0F6E56', lineHeight: 1.6 }}>
                  <strong>Free to submit.</strong> Soft credit check only — no impact to your score.
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button onClick={() => setStep(2)} style={{ background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 99, padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>← Back</button>
                  <button
                    onClick={() => { if (form.name && form.email && phoneVerified) setSubmitted(true); }}
                    disabled={!form.name || !form.email || !phoneVerified}
                    style={{ background: form.name && form.email && phoneVerified ? '#1D9E75' : '#ccc', color: '#fff', border: 'none', borderRadius: 99, padding: '14px 36px', fontSize: 15, fontWeight: 500, cursor: form.name && form.email && phoneVerified ? 'pointer' : 'not-allowed' }}
                  >
                    Submit BidLock™ — free
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}