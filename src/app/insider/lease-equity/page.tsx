"use client";
import { useState, useEffect } from "react";

const MAKES = [
  'Acura','Audi','BMW','Buick','Cadillac','Chevrolet','Chrysler','Dodge',
  'Ford','Genesis','GMC','Honda','Hyundai','Infiniti','Jeep','Kia','Land Rover',
  'Lexus','Lincoln','Mazda','Mercedes-Benz','MINI','Mitsubishi','Nissan',
  'Porsche','Ram','Rivian','Subaru','Tesla','Toyota','Volkswagen','Volvo'
];

export default function LeaseEquityPage() {
  const [models, setModels] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('');
  const [smoker, setSmoker] = useState('no');
  const [buyout, setBuyout] = useState('');
  const [taxRate, setTaxRate] = useState('6');
  const [loadingModels, setLoadingModels] = useState(false);
  const [result, setResult] = useState<null | {
    marketValue: number;
    equity: number;
    hasEquity: boolean;
    taxAmount: number;
    netEquity: number;
  }>(null);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 8 }, (_, i) => currentYear - i);

  useEffect(() => {
    if (!selectedMake) { setModels([]); setSelectedModel(''); return; }
    setLoadingModels(true);
    fetch(`/api/vehicle?type=models&make=${encodeURIComponent(selectedMake)}`)
      .then(r => r.json())
      .then(data => { setModels(data.models || []); setSelectedModel(''); setLoadingModels(false); })
      .catch(() => setLoadingModels(false));
  }, [selectedMake]);

  function calculateEquity() {
    const buyoutNum = parseInt(buyout.replace(/,/g, '').replace('$', ''));
    if (!buyoutNum || buyoutNum <= 0) return;

    let baseValue = buyoutNum * 1.08;
    if (condition === 'excellent') baseValue *= 1.06;
    if (condition === 'good') baseValue *= 1.0;
    if (condition === 'fair') baseValue *= 0.93;

    const milesNum = parseInt(mileage);
    if (milesNum < 15000) baseValue *= 1.04;
    else if (milesNum < 30000) baseValue *= 1.0;
    else if (milesNum < 50000) baseValue *= 0.97;
    else baseValue *= 0.92;

    if (smoker === 'yes') baseValue *= 0.88;

    const marketValue = Math.round(baseValue);
    const equity = marketValue - buyoutNum;
    const taxAmount = Math.round(buyoutNum * (parseFloat(taxRate) / 100));
    const netEquity = equity - taxAmount;

    setResult({ marketValue, equity, hasEquity: netEquity > 0, taxAmount, netEquity });
  }

  const selectStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #444',
    fontSize: 14,
    fontFamily: 'system-ui',
    outline: 'none',
    boxSizing: 'border-box' as const,
    background: '#1a1a1a',
    color: '#fff',
  };

  const inputStyle = { ...selectStyle };
  const canCalculate = selectedMake && selectedModel && year && mileage && condition && buyout;

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/insider" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>← The Insider</a>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
      </nav>

      <div style={{ maxWidth: 740, margin: '0 auto', padding: '48px 20px' }}>

        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lease Equity</span>
            <span style={{ fontSize: 13, color: '#999' }}>5 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Does your current lease have equity? Here's how to check before you turn it in.
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            In today's used car market, your lease buyout may be less than what the car is actually worth. That difference belongs to you — if you know to look for it before you hand over the keys.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>What is lease equity?</h2>
          <p style={{ marginBottom: 20 }}>When you sign a lease, the contract includes a buyout price — also called the residual value. This is the amount you can pay at the end of the lease to purchase the vehicle outright. It's set at the beginning of the lease and doesn't change regardless of what happens to the car's market value over the next 36 months.</p>
          <p style={{ marginBottom: 20 }}>Lease equity exists when the car's current market value is higher than your buyout price. If your buyout is $28,000 and the car is worth $34,000 on the open market, you have $6,000 in equity. That $6,000 is yours — but only if you act on it before turning the car in.</p>
          <p style={{ marginBottom: 20 }}>If you simply return the vehicle at lease end without checking, that equity goes to whoever buys the car next — often the dealership, who turns around and sells it used at a profit.</p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>A real example</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: 0 }}>On one of my truck leases, I noticed the market value had climbed well above my buyout price. I exercised the buyout, purchased the vehicle, then sold it back to a dealership the same week. I walked away with a check for nearly $4,000. The dealer would never have mentioned this — they were counting on me to simply return the keys.</p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The tax factor — what most buyers miss</h2>
          <p style={{ marginBottom: 20 }}>
            Here's something that catches a lot of buyers off guard: when you exercise your lease buyout, most states charge sales tax on the full purchase price — not just the equity. In Michigan, that's 6%. On a $28,000 buyout, you'd owe $1,680 in sales tax at the time of purchase.
          </p>
          <p style={{ marginBottom: 20 }}>
            That doesn't mean the equity isn't worth pursuing — it often still is. But it means your real calculation is: <strong style={{ color: '#111' }}>market value minus buyout minus sales tax = your actual net equity.</strong> That's the number that matters.
          </p>
          <p style={{ marginBottom: 20 }}>
            Tax rates vary by state. Michigan is 6%. Illinois is 6.25%. Ohio is 5.75%. Check your state's rate before making a decision. Our calculator below factors this in automatically.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How to find your buyout price</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {[
              { num: '1', title: 'Check your lease agreement', body: "Your original lease contract lists the residual value. It's usually on the first or second page under 'Residual Value' or 'Purchase Option Price.'" },
              { num: '2', title: 'Log into your account', body: 'GM Financial, Ford Motor Credit, Hyundai Motor Finance, and most captive lenders have online portals where you can see your current payoff amount.' },
              { num: '3', title: 'Call the finance company', body: "Call the number on your lease statement and ask for your 'lease-end purchase price.' They're required to give you this number." },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{item.num}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>What to do if you have equity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
            {[
              { title: 'Use it as a down payment on your next lease', body: 'Exercise the buyout, then use the equity as a down payment when you lease your next vehicle. This can significantly lower your monthly payment. Factor in the tax cost when deciding if this makes sense.' },
              { title: 'Sell it to a dealership', body: 'Many dealers will buy your leased vehicle directly. They pay off your buyout with the finance company and write you a check for the difference. CarMax and Carvana also buy leased vehicles this way — and neither charges you for the transaction.' },
              { title: 'Sell it privately', body: 'Selling privately typically gets you more money than a dealer will offer. The tradeoff is the time and effort involved. You still pay sales tax on the buyout either way.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CALCULATOR */}
        <div style={{ background: '#111', borderRadius: 16, padding: '32px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Lease Equity Calculator</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Do you have equity in your lease?</h2>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 16, lineHeight: 1.6 }}>Enter your vehicle details and buyout price for an estimated equity check. For an exact number, get quotes from CarMax, Carvana, or your local dealer.</p>

          {/* PRE-CALCULATOR TAX WARNING */}
          <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '14px 16px', marginBottom: 24, border: '1px solid #333' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#f59e0b', marginBottom: 4 }}>⚠️ Important before you calculate</div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>When you exercise a lease buyout, most states charge sales tax on the full purchase price. This calculator factors that in so you see your <strong style={{ color: '#ccc' }}>real net equity</strong> — not just the difference between market value and buyout. Enter your state's sales tax rate below.</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Year</label>
              <select value={year} onChange={e => setYear(e.target.value)} style={selectStyle}>
                <option value="">Select year</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Make</label>
              <select value={selectedMake} onChange={e => setSelectedMake(e.target.value)} style={selectStyle}>
                <option value="">Select make</option>
                {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Model</label>
              <select value={selectedModel} onChange={e => setSelectedModel(e.target.value)} disabled={!selectedMake} style={selectStyle}>
                <option value="">{loadingModels ? 'Loading...' : !selectedMake ? 'Select make first' : 'Select model'}</option>
                {models.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Current mileage</label>
              <select value={mileage} onChange={e => setMileage(e.target.value)} style={selectStyle}>
                <option value="">Select range</option>
                <option value="10000">Under 15,000 miles</option>
                <option value="22000">15,000 – 30,000 miles</option>
                <option value="40000">30,000 – 50,000 miles</option>
                <option value="60000">Over 50,000 miles</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Condition</label>
              <select value={condition} onChange={e => setCondition(e.target.value)} style={selectStyle}>
                <option value="">Select condition</option>
                <option value="excellent">Excellent — like new</option>
                <option value="good">Good — normal wear</option>
                <option value="fair">Fair — noticeable wear</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Smoker vehicle?</label>
              <select value={smoker} onChange={e => setSmoker(e.target.value)} style={selectStyle}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Your state sales tax rate (%)</label>
              <select value={taxRate} onChange={e => setTaxRate(e.target.value)} style={selectStyle}>
                <option value="0">0% — No sales tax</option>
                <option value="4">4%</option>
                <option value="4.5">4.5%</option>
                <option value="5">5%</option>
                <option value="5.75">5.75% — Ohio</option>
                <option value="6">6% — Michigan</option>
                <option value="6.25">6.25% — Illinois / Massachusetts / Texas</option>
                <option value="6.5">6.5%</option>
                <option value="7">7%</option>
                <option value="7.25">7.25% — California</option>
                <option value="8">8%+</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Your lease buyout price ($)</label>
            <input value={buyout} onChange={e => setBuyout(e.target.value)} placeholder="e.g. 28000" style={inputStyle} />
          </div>

          <button
            onClick={calculateEquity}
            disabled={!canCalculate}
            style={{ width: '100%', background: canCalculate ? '#1D9E75' : '#333', color: canCalculate ? '#fff' : '#666', border: 'none', borderRadius: 99, padding: '14px', fontSize: 15, fontWeight: 600, cursor: canCalculate ? 'pointer' : 'not-allowed', marginBottom: 20 }}
          >
            Check my equity →
          </button>

          {result && (
            <div style={{ background: result.hasEquity ? '#E1F5EE' : '#1a1a1a', borderRadius: 12, padding: '24px' }}>
              {/* RESULTS GRID */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>Your buyout</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: result.hasEquity ? '#111' : '#fff' }}>${parseInt(buyout).toLocaleString()}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>Est. market value</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: result.hasEquity ? '#111' : '#fff' }}>${result.marketValue.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>Sales tax ({taxRate}%)</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#DC2626' }}>-${result.taxAmount.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>Net equity</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: result.hasEquity ? '#0F6E56' : '#DC2626' }}>
                    {result.hasEquity ? '+' : '-'}${Math.abs(result.netEquity).toLocaleString()}
                  </div>
                </div>
              </div>

              {result.hasEquity ? (
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F6E56', marginBottom: 8 }}>✓ You may have equity in your lease — even after taxes</div>
                  <div style={{ fontSize: 13, color: '#0F6E56', lineHeight: 1.65, marginBottom: 16 }}>
                    Your estimated gross equity is ${result.equity.toLocaleString()} — but after {taxRate}% sales tax on your ${parseInt(buyout).toLocaleString()} buyout, your net equity is approximately <strong>${result.netEquity.toLocaleString()}</strong>. Before you turn in your vehicle, get quotes from CarMax, Carvana, or a local dealer to verify the actual market value.
                  </div>
                  <a href="/bidlock" style={{ display: 'inline-block', background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '10px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                    Submit a BidLock™ for your next vehicle →
                  </a>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#aaa', marginBottom: 8 }}>After taxes, your buyout may exceed current market value</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>
                    Even if the market value is slightly above your buyout, sales tax on the purchase can eliminate the equity. Simply return the vehicle at lease end — that's one of the advantages of leasing. Then use AutoBidly to find the best deal on your next lease.
                  </div>
                </div>
              )}
              <div style={{ fontSize: 11, color: '#888', marginTop: 12 }}>* Estimate only. Tax rates and market values vary. Get actual quotes from dealers, CarMax, or Carvana for exact numbers. Consult your state's DMV for exact tax obligations.</div>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'What is lease equity?', a: "Lease equity is the difference between your vehicle's current market value and your lease buyout price. If the car is worth more than your buyout, the difference is equity that belongs to you — minus any sales tax you pay on the buyout." },
              { q: 'Do I have to pay sales tax when I buy out my lease?', a: "In most states, yes. When you exercise your lease buyout option, the transaction is treated as a vehicle purchase and sales tax applies to the full buyout amount. Tax rates vary by state — Michigan is 6%, Ohio is 5.75%, Illinois is 6.25%, California is 7.25%." },
              { q: 'Can I sell my leased car if it has equity?', a: 'Yes. You can exercise your buyout option and then sell the vehicle — either privately or to a dealer. Many dealers, CarMax, and Carvana will purchase leased vehicles directly, paying off your finance company and writing you a check for the equity.' },
              { q: 'Where do I find my lease buyout price?', a: "Your original lease contract lists the residual value. You can also find your current payoff amount by logging into your lender's online portal or calling the number on your lease statement." },
              { q: 'What if my car is worth less than the buyout?', a: "Simply return the vehicle at lease end. One of the key advantages of leasing is that you're protected if the car's value drops below the residual — you just walk away with no obligation." },
              { q: 'Can I use lease equity as a down payment on my next vehicle?', a: "Yes — this is one of the most common ways to use lease equity. The equity reduces the capitalized cost on your new lease, lowering your monthly payment. Just factor in the sales tax you paid on the buyout when calculating your true net benefit." },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{item.q}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#111', borderRadius: 14, padding: '32px', textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Ready to lease your next vehicle?</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Submit a BidLock™ for any vehicle. Name your exact payment. Let verified dealers compete for your business.</p>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ — free</a>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'model-year-timing', title: "Leasing last year's model — when it saves you money and when it doesn't", tag: 'Model Year Timing' },
              { slug: 'dealer-addons', title: 'The real cost of adding accessories to your lease', tag: 'Lease Math' },
              { slug: 'retired-loaners', title: 'Retired loaners — brand new vehicles with built-in savings', tag: 'Insider Intel' },
            ].map((article, i) => (
              <a key={i} href={`/insider/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', border: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#1D9E75')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
                >
                  <div>
                    <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '2px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, display: 'inline-block' }}>{article.tag}</span>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111', lineHeight: 1.3 }}>{article.title}</div>
                  </div>
                  <span style={{ fontSize: 18, color: '#ccc', flexShrink: 0 }}>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}