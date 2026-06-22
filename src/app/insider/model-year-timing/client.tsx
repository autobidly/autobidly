"use client";

const now = new Date();
const currentYear = now.getFullYear();
const previousYear = currentYear - 1;
const nextYear = currentYear + 1;
const monthName = now.toLocaleString('default', { month: 'long' });

export default function ModelYearTimingClient() {
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
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Model Year Timing</span>
            <span style={{ fontSize: 13, color: '#999' }}>4 min read · Updated {monthName} {currentYear}</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Should you lease a {previousYear} or {currentYear}? Here's what most buyers get wrong.
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Most buyers assume leasing an older model year always means a better deal. Sometimes that's true. Often it isn't. Here's exactly when leasing a {previousYear} model saves you money — and when the {currentYear} is actually the smarter move.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The assumption most buyers make</h2>
          <p style={{ marginBottom: 20 }}>
            When a buyer finds out a dealership still has {previousYear} models on the lot in {monthName} {currentYear}, the instinct is usually "great — I can probably get a deal on that." The logic makes sense on the surface. The car is a year old. The dealer wants it gone. Discount time.
          </p>
          <p style={{ marginBottom: 20 }}>
            But leasing doesn't work the same way as buying. And the model year math is almost exactly backwards from what most people expect.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Why manufacturer support is everything in a lease</h2>
          <p style={{ marginBottom: 20 }}>
            When you lease a vehicle, your monthly payment is determined by three things: the selling price of the vehicle, the residual value (what it's worth at lease end), and the money factor (the interest rate). Two of those three — the residual value and the money factor — are set by the manufacturer's finance arm, not the dealer.
          </p>
          <p style={{ marginBottom: 20 }}>
            Every month, GM Financial, Ford Motor Credit, Hyundai Motor Finance, and every other captive lender publishes updated lease programs. They set which vehicles get subvented (subsidized) rates and which ones don't. A subvented lease can be hundreds of dollars per month cheaper than a non-subvented one on the same vehicle.
          </p>
          <p style={{ marginBottom: 20 }}>
            Here's the critical point: <strong style={{ color: '#111' }}>manufacturers support the model year they want to sell.</strong> In {monthName} {currentYear}, that's {currentYear} models — not {previousYear}s.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The key insight</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: 0 }}>
              A manufacturer might offer a {currentYear} Silverado at a 2.4% equivalent money factor with strong residual support. That same manufacturer might offer zero lease support on remaining {previousYear} Silverados. The {previousYear} sits on the lot looking like a deal. The {currentYear} is actually the better lease.
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The {previousYear} vs {currentYear} Silverado — a real example</h2>
          <p style={{ marginBottom: 20 }}>
            This plays out on nearly every vehicle when a new model year arrives. Take the Chevrolet Silverado. As of {monthName} {currentYear}, there are still thousands of {previousYear} Silverados on dealer lots. GM is actively supporting the {currentYear} model year with incentives, subvented money factors, and conquest cash for buyers switching from other brands.
          </p>
          <p style={{ marginBottom: 20 }}>
            Meanwhile, the {currentYear} Silverado is essentially the same truck as the {previousYear} with minor updates. The powertrain options are identical. The interior is the same. A buyer who spends 20 minutes comparing the two models would be hard pressed to find a meaningful difference in the vehicle itself.
          </p>
          <p style={{ marginBottom: 20 }}>
            But the lease math is very different. The {currentYear} has manufacturer lease support. The {previousYear} largely doesn't. That can translate to a $60–120/month difference in payment for the same truck — with the newer model year being cheaper to lease.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>When leasing a {previousYear} model does make sense</h2>
          <p style={{ marginBottom: 20 }}>
            There are specific windows where a previous model year lease is genuinely the better move. Understanding those windows is what separates informed buyers from everyone else.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
            {[
              {
                title: 'August through October — model year changeover',
                body: `When new model year vehicles start arriving on lots in late summer, dealers need to move ${previousYear} inventory to make room. This is when you see genuine clearance pricing on outgoing models — sometimes $2,000–4,000 in additional dealer cash on top of whatever manufacturer support remains. This window is real and worth targeting if you want the outgoing model.`
              },
              {
                title: 'End of calendar year — December is different',
                body: `December combines three pressures: end of month, end of quarter, and end of year. For ${previousYear} vehicles that have been sitting since summer, this is typically when dealers get most aggressive. Manufacturer clearance programs often kick in. The best time to lease a ${previousYear} model was December ${previousYear} — not ${monthName} ${currentYear}.`
              },
              {
                title: 'Major redesign years',
                body: `When a vehicle is being completely redesigned for the next model year, the outgoing model often gets exceptional lease support. Manufacturers want to clear existing inventory before the new design arrives. If you love the current generation and don't want to wait for the ${nextYear} redesign, this can be an excellent time to lease the ${currentYear} model at clearance pricing.`
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.body}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>When leasing a {previousYear} model doesn't make sense</h2>
          <p style={{ marginBottom: 16 }}>Leasing a previous model year is likely not the smart move when:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {[
              `You're shopping in the middle of the year and the ${currentYear} model is already fully stocked on lots`,
              `The ${currentYear} model had significant updates or a partial redesign`,
              `The manufacturer is actively supporting the ${currentYear} model year with subvented rates`,
              `You're planning to buy out the lease — newer model year vehicles typically carry better residual values`,
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: '#f9f9f7', borderRadius: 8 }}>
                <span style={{ color: '#1D9E75', fontWeight: 600, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The model year calendar — what to expect and when</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 40 }}>
            {[
              { month: 'January – March', label: 'Current year in full swing', desc: `Manufacturers are supporting ${currentYear} models. ${previousYear} vehicles have limited or no lease support. Lease the current year.` },
              { month: 'April – July', label: 'Mid-year — current year is the deal', desc: `${currentYear} inventory is fully stocked. Manufacturer lease support is at its strongest. ${previousYear} models are rarely worth pursuing for leasing.` },
              { month: 'August – October', label: 'Changeover window', desc: `${nextYear} models begin arriving. Dealers need to move ${currentYear} inventory. Genuine clearance opportunities emerge on outgoing models.` },
              { month: 'November – December', label: 'Year-end push — best deals of the year', desc: `End of month, end of quarter, end of year all align. Both outgoing and current model years see aggressive pricing. December is historically the best month to lease.` },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 11, color: '#1D9E75', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{item.month}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* FAQ SECTION */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
            {[
              {
                q: `Is it cheaper to lease a ${previousYear} or ${currentYear} model?`,
                a: `In most cases, the ${currentYear} model is the better lease — even if the sticker price is higher. Manufacturers support the model year they want to sell with better money factors and residual values. The ${previousYear} may have a lower price tag but often has little or no manufacturer lease support, making the monthly payment higher than you'd expect.`
              },
              {
                q: `When is the best time to lease a ${previousYear} model?`,
                a: `The best windows are August through October during the model year changeover, and November through December when dealers are clearing year-end inventory. Outside of those windows, the ${currentYear} model is almost always the better lease.`
              },
              {
                q: `Should I lease a ${previousYear} or ${currentYear} Silverado right now?`,
                a: `As of ${monthName} ${currentYear}, GM is actively supporting the ${currentYear} Silverado with subvented money factors and conquest cash. The ${previousYear} has limited manufacturer lease support. In most cases the ${currentYear} is the better lease right now — and the vehicles are nearly identical.`
              },
              {
                q: `Does leasing an older model year save money?`,
                a: `Not automatically. The savings on a previous model year lease depend entirely on what the manufacturer is supporting. If the manufacturer has pulled lease support from the older model year — which typically happens by mid-year — you may actually pay more per month to lease the older vehicle than the newer one.`
              },
              {
                q: `What is a subvented lease?`,
                a: `A subvented lease is one where the manufacturer's finance arm subsidizes the money factor (interest rate) or boosts the residual value to make the monthly payment more attractive. Subvented leases are typically only available on the current model year vehicles the manufacturer is actively trying to sell.`
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{item.q}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The AutoBidly approach</h2>
          <p style={{ marginBottom: 20 }}>
            Before you decide between a {previousYear} and {currentYear} on any vehicle, check the Lease Intelligence Score for both model years. The score factors in current manufacturer support, inventory levels, and market timing — so you can see at a glance which model year is the better lease right now.
          </p>
          <p style={{ marginBottom: 32 }}>
            Then submit a BidLock™ for the vehicle and model year you decide on. Name your exact payment. Let verified dealers compete. You never have to negotiate model year timing with a salesperson — you already know the answer before you walk in.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: '#111', borderRadius: 14, padding: '32px', textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Ready to find the right vehicle at the right time?</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Check the Lease Intelligence Score for any vehicle, then submit a BidLock™ and let verified dealers compete for your business.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/lease-intelligence" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>See Lease Intelligence Scores →</a>
            <a href="/bidlock" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #333', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a BidLock™ — free</a>
          </div>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
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