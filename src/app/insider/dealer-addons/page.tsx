"use client";

export default function DealerAddonsPage() {
  const addons = [
    { item: 'Tonneau cover', monthly: 24, months: 36, dealerTotal: 864, buyYourself: 279, savings: 585, notes: 'Most install in under an hour with no tools. Hundreds of YouTube tutorials available.' },
    { item: 'WeatherTech floor liners', monthly: 8, months: 36, dealerTotal: 288, buyYourself: 189, savings: 99, notes: 'Order direct from WeatherTech.com with your exact year/make/model. Perfect fit guaranteed.' },
    { item: 'Spray-in bed liner', monthly: 18, months: 36, dealerTotal: 648, buyYourself: 149, savings: 499, notes: 'Any local auto shop can spray a bed liner. Call around — prices vary significantly.' },
    { item: 'Running boards', monthly: 22, months: 36, dealerTotal: 792, buyYourself: 299, savings: 493, notes: 'Bolt-on installation. Most truck owners can do this themselves in an afternoon.' },
    { item: 'Window tint', monthly: 12, months: 36, dealerTotal: 432, buyYourself: 200, savings: 232, notes: 'Local tint shops are fast, professional, and a fraction of the dealer price.' },
    { item: 'Paint protection film', monthly: 35, months: 36, dealerTotal: 1260, buyYourself: 400, savings: 860, notes: 'A local detailer or PPF shop can install quality film for significantly less than dealers charge.' },
  ];

  const totalDealerCost = addons.reduce((a, b) => a + b.dealerTotal, 0);
  const totalYourself = addons.reduce((a, b) => a + b.buyYourself, 0);
  const totalSavings = totalDealerCost - totalYourself;

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

        {/* HEADER */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lease Math</span>
            <span style={{ fontSize: 13, color: '#999' }}>3 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            The real cost of adding accessories to your lease
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Dealer-installed accessories are convenient. But when accessories are added to your lease payment, the math looks very different over 36 months. Here's what you're actually paying — and what your options are.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>How dealer accessories work on a lease</h2>
          <p style={{ marginBottom: 20 }}>
            Near the end of your lease signing, the finance manager will often offer add-on accessories — tonneau covers, floor mats, bed liners, window tint, paint protection. They're presented as a monthly add-on: "It's only $24 more a month."
          </p>
          <p style={{ marginBottom: 20 }}>
            That framing is intentional. $24 sounds insignificant when you're already agreeing to a $489 monthly payment. But $24 a month for 36 months is $864 — to use something you could own outright for $279.
          </p>
          <p style={{ marginBottom: 20 }}>
            There's nothing wrong with having the dealer handle installation — it's convenient, it's done before you pick up the vehicle, and for some buyers that convenience is worth the premium. But it's worth understanding the full 36-month cost before you say yes, so the decision is yours to make with complete information.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The AutoBidly Accessory Rule</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: '0 0 8px 0' }}>
              If you can buy the accessory for less than 18 months of the monthly add-on cost — it's almost always worth buying yourself.
            </p>
            <p style={{ fontSize: 14, color: '#1D9E75', lineHeight: 1.6, margin: 0 }}>
              18 months of $24 = $432. Tonneau cover costs $279. Buy it yourself and save $153 minimum — more if you keep the cover after the lease ends.
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The math on common lease accessories</h2>
          <p style={{ marginBottom: 20 }}>Here's a side-by-side look at what common accessories cost when added to your lease versus buying them independently.</p>

          {/* ADDON TABLE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {addons.map((addon, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', overflow: 'hidden' }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid #f5f5f5' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{addon.item}</div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 13, color: '#1D9E75', fontWeight: 600 }}>Save ${addon.savings.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                  <div style={{ padding: '14px 20px', borderRight: '1px solid #f5f5f5' }}>
                    <div style={{ fontSize: 11, color: '#999', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Added to lease</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#E24B4A' }}>${addon.dealerTotal.toLocaleString()}</div>
                    <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>${addon.monthly}/mo × 36 months</div>
                  </div>
                  <div style={{ padding: '14px 20px' }}>
                    <div style={{ fontSize: 11, color: '#999', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Buy it yourself</div>
                    <div style={{ fontSize: 20, fontWeight: 700, color: '#0F6E56' }}>${addon.buyYourself.toLocaleString()}</div>
                    <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>One time · you own it</div>
                  </div>
                </div>
                <div style={{ padding: '10px 20px', background: '#f9f9f7', fontSize: 13, color: '#666', lineHeight: 1.5 }}>
                  💡 {addon.notes}
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL SAVINGS */}
          <div style={{ background: '#111', borderRadius: 14, padding: '28px 32px', marginBottom: 40 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>If you said yes to all six</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Added to lease</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#E24B4A' }}>${totalDealerCost.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Buy yourself</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#1D9E75' }}>${totalYourself.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>You'd save</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>${totalSavings.toLocaleString()}</div>
              </div>
            </div>
            <div style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
              That's ${totalSavings.toLocaleString()} over 36 months — on items you'd hand back to the dealer at lease end anyway. Or keep yourself and transfer to your next vehicle.
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>When adding accessories to your lease does make sense</h2>
          <p style={{ marginBottom: 20 }}>There are situations where the dealer convenience is genuinely worth the premium:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {[
              "You're picking up the vehicle in January in Michigan with ice on the ground and no garage — having everything installed before delivery makes real sense",
              "You want a spray-in bed liner done by the dealer's preferred shop with a warranty tied to the vehicle",
              "You're not comfortable with DIY installation and don't want to deal with finding a local installer",
              "The dealer is willing to include accessories at no additional cost as part of closing the deal — always worth asking",
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: '#f9f9f7', borderRadius: 8 }}>
                <span style={{ color: '#1D9E75', fontWeight: 600, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The one question worth asking before you decide</h2>
          <p style={{ marginBottom: 20 }}>
            Before you say yes or no to any accessory add-on, ask yourself: <strong style={{ color: '#111' }}>am I paying for the accessory, or am I paying for the convenience of not dealing with it?</strong>
          </p>
          <p style={{ marginBottom: 20 }}>
            If it's the convenience — and that's worth it to you — that's a perfectly valid decision. If it's because you didn't realize there was another option, now you do.
          </p>
          <p style={{ marginBottom: 32 }}>
            Either way, the best position to be in is one where you've already locked your monthly payment before you walk in. When your price is already set via a BidLock™, the accessory conversation is a separate, calm decision — not part of a high-pressure signing environment.
          </p>

        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Can I negotiate accessories into my lease at no extra cost?', a: "Yes — and it's always worth asking. Dealers have flexibility, especially at month end or quarter end when they need to close deals. 'I'll sign today if you include the tonneau cover' is a reasonable ask that sometimes works." },
              { q: 'Do accessories add to the purchase price if I buy out my lease?', a: "Typically yes. Accessories that are capitalized into the lease (added to the cost) increase the residual buyout amount. This is another reason to consider buying accessories separately — it keeps your buyout price lower." },
              { q: 'What happens to dealer-installed accessories when I return the lease?', a: "In most cases, accessories that were installed by the dealer and capitalized into the lease stay with the vehicle. You paid for them over 36 months and return them with the car. Accessories you bought and installed yourself are yours to keep or remove." },
              { q: 'Is a tonneau cover hard to install yourself?', a: "Most tri-fold and roll-up tonneau covers install without any tools in under an hour. Search YouTube for your specific truck year and model — there are detailed installation videos for virtually every cover on the market." },
              { q: 'Can I install a tonneau cover on a leased truck?', a: "Yes, as long as you use a no-drill cover that attaches to the bed rails without permanent modification. Avoid any installation that drills into the truck bed, which could affect your lease return." },
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
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Lock your payment before you walk in.</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>When your monthly payment is already locked via BidLock™, the accessory conversation happens on your terms — not in the middle of a 4-hour signing session.</p>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ — free</a>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'model-year-timing', title: "Leasing last year's model — when it saves you money and when it doesn't", tag: 'Model Year Timing' },
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
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