"use client";
import { useState } from "react";

export default function ProfilePage() {
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    // Current situation
    currentVehicle: "", currentYear: "", leaseEnd: "", ownership: "lease",
    // Personal
    name: "", email: "", phone: "", zip: "",
    // Employment & status
    employer: "", fordEmployee: false, gmEmployee: false, fiatEmployee: false,
    military: false, teacher: false, firstResponder: false, nurse: false, collegeGrad: false,
    // Preferences
    dreamCar: "", realisticCar: "", exoticDream: "",
    brands: [] as string[], bodyStyles: [] as string[],
    evInterest: "open", kidsInCar: false, highMileage: false,
    // Budget
    maxPayment: "", maxDown: "", preferredTerm: "36",
  });

  const update = (k: string, v: any) => setForm(f => ({ ...f, [k]: v }));
  const toggleArr = (k: string, v: string) => {
    const arr = (form as any)[k] as string[];
    update(k, arr.includes(v) ? arr.filter((x: string) => x !== v) : [...arr, v]);
  };

  const brands = ['Ford','Chevrolet','GMC','Ram','Toyota','Honda','BMW','Mercedes-Benz','Cadillac','Buick','Jeep','Kia','Hyundai','Nissan','Lexus','Audi','Porsche'];
  const bodyStyles = ['Truck','SUV','Sedan','Coupe','Convertible','Crossover','Minivan','Sports Car'];

  const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', fontSize: 14, background: '#f9f9f7', fontFamily: 'system-ui' };
  const selectStyle = { ...inputStyle };
  const labelStyle = { fontSize: 12, color: '#666', display: 'block', marginBottom: 6 } as any;
  const chipStyle = (active: boolean) => ({ padding: '8px 16px', borderRadius: 99, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: active ? '1.5px solid #1D9E75' : '1px solid #ddd', background: active ? '#E1F5EE' : '#f9f9f7', color: active ? '#0F6E56' : '#666', transition: 'all 0.15s' });

  const steps = ['Your situation', 'Your identity', 'Your preferences', 'Your budget'];

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <div style={{ fontSize: 13, color: '#666' }}>Already have an account? <a href="#" style={{ color: '#1D9E75' }}>Sign in</a></div>
      </nav>

      {saved ? (
        <div style={{ maxWidth: 560, margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 32 }}>✓</div>
          <h1 style={{ fontSize: 28, fontWeight: 600, color: '#111', marginBottom: 12 }}>Your Lease Passport is ready!</h1>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 32 }}>
            We'll alert you when deals match your profile, when your qualifying incentives change, and when the timing is right to lease your next vehicle.
          </p>
          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 12, padding: 24, marginBottom: 24, textAlign: 'left' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>Your Lease Passport™</div>
            {form.realisticCar && <div style={{ marginBottom: 8 }}><span style={{ fontSize: 12, color: '#999' }}>Target vehicle: </span><span style={{ fontSize: 14, fontWeight: 500 }}>{form.realisticCar}</span></div>}
            {form.dreamCar && <div style={{ marginBottom: 8 }}><span style={{ fontSize: 12, color: '#999' }}>Dream car: </span><span style={{ fontSize: 14, fontWeight: 500 }}>{form.dreamCar}</span></div>}
            {form.maxPayment && <div style={{ marginBottom: 8 }}><span style={{ fontSize: 12, color: '#999' }}>Max payment: </span><span style={{ fontSize: 14, fontWeight: 500 }}>${form.maxPayment}/mo</span></div>}
            {form.leaseEnd && <div style={{ marginBottom: 8 }}><span style={{ fontSize: 12, color: '#999' }}>Current lease ends: </span><span style={{ fontSize: 14, fontWeight: 500 }}>{form.leaseEnd}</span></div>}
            <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {form.military && <span style={{ ...chipStyle(true), fontSize: 11, padding: '4px 10px' }}>Military</span>}
              {form.teacher && <span style={{ ...chipStyle(true), fontSize: 11, padding: '4px 10px' }}>Teacher</span>}
              {form.firstResponder && <span style={{ ...chipStyle(true), fontSize: 11, padding: '4px 10px' }}>First Responder</span>}
              {form.fordEmployee && <span style={{ ...chipStyle(true), fontSize: 11, padding: '4px 10px' }}>Ford Employee</span>}
              {form.gmEmployee && <span style={{ ...chipStyle(true), fontSize: 11, padding: '4px 10px' }}>GM Employee</span>}
              {form.collegeGrad && <span style={{ ...chipStyle(true), fontSize: 11, padding: '4px 10px' }}>College Grad</span>}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href="/deals" style={{ background: '#1D9E75', color: '#fff', padding: '14px 28px', borderRadius: 99, textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>Browse deals</a>
            <a href="/bidlock" style={{ background: '#111', color: '#fff', padding: '14px 28px', borderRadius: 99, textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>Submit a BidLock™</a>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lease Passport™</div>
            <h1 style={{ fontSize: 32, fontWeight: 600, color: '#111', letterSpacing: '-0.5px', marginBottom: 8 }}>Your personal lease intelligence profile</h1>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>Tell us about yourself once. We'll alert you when deals match, when your incentives change, and when the timing is right — forever.</p>
          </div>

          {/* STEP INDICATOR */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 32, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: step > i+1 ? '#1D9E75' : step === i+1 ? '#111' : '#eee', color: step >= i+1 ? '#fff' : '#999', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 500 }}>{step > i+1 ? '✓' : i+1}</div>
                  <span style={{ fontSize: 12, color: step === i+1 ? '#111' : '#999', fontWeight: step === i+1 ? 500 : 400 }}>{s}</span>
                </div>
                {i < steps.length-1 && <div style={{ width: 24, height: 1, background: step > i+1 ? '#1D9E75' : '#eee', margin: '0 4px' }}></div>}
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #eee', padding: 32 }}>

            {/* STEP 1 — CURRENT SITUATION */}
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 6 }}>What's your current situation?</h2>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>This helps us time your alerts perfectly and identify loyalty incentives you may qualify for.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Do you currently have a vehicle?</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {['lease','finance','own','none'].map(o => (
                        <button key={o} onClick={() => update('ownership', o)} style={chipStyle(form.ownership === o)}>
                          {o === 'lease' ? 'Leasing' : o === 'finance' ? 'Financing' : o === 'own' ? 'Own outright' : 'No vehicle'}
                        </button>
                      ))}
                    </div>
                  </div>
                  {form.ownership !== 'none' && <>
                    <div>
                      <label style={labelStyle}>Current vehicle</label>
                      <input value={form.currentVehicle} onChange={e => update('currentVehicle', e.target.value)} placeholder="e.g. 2022 Ford F-150" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Year</label>
                      <input value={form.currentYear} onChange={e => update('currentYear', e.target.value)} placeholder="2022" style={inputStyle} />
                    </div>
                    {form.ownership === 'lease' && (
                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={labelStyle}>When does your lease end?</label>
                        <input type="month" value={form.leaseEnd} onChange={e => update('leaseEnd', e.target.value)} style={inputStyle} />
                        <p style={{ fontSize: 11, color: '#1D9E75', marginTop: 6 }}>We'll start alerting you 90 days before your lease ends with the best timing and deals.</p>
                      </div>
                    )}
                  </>}
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Bryan Vigna" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(248) 555-0100" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>ZIP code</label>
                    <input value={form.zip} onChange={e => update('zip', e.target.value)} placeholder="48167" maxLength={5} style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => setStep(2)} disabled={!form.name || !form.email} style={{ background: form.name && form.email ? '#111' : '#ccc', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: form.name && form.email ? 'pointer' : 'not-allowed' }}>Next →</button>
                </div>
              </div>
            )}

            {/* STEP 2 — IDENTITY & INCENTIVES */}
            {step === 2 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 6 }}>Who are you?</h2>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Select everything that applies. These unlock manufacturer incentives most buyers don't know they qualify for — sometimes worth $3,000+.</p>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>Manufacturer employee programs</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {[
                      { key: 'fordEmployee', label: 'Ford / Lincoln employee' },
                      { key: 'gmEmployee', label: 'GM / Chevy / Cadillac employee' },
                      { key: 'fiatEmployee', label: 'Stellantis / Jeep / Ram / Dodge employee' },
                      { key: 'toyotaEmployee', label: 'Toyota / Lexus employee' },
                      { key: 'hondaEmployee', label: 'Honda / Acura employee' },
                      { key: 'nissanEmployee', label: 'Nissan / Infiniti employee' },
                      { key: 'hyundaiEmployee', label: 'Hyundai / Kia / Genesis employee' },
                      { key: 'bmwEmployee', label: 'BMW / MINI employee' },
                      { key: 'mercedesEmployee', label: 'Mercedes-Benz employee' },
                      { key: 'subieEmployee', label: 'Subaru employee' },
                      { key: 'vwEmployee', label: 'VW / Audi / Porsche employee' },
                      { key: 'mazdaEmployee', label: 'Mazda employee' },
                    ].map(({ key, label }) => (
                      <button key={key} onClick={() => update(key, !(form as any)[key])} style={chipStyle((form as any)[key])}>{(form as any)[key] ? '✓ ' : ''}{label}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>Military & service</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {[
                      { key: 'military', label: 'Active / veteran military' },
                      { key: 'firstResponder', label: 'First responder' },
                      { key: 'nurse', label: 'Nurse / healthcare' },
                      { key: 'teacher', label: 'Teacher / educator' },
                    ].map(({ key, label }) => (
                      <button key={key} onClick={() => update(key, !(form as any)[key])} style={chipStyle((form as any)[key])}>{(form as any)[key] ? '✓ ' : ''}{label}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>Other qualifying programs</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {[
                      { key: 'collegeGrad', label: 'Recent college grad' },
                    ].map(({ key, label }) => (
                      <button key={key} onClick={() => update(key, !(form as any)[key])} style={chipStyle((form as any)[key])}>{(form as any)[key] ? '✓ ' : ''}{label}</button>
                    ))}
                    <button onClick={() => update('costco', !(form as any)['costco'])} style={chipStyle((form as any)['costco'])}>{(form as any)['costco'] ? '✓ ' : ''}Costco member</button>
                  </div>
                </div>

                <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '14px 16px', marginBottom: 24, fontSize: 13, color: '#0F6E56', lineHeight: 1.6 }}>
                  <strong>Why this matters:</strong> Stacking multiple incentives can save you $3,000-8,000 on a lease. A GM employee who is also active military and a recent college grad qualifies for incentives most buyers never see. We match your profile to current manufacturer programs automatically.
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => setStep(1)} style={{ background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 99, padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>← Back</button>
                  <button onClick={() => setStep(3)} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Next →</button>
                </div>
              </div>
            )}

            {/* STEP 3 — PREFERENCES */}
            {step === 3 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 6 }}>What do you want to drive?</h2>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>Be honest — your dream car and your realistic car can both be on our radar. We'll alert you when either becomes achievable.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div>
                    <label style={labelStyle}>Your next realistic vehicle</label>
                    <input value={form.realisticCar} onChange={e => update('realisticCar', e.target.value)} placeholder="e.g. 2025 Ford F-150 XLT" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Your dream car</label>
                    <input value={form.dreamCar} onChange={e => update('dreamCar', e.target.value)} placeholder="e.g. BMW M5" style={inputStyle} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Your exotic dream car (we'll tell you when it's actually within reach)</label>
                    <input value={form.exoticDream} onChange={e => update('exoticDream', e.target.value)} placeholder="e.g. Porsche Panamera" style={inputStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>Brands you're open to</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {brands.map(b => (
                      <button key={b} onClick={() => toggleArr('brands', b)} style={chipStyle(form.brands.includes(b))}>{form.brands.includes(b) ? '✓ ' : ''}{b}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>Body styles you like</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {bodyStyles.map(b => (
                      <button key={b} onClick={() => toggleArr('bodyStyles', b)} style={chipStyle(form.bodyStyles.includes(b))}>{form.bodyStyles.includes(b) ? '✓ ' : ''}{b}</button>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div>
                    <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>EV interest</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {[{ v: 'yes', l: 'Yes — EVs only' }, { v: 'open', l: 'Open to EV' }, { v: 'no', l: 'Gas only' }].map(({ v, l }) => (
                        <button key={v} onClick={() => update('evInterest', v)} style={chipStyle(form.evInterest === v)}>{l}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={{ ...labelStyle, fontSize: 13, color: '#111', fontWeight: 500, marginBottom: 12 }}>Driving habits</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      <button onClick={() => update('kidsInCar', !form.kidsInCar)} style={chipStyle(form.kidsInCar)}>{form.kidsInCar ? '✓ ' : ''}Kids in car</button>
                      <button onClick={() => update('highMileage', !form.highMileage)} style={chipStyle(form.highMileage)}>{form.highMileage ? '✓ ' : ''}High mileage driver</button>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => setStep(2)} style={{ background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 99, padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>← Back</button>
                  <button onClick={() => setStep(4)} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 32px', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Next →</button>
                </div>
              </div>
            )}

            {/* STEP 4 — BUDGET */}
            {step === 4 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginBottom: 6 }}>What's your budget?</h2>
                <p style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>We use this to match you with deals and to power your BidLock submissions automatically.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div>
                    <label style={labelStyle}>Max monthly payment</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 14 }}>$</span>
                      <input type="number" value={form.maxPayment} onChange={e => update('maxPayment', e.target.value)} placeholder="599" style={{ ...inputStyle, paddingLeft: 24 }} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Max down payment</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666', fontSize: 14 }}>$</span>
                      <input type="number" value={form.maxDown} onChange={e => update('maxDown', e.target.value)} placeholder="0" style={{ ...inputStyle, paddingLeft: 24 }} />
                    </div>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Preferred lease term</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {['24','36','48'].map(t => (
                        <button key={t} onClick={() => update('preferredTerm', t)} style={chipStyle(form.preferredTerm === t)}>{t} months</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ background: '#f9f9f7', borderRadius: 12, padding: 20, marginBottom: 24, border: '1px solid #eee' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>Your Lease Passport™ preview</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{form.name || 'Your name'}</div>
                  <div style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>{form.zip} · {form.email}</div>
                  {form.realisticCar && <div style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: '#999' }}>Target: </span>{form.realisticCar}</div>}
                  {form.dreamCar && <div style={{ fontSize: 13, marginBottom: 4 }}><span style={{ color: '#999' }}>Dream: </span>{form.dreamCar}</div>}
                  {form.maxPayment && <div style={{ fontSize: 13, marginBottom: 12 }}><span style={{ color: '#999' }}>Budget: </span>${form.maxPayment}/mo · ${form.maxDown || 0} down · {form.preferredTerm}mo</div>}
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {form.military && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>Military</span>}
                    {form.teacher && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>Teacher</span>}
                    {form.firstResponder && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>First Responder</span>}
                    {form.fordEmployee && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>Ford Employee</span>}
                    {form.gmEmployee && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>GM Employee</span>}
                    {form.collegeGrad && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>College Grad</span>}
                    {(form as any)['costco'] && <span style={{ background: '#E1F5EE', color: '#0F6E56', fontSize: 11, padding: '3px 10px', borderRadius: 99, border: '1px solid #9FE1CB' }}>Costco</span>}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={() => setStep(3)} style={{ background: 'transparent', color: '#666', border: '1px solid #ddd', borderRadius: 99, padding: '12px 24px', fontSize: 14, cursor: 'pointer' }}>← Back</button>
                  <button onClick={() => setSaved(true)} style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: '14px 36px', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Save my Lease Passport™</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}