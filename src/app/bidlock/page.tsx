"use client";
import { useState } from "react";

export default function BidLockPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    make: "Ford", model: "F-150", trim: "XLT", config: "4x4", cab: "Crew Cab",
    color: "", engine: "2.7L EcoBoost V6", term: "36", miles: "12000",
    payment: "", down: "0", zip: "",
    loyalty: false, employee: false, conquest: false, military: false, costco: false,
    credit: "excellent", name: "", email: "", phone: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: any) => setForm(f => ({ ...f, [k]: v }));

  const incentiveCount = [form.loyalty, form.employee, form.conquest, form.military, form.costco].filter(Boolean).length;

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>
          Auto<span style={{ color: '#1D9E75' }}>Bidly</span>
        </a>
        <div style={{ fontSize: 13, color: '#666' }}>Already have an account? <a href="#" style={{ color: '#1D9E75' }}>Sign in</a></div>
      </nav>

      {submitted ? (
        /* SUCCESS STATE */
        <div style={{ maxWidth: 560, margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32 }}>✓</div>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: '#111', marginBottom: 12, letterSpacing: '-0.5px' }}>Your BidLock™ is live!</h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, marginBottom: 32 }}>
            Your offer has been sent to dealers near <strong>{form.zip}</strong>. We'll text and email you the moment a dealer accepts — usually within a few hours.
          </p>
          <div style={{ background: '#fff', border: '1.5px solid #1D9E75', borderRadius: 12, padding: 24, marginBottom: 24, textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Your BidLock™ summary</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{form.make} {form.model} {form.trim}</div>
            <div style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>{form.config} · {form.cab} · {form.term}mo · {parseInt(form.miles).toLocaleString()} mi/yr</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, color: '#999' }}>Monthly payment</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#1D9E75' }}>${form.payment}/mo</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: '#999' }}>Down payment</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#111' }}>${form.down}</div>
              </div>
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

          {/* HEADER */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>BidLock™</div>
            <h1 style={{ fontSize: 32, fontWeight: 600, color: '#111', letterSpacing: '-0.5px', marginBottom: 8 }}>Name your price. Lock it in.</h1>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>Tell us exactly what you want. Dealers in your area will compete for your business. The first to accept is bound to your price — no changes at the door.</p>
          </div>

          {/* STEP INDICATOR */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, alignItems: 'center', justifyContent: 'center' }}>
            {[1,2,3].map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: step >= s ? '#1D9E75' : '#eee', color: step >= s ? '#fff' : '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 500 }}>{s}</div>
                <span style={{ fontSize: 12, color: step === s ? '#111' : '#999', fontWeight: step === s ? 500 : 400 }}>
                  {s === 1 ? 'Your vehicle' : s === 2 ? 'Your deal' : 'Your info'}
                </span>
                {s < 3 && <div style={{ width: 40, height: 1, background: step > s ? '#1D9E75' : '#eee' }}></div>}
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #eee', padding: 32 }}>

            {/* STEP 1 — VEHICLE */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 24 }}>What vehicle do you want?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Make</label>
                    <select value={form.make} onChange={e => update('make', e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }}>
                      {['Ford','Chevrolet','GMC','Ram','Toyota','Honda','BMW','Mercedes-Benz','Cadillac','Buick','Jeep','Kia','Hyundai','Nissan','Lexus'].map(m => <option key={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Model</label>
                    <input value={form.model} onChange={e => update('model', e.target.value)} placeholder="e.g. F-150" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Trim</label>
                    <input value={form.trim} onChange={e => update('trim', e.target.value)} placeholder="e.g. XLT, Lariat" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Config</label>
                    <select value={form.config} onChange={e => update('config', e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }}>
                      {['4x4','4x2','AWD','FWD','RWD'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Cab / Body</label>
                    <select value={form.cab} onChange={e => update('cab', e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }}>
                      {['Crew Cab','SuperCab','Regular Cab','SUV','Sedan','Coupe','Convertible'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Preferred color (optional)</label>
                    <input value={form.color} onChange={e => update('color', e.target.value)} placeholder="e.g. White, Black, Any" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                </div>
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setStep(2)} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Next — your deal →</button>
                </div>
              </div>
            )}

            {/* STEP 2 — DEAL TERMS */}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 24 }}>What deal do you want?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Monthly payment target</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 14 }}>$</span>
                      <input type="number" value={form.payment} onChange={e => update('payment', e.target.value)} placeholder="495" style={{ width: '100%', padding: '10px 12px 10px 24px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                    </div>
                    {form.payment && (() => {
                      const p = parseInt(form.payment);
                      const make = form.make.toLowerCase();
                      const market = make.includes('bmw') || make.includes('mercedes') || make.includes('audi') || make.includes('lexus') || make.includes('porsche') ? 750
                        : make.includes('cadillac') || make.includes('lincoln') || make.includes('genesis') ? 650
                        : 499;
                      const ratio = p / market;
                      const strong = ratio >= 0.92;
                      const fair = ratio >= 0.78 && ratio < 0.92;
                      const suggested = Math.round(market * 0.92);
                      return (
                        <div style={{ marginTop: 8, padding: '10px 14px', borderRadius: 8, background: strong ? '#E1F5EE' : fair ? '#FFFBEB' : '#FEF2F2', border: `1px solid ${strong ? '#9FE1CB' : fair ? '#FCD34D' : '#FECACA'}` }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: strong ? '#0F6E56' : fair ? '#92400E' : '#991B1B', marginBottom: 2 }}>
                            {strong ? '✓ Strong bid' : fair ? '~ Fair bid' : '✗ Weak bid'}
                          </div>
                          <div style={{ fontSize: 12, color: strong ? '#1D9E75' : fair ? '#B45309' : '#DC2626' }}>
                            {strong ? 'This payment is competitive. High chance of same-day acceptance.' : fair ? `Slightly below market. Consider $${suggested}/mo for a stronger chance.` : `Below what dealers are accepting. Try $${suggested}/mo or higher.`}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Down payment</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 14 }}>$</span>
                      <input type="number" value={form.down} onChange={e => update('down', e.target.value)} placeholder="0" style={{ width: '100%', padding: '10px 12px 10px 24px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Lease term</label>
                    <select value={form.term} onChange={e => update('term', e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }}>
                      {['24','36','48','60'].map(t => <option key={t} value={t}>{t} months</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Miles per year</label>
                    <select value={form.miles} onChange={e => update('miles', e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }}>
                      {['10000','12000','15000','18000'].map(m => <option key={m} value={m}>{parseInt(m).toLocaleString()} miles/yr</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Your ZIP code</label>
                    <input value={form.zip} onChange={e => update('zip', e.target.value)} placeholder="48167" maxLength={5} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Credit score</label>
                    <select value={form.credit} onChange={e => update('credit', e.target.value)} style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }}>
                      <option value="excellent">Excellent (720+)</option>
                      <option value="good">Good (680-719)</option>
                      <option value="fair">Fair (620-679)</option>
                    </select>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #eee', paddingTop: 20, marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 500, color: '#111', display: 'block', marginBottom: 4 }}>Your eligible incentives</label>
                  <p style={{ fontSize: 12, color: '#888', marginBottom: 14 }}>Select every discount you qualify for. You'll upload proof in the next step.</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {[
                      { key: 'employee', label: 'Employee / A-Plan' },
                      { key: 'loyalty', label: 'Lease Loyalty' },
                      { key: 'conquest', label: 'Conquest' },
                      { key: 'military', label: 'Military' },
                      { key: 'costco', label: 'Costco Member' },
                    ].map(({ key, label }) => (
                      <button key={key} onClick={() => update(key, !(form as any)[key])} style={{ padding: '8px 16px', borderRadius: 99, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: (form as any)[key] ? '1.5px solid #1D9E75' : '1px solid #ddd', background: (form as any)[key] ? '#E1F5EE' : '#f9f9f7', color: (form as any)[key] ? '#0F6E56' : '#666', transition: 'all 0.15s' }}>
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

            {/* STEP 3 — CONTACT + SUBMIT */}
            {step === 3 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 8 }}>Almost there — your contact info</h2>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Dealers only see your info after you accept their response. Your data is never sold.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Full name</label>
                    <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Bryan Vigna" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Email</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@email.com" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Phone (for dealer contact)</label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(248) 555-0100" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7' }} />
                  </div>
                </div>

                {/* BID SUMMARY */}
                <div style={{ background: '#f9f9f7', borderRadius: 12, padding: 20, marginBottom: 24, border: '1px solid #eee' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Your BidLock™ summary</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{form.make} {form.model} {form.trim}</div>
                  <div style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>{form.config} · {form.cab} · {form.term}mo · {parseInt(form.miles).toLocaleString()} mi/yr{form.color ? ` · ${form.color}` : ''}</div>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#999' }}>Your target payment</div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: '#1D9E75' }}>${form.payment}/mo</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#999' }}>Down payment</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>${form.down}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#999' }}>Incentives selected</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>{incentiveCount}</div>
                    </div>
                  </div>
                </div>

                {/* DEPOSIT NOTE */}
                <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '14px 16px', marginBottom: 24, fontSize: 13, color: '#0F6E56', lineHeight: 1.6 }}>
                  <strong>Free to submit.</strong> No payment required to send your BidLock. We'll run a soft credit check (no impact to your score) to verify your eligibility before dealers see your offer.
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button onClick={() => setStep(2)} style={{ background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 99, padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>← Back</button>
                  <button
                    onClick={() => { if (form.name && form.email && form.phone) setSubmitted(true); }}
                    disabled={!form.name || !form.email || !form.phone}
                    style={{ background: form.name && form.email && form.phone ? '#1D9E75' : '#ccc', color: '#fff', border: 'none', borderRadius: 99, padding: '14px 36px', fontSize: 15, fontWeight: 500, cursor: form.name && form.email && form.phone ? 'pointer' : 'not-allowed' }}
                  >
                    Submit BidLock™ — free
                  </button>
                </div>

                <p style={{ fontSize: 11, color: '#aaa', textAlign: 'center', marginTop: 16 }}>
                  By submitting you agree to our terms. Soft credit check only — no impact to your score.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}