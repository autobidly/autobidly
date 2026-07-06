"use client";
import { useState } from "react";

export default function NoMoneyDownPage() {
  const [capCost, setCapCost] = useState('45000');
  const [monthlyPayment, setMonthlyPayment] = useState('489');
  const [downPayment, setDownPayment] = useState('3000');
  const [term, setTerm] = useState('36');

  const cap = parseInt(capCost) || 0;
  const monthly = parseInt(monthlyPayment) || 0;
  const down = parseInt(downPayment) || 0;
  const months = parseInt(term) || 36;

  const totalWithDown = down + (monthly * months);
  const reducedMonthly = monthly - Math.round(down / months);
  const totalWithoutDown = reducedMonthly * months;
  const savings = totalWithDown - totalWithoutDown;

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #444',
    fontSize: 14,
    fontFamily: 'system-ui',
    outline: 'none',
    background: '#1a1a1a',
    color: '#fff',
    boxSizing: 'border-box' as const,
  };

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
            Why you should almost never put money down on a lease
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Putting money down on a lease feels like the responsible move. It lowers your monthly payment and feels like you're reducing your debt. In reality, it's almost always the wrong financial decision — and in the worst case, it's money you could lose entirely.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>How a lease down payment actually works</h2>
          <p style={{ marginBottom: 20 }}>
            When you put money down on a lease, you're making what's called a capitalized cost reduction — you're paying cash upfront to lower the amount being financed over the lease term. The result is a lower monthly payment.
          </p>
          <p style={{ marginBottom: 20 }}>
            Here's the math: if you put $3,000 down on a 36-month lease, you're reducing your monthly payment by approximately $83/month ($3,000 ÷ 36). You paid $3,000 upfront to save $83 a month.
          </p>
          <p style={{ marginBottom: 20 }}>
            That sounds reasonable until you think about what you actually got for that $3,000.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The salesperson's pitch</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: '0 0 8px 0', fontStyle: 'italic' }}>
              "If you put $3,000 down, I can get you to $489 a month."
            </p>
            <p style={{ fontSize: 14, color: '#1D9E75', lineHeight: 1.65, margin: 0 }}>
              What he's not saying: if the incentives were right, you could be at $489 a month with $0 down. The down payment is often solving a problem created by bad timing — not a structural requirement of the deal.
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The total cost doesn't change — it just moves</h2>
          <p style={{ marginBottom: 20 }}>
            This is the most important thing to understand about lease down payments. When you put money down, you're not reducing the total cost of the lease. You're prepaying part of it.
          </p>
          <p style={{ marginBottom: 20 }}>
            Whether you pay $3,000 down and $489/month, or $0 down and $572/month, the total amount you've paid over 36 months is almost identical. The difference is when the money leaves your pocket.
          </p>
          <p style={{ marginBottom: 20 }}>
            And that timing difference matters — because of the single biggest risk of putting money down on a lease.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The total loss risk — the reason most financial advisors say never put money down</h2>
          <p style={{ marginBottom: 20 }}>
            If your leased vehicle is stolen or totaled in the first month of your lease, your insurance company pays the current market value of the vehicle to the leasing company. If that amount covers the remaining lease balance, you walk away clean.
          </p>
          <p style={{ marginBottom: 20 }}>
            But the $3,000 you put down at signing? That money was applied to reduce the cap cost at the beginning of the lease. It was consumed on day one. The insurance company doesn't give it back. The leasing company doesn't give it back. It's gone.
          </p>
          <p style={{ marginBottom: 20 }}>
            If you had put $0 down and the same accident happened, your insurance would cover the situation and you'd walk away having lost nothing out of pocket beyond your deductible and regular payments made so far.
          </p>

          <div style={{ background: '#FEF2F2', borderRadius: 12, padding: '24px 28px', marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#991B1B', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>⚠️ The worst case scenario</div>
            <p style={{ fontSize: 15, color: '#7F1D1D', lineHeight: 1.7, margin: '0 0 8px 0' }}>
              You sign a lease on month 1. You put $3,000 down. On month 2, the vehicle is totaled. Insurance pays out. The leasing company is made whole.
            </p>
            <p style={{ fontSize: 15, color: '#7F1D1D', lineHeight: 1.7, margin: 0 }}>
              Your $3,000 is gone. You have no vehicle. You still potentially owe a gap payment. You've paid two monthly payments. That's a $3,978 loss in 60 days on a vehicle you no longer have.
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>What a down payment really signals</h2>
          <p style={{ marginBottom: 20 }}>
            When a dealer tells you that you need to put money down to hit your payment target, it usually means one of three things:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {[
              { title: 'The timing is wrong', body: 'You\'re shopping in a month with weak manufacturer incentives. The down payment is compensating for incentive money that isn\'t there. Come back next month — or at the end of the quarter — and you may hit the same payment with $0 down.' },
              { title: 'The vehicle is wrong', body: 'Some vehicles simply don\'t lease well at certain price points. The residual is low, the money factor is high, and no amount of negotiation gets you to your number. A different vehicle might hit your payment naturally without any cash down.' },
              { title: 'The price is wrong', body: 'The selling price of the vehicle is too high. The dealer hasn\'t discounted off MSRP, or the cap cost includes add-ons you didn\'t ask for. Negotiate the selling price down first — then see what the payment looks like before you consider putting any money down.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.body}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>When putting money down does make sense</h2>
          <p style={{ marginBottom: 20 }}>
            There are situations where a down payment is the right call — but they're more specific than most buyers realize.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {[
              'Your credit score is low enough that the lender requires a down payment to approve the lease — in this case it\'s not optional',
              'You have cash-equivalent manufacturer incentives (like loyalty cash or conquest cash) that are applied as a cap cost reduction — this isn\'t really a "down payment," it\'s free money from the manufacturer reducing your cost',
              'You\'re applying positive equity from a trade-in or previous lease buyout — again, this is using existing value, not writing a new check',
              'The monthly payment without any down is genuinely unaffordable and a modest cap cost reduction makes it workable — this is a budget decision, not a financial optimization',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '12px 16px', background: '#f9f9f7', borderRadius: 8 }}>
                <span style={{ color: '#1D9E75', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The patience play — and why it works</h2>
          <p style={{ marginBottom: 20 }}>
            The best lease deals at $0 down don't happen because a buyer negotiated exceptionally hard in the finance office. They happen because the buyer showed up in the right month, on the right vehicle, with the right incentive stack.
          </p>
          <p style={{ marginBottom: 20 }}>
            A buyer who came in during a poor incentive month and was quoted $572/month with $3,000 down might come back 30 days later — when the quarter ends and the manufacturer adds $1,500 in additional dealer incentives — and get the same vehicle at $489/month with $0 down.
          </p>
          <p style={{ marginBottom: 32 }}>
            Same vehicle. Same buyer. $83 less per month and $3,000 more in their pocket. The only difference was timing.
          </p>

          <p style={{ marginBottom: 20, fontSize: 15, fontStyle: 'italic', color: '#555', lineHeight: 1.75, borderLeft: '3px solid #1D9E75', paddingLeft: 20 }}>
            AutoBidly's BidLock™ is built around this principle. You submit your target payment at $0 down. If the market can support it right now, a dealer accepts. If it can't, the BidLock expires and you try again next month when conditions may be better. You never put money down until you have a deal that doesn't require it.
          </p>

        </div>

        {/* CALCULATOR */}
        <div style={{ background: '#111', borderRadius: 16, padding: '32px', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Down Payment Calculator</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>What does putting money down actually cost you?</h2>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 24, lineHeight: 1.6 }}>
            Enter your lease details to see the real comparison between putting money down vs keeping it in your pocket.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Monthly payment (with down)</label>
              <input value={monthlyPayment} onChange={e => setMonthlyPayment(e.target.value)} placeholder="489" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Down payment amount ($)</label>
              <input value={downPayment} onChange={e => setDownPayment(e.target.value)} placeholder="3000" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 4 }}>Lease term (months)</label>
              <select value={term} onChange={e => setTerm(e.target.value)} style={inputStyle}>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
                <option value="39">39 months</option>
                <option value="48">48 months</option>
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <div style={{ background: '#1a1a1a', borderRadius: 8, padding: '10px 14px', width: '100%', border: '1px solid #333' }}>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 2 }}>Payment without down</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1D9E75' }}>${reducedMonthly < 0 ? '—' : monthly + Math.round(down / months)}/mo</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
            <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '16px', border: '1px solid #DC262640' }}>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>With ${down.toLocaleString()} down</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#DC2626' }}>${totalWithDown.toLocaleString()}</div>
              <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>total out of pocket</div>
            </div>
            <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '16px', border: '1px solid #1D9E7540' }}>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>With $0 down</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#1D9E75' }}>${(totalWithDown).toLocaleString()}</div>
              <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>same total cost</div>
            </div>
            <div style={{ background: '#0F6E5620', borderRadius: 10, padding: '16px', border: '1px solid #1D9E75' }}>
              <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>You keep in pocket</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#1D9E75' }}>${down.toLocaleString()}</div>
              <div style={{ fontSize: 11, color: '#1D9E75', marginTop: 2 }}>protected from total loss</div>
            </div>
          </div>

          <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '16px 18px', fontSize: 13, color: '#888', lineHeight: 1.7 }}>
            💡 Putting <strong style={{ color: '#fff' }}>${down.toLocaleString()}</strong> down saves you <strong style={{ color: '#fff' }}>${Math.round(down / months)}/month</strong> but the total cost is nearly identical. Keep the cash — if the vehicle is totaled, you lose your down payment and your insurance doesn't get it back.
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Does putting money down on a lease save me money?', a: 'No — it moves money, it doesn\'t save it. Your total out-of-pocket cost over the lease term is essentially the same whether you put money down or not. The down payment reduces your monthly payment but by exactly the amount you prepaid, spread over the lease term.' },
              { q: 'What happens to my down payment if the car is totaled?', a: 'You lose it. If your leased vehicle is stolen or totaled, your insurance pays the current value to the leasing company. The down payment you made at signing was applied upfront and is not returned to you. This is the primary reason financial advisors recommend against putting money down on a lease.' },
              { q: 'What is gap insurance and do I need it on a lease?', a: 'Gap insurance covers the difference between what your regular insurance pays and what you still owe on the lease if your vehicle is totaled. Most lease contracts include gap coverage automatically — check your lease agreement. If yours does, that\'s one less thing to worry about, but it still doesn\'t protect your down payment.' },
              { q: 'Why does the dealer keep asking me to put money down?', a: 'A down payment reduces the dealer\'s risk and closes deals faster. It also compensates for months where manufacturer incentives are weak — instead of telling you to come back next month, they ask you to bridge the gap with cash. A down payment need during poor incentive months is often a timing signal, not a structural requirement.' },
              { q: 'Is it ever smart to put money down on a lease?', a: 'In a few specific situations: if your credit requires it for approval, if you\'re applying manufacturer incentive cash (like loyalty or conquest) as a cap cost reduction, or if you\'re rolling positive equity from a previous vehicle. Writing a new check out of pocket is almost never the right answer.' },
              { q: 'AutoBidly shows $0 down on all BidLocks — why?', a: 'Because $0 down is almost always the right structure for a lease. We default to $0 down so buyers submit bids that protect them from the total loss risk and accurately reflect what a well-timed, well-incentivized deal should look like. If a dealer can\'t hit your payment at $0 down, the timing or vehicle may not be right yet.' },
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
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Submit your bid at $0 down.</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>BidLock™ defaults to $0 down because that's almost always the right structure. Name your monthly payment. Let dealers compete. Don't put money down until you have a deal that doesn't require it.</p>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ — free</a>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'money-factor', title: 'Money factor explained — the lease interest rate most buyers never see', tag: 'Lease Math' },
              { slug: 'employee-pricing-detroit', title: 'Employee pricing in Metro Detroit — what you have, what you might not know you have, and how to use it', tag: 'Insider Intel' },
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
              { slug: 'why-autobidly-exists', title: 'Why AutoBidly exists — the founding story', tag: 'Our Story' },
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