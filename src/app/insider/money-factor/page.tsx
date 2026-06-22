"use client";
import { useState } from "react";

export default function MoneyFactorPage() {
  const [moneyFactor, setMoneyFactor] = useState('');
  const [apr, setApr] = useState<number | null>(null);

  function calculateAPR() {
    const mf = parseFloat(moneyFactor);
    if (!mf || mf <= 0) return;
    setApr(Math.round(mf * 2400 * 100) / 100);
  }

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
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lease Math</span>
            <span style={{ fontSize: 13, color: '#999' }}>5 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Money factor explained — the lease interest rate most buyers never see
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Every lease has an interest rate. But unlike a car loan, that rate is never displayed as a percentage — it's hidden inside a tiny decimal called the money factor. Here's what it is, how it works, and how to know if your dealer is marking it up.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>What is the money factor?</h2>
          <p style={{ marginBottom: 20 }}>
            When you take out a car loan, the interest rate is displayed clearly as an annual percentage rate — 6.9% APR, for example. You know what it is. You can compare it. You can shop for a better one.
          </p>
          <p style={{ marginBottom: 20 }}>
            Leases work differently. Instead of an APR, leases use something called a money factor — a tiny decimal that represents the same thing, just in a format most people don't recognize. A money factor of 0.00125, for example, looks like nothing. But multiplied by 2,400 it converts to an APR of 3.0%.
          </p>
          <p style={{ marginBottom: 20 }}>
            The money factor affects your monthly payment just like an interest rate affects a loan payment. A higher money factor means a higher monthly payment, all else being equal. And because most buyers don't know to ask about it — or don't know how to interpret it — dealers have room to mark it up without the buyer noticing.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The conversion formula</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: 12, alignItems: 'center', textAlign: 'center' }}>
              <div style={{ background: '#fff', borderRadius: 10, padding: '14px', border: '1px solid #9FE1CB' }}>
                <div style={{ fontSize: 11, color: '#0F6E56', marginBottom: 4 }}>Money Factor</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#0F6E56' }}>0.00125</div>
              </div>
              <div style={{ fontSize: 20, color: '#0F6E56', fontWeight: 700 }}>×</div>
              <div style={{ background: '#fff', borderRadius: 10, padding: '14px', border: '1px solid #9FE1CB' }}>
                <div style={{ fontSize: 11, color: '#0F6E56', marginBottom: 4 }}>Multiplier</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#0F6E56' }}>2,400</div>
              </div>
              <div style={{ fontSize: 20, color: '#0F6E56', fontWeight: 700 }}>=</div>
              <div style={{ background: '#0F6E56', borderRadius: 10, padding: '14px' }}>
                <div style={{ fontSize: 11, color: '#9FE1CB', marginBottom: 4 }}>APR equivalent</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>3.0%</div>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How money factor affects your monthly payment</h2>
          <p style={{ marginBottom: 20 }}>
            On a lease, your monthly payment has two main components: the depreciation charge and the finance charge. The depreciation charge is based on how much value the car loses during your lease term. The finance charge is based on the money factor — it's essentially interest on the value of the car you're using.
          </p>
          <p style={{ marginBottom: 20 }}>
            The finance charge is calculated by adding the vehicle's capitalized cost (the negotiated price) to the residual value, then multiplying by the money factor. On a $45,000 vehicle with a $27,000 residual and a money factor of 0.00125, the monthly finance charge is:
          </p>

          <div style={{ background: '#111', borderRadius: 12, padding: '24px 28px', marginBottom: 28, fontFamily: 'monospace' }}>
            <div style={{ fontSize: 13, color: '#999', marginBottom: 12 }}>Finance charge calculation:</div>
            <div style={{ fontSize: 14, color: '#ccc', lineHeight: 2 }}>
              ($45,000 + $27,000) × 0.00125<br />
              = $72,000 × 0.00125<br />
              = <span style={{ color: '#1D9E75', fontWeight: 700 }}>$90/month in finance charges</span>
            </div>
            <div style={{ fontSize: 13, color: '#666', marginTop: 12 }}>
              If the dealer marks the money factor up to 0.00200, that same calculation becomes $144/month — an extra $54/month or $1,944 over 36 months.
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The buy rate vs the sell rate</h2>
          <p style={{ marginBottom: 20 }}>
            Every manufacturer's finance arm — GM Financial, Ford Motor Credit, Hyundai Motor Finance, BMW Financial Services — publishes a base money factor each month for each vehicle. This is called the buy rate. It's the rate the manufacturer is offering directly.
          </p>
          <p style={{ marginBottom: 20 }}>
            Dealers are allowed to mark this rate up — in most states — and keep the difference as profit. The marked-up rate is called the sell rate. The buyer pays the sell rate. The dealer earns the spread between buy and sell.
          </p>
          <p style={{ marginBottom: 20 }}>
            This is completely legal. But it's also invisible to the buyer unless they know to ask — or know where to look for the published buy rate.
          </p>

          <div style={{ background: '#FEF2F2', borderRadius: 12, padding: '24px 28px', marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#991B1B', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>A real example of markup</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Published buy rate', mf: '0.00089', apr: '2.1%', monthly: '$64/mo in finance charges', color: '#0F6E56' },
                { label: 'Marked-up sell rate', mf: '0.00189', apr: '4.5%', monthly: '$136/mo in finance charges', color: '#DC2626' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px', border: `1px solid ${i === 0 ? '#9FE1CB' : '#FECACA'}` }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: item.color, marginBottom: 8 }}>{item.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 2 }}>{item.mf}</div>
                  <div style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>{item.apr} APR equivalent</div>
                  <div style={{ fontSize: 13, color: item.color, fontWeight: 500 }}>{item.monthly}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 13, color: '#7F1D1D', marginTop: 16, lineHeight: 1.6 }}>
              The difference: $72/month × 36 months = <strong>$2,592 in additional finance charges</strong> that went to the dealer — without the buyer knowing the buy rate had been marked up.
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How to find the published money factor</h2>
          <p style={{ marginBottom: 20 }}>
            The manufacturer doesn't publish money factors on their consumer websites — they go through dealer networks. But two resources track and publish current money factors every month:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {[
              { source: 'Edmunds.com', detail: 'Edmunds publishes monthly lease deals and incentives including money factors and residuals for most vehicles. Go to any vehicle\'s page, click "True Market Value," and look for the lease section. The money factor shown is the published buy rate.' },
              { source: 'LeasHackr.com', detail: 'LeasHackr is a community of informed lease buyers that compiles manufacturer money factors and residuals every month. Their Money Factor database is one of the most complete publicly available resources for current rates.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{item.source}</div>
                  <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How to use this at the dealership</h2>
          <p style={{ marginBottom: 20 }}>
            Before you go in, look up the current published money factor for the vehicle you want. Write it down. When you're in the finance office, ask the dealer directly:
          </p>
          <div style={{ background: '#f9f9f7', borderRadius: 10, padding: '20px 24px', border: '1px solid #ddd', marginBottom: 20, fontStyle: 'italic', fontSize: 16, color: '#333', lineHeight: 1.7 }}>
            "What money factor are you using on this lease?"
          </div>
          <p style={{ marginBottom: 20 }}>
            If they give you a number higher than the published buy rate, you know the rate has been marked up. At that point you can ask them to use the buy rate, or at minimum you understand exactly what you're paying for.
          </p>
          <p style={{ marginBottom: 20 }}>
            Some dealers will tell you the money factor upfront without being asked. These are usually the dealers worth doing business with. Others will resist disclosing it or quote it in a way that's hard to verify. That tells you something too.
          </p>
          <p style={{ marginBottom: 20 }}>
            If a dealer is using a subvented money factor — a specially reduced rate offered by the manufacturer as an incentive — they are typically not allowed to mark it up. Subvented rates are often the best lease rates available and are worth asking about specifically.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>When a higher money factor might be acceptable</h2>
          <p style={{ marginBottom: 32 }}>
            Not every marked-up money factor means you got a bad deal. If the dealer has discounted the vehicle price significantly, reduced the cap cost, or included accessories at no charge, the overall payment might still be excellent even with a slightly higher money factor. What matters is the total monthly payment and what you're getting for it — not any single component in isolation. The money factor is one piece of the puzzle, not the whole picture.
          </p>
        </div>

        {/* CALCULATOR */}
        <div style={{ background: '#111', borderRadius: 16, padding: '32px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Money Factor Calculator</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Convert your money factor to APR</h2>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 20, lineHeight: 1.6 }}>Enter the money factor your dealer quoted and see what interest rate it represents.</p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Money factor (e.g. 0.00125)</label>
              <input
                value={moneyFactor}
                onChange={e => { setMoneyFactor(e.target.value); setApr(null); }}
                placeholder="0.00125"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #444', fontSize: 14, fontFamily: 'system-ui', outline: 'none', background: '#1a1a1a', color: '#fff', boxSizing: 'border-box' as const }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                onClick={calculateAPR}
                disabled={!moneyFactor}
                style={{ background: moneyFactor ? '#1D9E75' : '#333', color: moneyFactor ? '#fff' : '#666', border: 'none', borderRadius: 99, padding: '10px 24px', fontSize: 14, fontWeight: 600, cursor: moneyFactor ? 'pointer' : 'not-allowed' }}
              >
                Convert →
              </button>
            </div>
          </div>

          {apr !== null && (
            <div style={{ background: '#1a1a1a', borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Money factor</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>{moneyFactor}</div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>APR equivalent</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: apr <= 3 ? '#1D9E75' : apr <= 6 ? '#B45309' : '#DC2626' }}>{apr}%</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#666', marginTop: 12, lineHeight: 1.6 }}>
                {apr <= 2 ? '✓ Excellent rate — likely a subvented manufacturer rate.' :
                 apr <= 4 ? '✓ Good rate — competitive for the current market.' :
                 apr <= 6 ? '⚠ Fair rate — compare to the published buy rate for this vehicle.' :
                 '⚠ High rate — ask your dealer about the published buy rate and whether it has been marked up.'}
              </div>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'What is a money factor?', a: 'A money factor is the interest rate on a lease, expressed as a small decimal rather than a percentage. To convert to an approximate APR, multiply the money factor by 2,400.' },
              { q: 'Do dealers have to disclose the money factor?', a: 'In most states, dealers are not legally required to disclose the money factor. However, you can always ask, and a reputable dealer will tell you. If a dealer refuses to share it, that is a signal worth paying attention to.' },
              { q: 'Can dealers mark up the money factor?', a: 'Yes, in most states dealers are permitted to mark up the money factor above the manufacturer\'s published buy rate and keep the difference as profit. The exception is subvented rates — specially reduced rates offered as manufacturer incentives — which typically cannot be marked up.' },
              { q: 'What is a subvented money factor?', a: 'A subvented money factor is a below-market rate that the manufacturer offers as an incentive to stimulate leasing on specific vehicles. These are often the best rates available and are worth asking about specifically. They cannot be combined with certain other incentives.' },
              { q: 'Where can I find the current published money factor?', a: 'Edmunds.com and LeasHackr.com both publish current money factors for most vehicles each month. Look up the buy rate before you go to the dealership so you have a benchmark to compare against.' },
              { q: 'How much can a marked-up money factor cost me?', a: 'Significantly. A money factor marked up by 0.001 (from 0.00089 to 0.00189) on a $45,000 vehicle adds approximately $72/month in finance charges — or $2,592 over a 36-month lease — that goes to the dealer rather than reducing your payment.' },
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
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Skip the money factor game entirely.</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>When you submit a BidLock™, you name the monthly payment you want. The dealer who accepts it is locked in at that number — regardless of how they get there internally. You don't have to know the money factor if the payment is already agreed on.</p>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ — free</a>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'lease-protection', title: 'Lease protection packages — is it worth it?', tag: 'Finance Office' },
              { slug: 'dealer-addons', title: 'The real cost of adding accessories to your lease', tag: 'Lease Math' },
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
              { slug: 'why-autobidly-exists', title: 'Why AutoBidly exists', tag: 'Our Story' },
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