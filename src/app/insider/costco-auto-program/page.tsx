"use client";

export default function CostcoAutoProgramPage() {
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
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Insider Intel</span>
            <span style={{ fontSize: 13, color: '#999' }}>5 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Your Costco membership and car leasing — what it actually does and when it matters
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Most Costco members know the membership pays for itself in gas and groceries. Fewer know it can also save $1,000-2,000 on a car lease — but only on certain brands, only in certain months, and only if you know how to stack it correctly.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>What the Costco Auto Program actually is</h2>
          <p style={{ marginBottom: 20 }}>
            The Costco Auto Program is a member benefit that connects Costco members with participating dealers at pre-negotiated prices. There are two distinct components that often get confused:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {[
              {
                title: 'Pre-negotiated dealer pricing',
                detail: 'Costco has agreements with participating dealers to offer members a no-haggle price below MSRP. This applies to most major brands and is available year-round. It\'s not a huge discount — but it removes the negotiation and gives you a verified starting point.',
                available: 'Available for most brands year-round',
                color: '#1D9E75',
              },
              {
                title: 'Manufacturer cash incentives (stackable)',
                detail: 'This is the valuable one. Certain manufacturers partner with Costco to offer additional cash incentives — on top of the dealer price — exclusively for Costco members. These are 100% stackable with standard public incentives, dealer discounts, and sometimes employee pricing. When active, they can be worth $1,000-2,000 or more.',
                available: 'Varies by brand and month — GM is most consistent',
                color: '#0F6E56',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65, marginBottom: 10 }}>{item.detail}</div>
                <div style={{ fontSize: 12, color: item.color, fontWeight: 500 }}>✓ {item.available}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How Costco cash breaks down by manufacturer</h2>
          <p style={{ marginBottom: 20 }}>
            Not all brands participate equally. Here's what you actually get with a Costco membership at each major manufacturer:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {[
              {
                brand: 'GM — Chevrolet, Buick, GMC, Cadillac',
                status: 'Most active',
                statusColor: '#0F6E56',
                statusBg: '#E1F5EE',
                detail: 'GM is the most consistent and generous Costco partner. Typical incentives range from $1,000 to $2,000 in stackable cash on select trucks, SUVs, and EVs. These rotate by model and month but GM nearly always has something active. For a GM household in Metro Detroit with GM employee pricing, stacking Costco cash on top is one of the strongest combined deals available anywhere.',
              },
              {
                brand: 'BMW',
                status: 'Regular partner',
                statusColor: '#0F6E56',
                statusBg: '#E1F5EE',
                detail: 'BMW participates in the Costco program regularly, typically offering $500-1,000 in additional incentives on select models. Combined with BMW\'s Corporate Sales Program, this can be a meaningful stack for luxury buyers.',
              },
              {
                brand: 'Audi',
                status: 'Active seasonally',
                statusColor: '#1D9E75',
                statusBg: '#E1F5EE',
                detail: 'Audi participates in Costco promotions seasonally, often coinciding with model year changeovers. When active, incentives are typically $500-1,500. Worth checking before you sign any Audi lease.',
              },
              {
                brand: 'Stellantis — Jeep, Ram, Chrysler, Dodge',
                status: 'Rotating',
                statusColor: '#B45309',
                statusBg: '#FEF3C7',
                detail: 'Stellantis rotates through the Costco program, with different brands active at different times. Ram and Jeep have both had active Costco promotions. Currently offering $1,000 on select Chrysler Pacifica and Voyager models. Check the Costco Auto Program page for current offers.',
              },
              {
                brand: 'Ford & Lincoln',
                status: 'Rarely participates',
                statusColor: '#DC2626',
                statusBg: '#FEF2F2',
                detail: 'Ford rarely participates in direct Costco cash programs. They prefer to push their own private direct-mail offers and X-Plan pricing instead. Your Costco membership still gets you the pre-negotiated dealer price, but don\'t expect stackable manufacturer cash on top.',
              },
              {
                brand: 'Toyota & Honda',
                status: 'Pre-negotiated price only',
                statusColor: '#DC2626',
                statusBg: '#FEF2F2',
                detail: 'Toyota almost never offers Costco-specific cash incentives due to consistently high demand. Honda has offered promotions in the past but doesn\'t have a national manufacturer-backed program running currently. Both brands still offer the pre-negotiated dealer price through the program.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{item.brand}</div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: item.statusColor, background: item.statusBg, padding: '3px 10px', borderRadius: 99, flexShrink: 0 }}>{item.status}</span>
                </div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The stacking play — Costco + GM Family First</h2>
          <p style={{ marginBottom: 20 }}>
            In Metro Detroit, the most powerful incentive stack available to most buyers combines two things that most people in this market already have: GM Family First employee pricing and a Costco membership.
          </p>

          <div style={{ background: '#111', borderRadius: 14, padding: '28px', marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The GM + Costco stack — a real example</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {[
                { label: 'GM Family First employee pricing', value: 'Below invoice pricing' },
                { label: 'GM loyalty bonus (returning GM lessee)', value: '+$1,000' },
                { label: 'Costco member incentive (when active)', value: '+$1,500' },
                { label: 'End of quarter timing bonus', value: 'Elevated residuals & MF' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: 8 }}>
                  <span style={{ fontSize: 13, color: '#ccc' }}>{item.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75' }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>
              This stack — which is available to a large percentage of Metro Detroit buyers — can put $4,000-6,000+ in combined incentives to work on a single GM lease. This is why GM vehicles consistently dominate our Lease Intelligence rankings in this market, and why a Silverado or Equinox at $0 down is often achievable at a payment that would require $3,000-5,000 down in other markets.
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Important rules about the Costco Auto Program</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {[
              { title: 'You must be a member before the promotional period begins', body: 'Costco explicitly prevents people from joining just to get the incentive. If a promotion is running and you want to use it, you need to already be a member. If you\'re not a member yet, sign up now — at $65/year the membership pays for itself many times over on a single car lease.' },
              { title: 'The incentive and the dealer are linked', body: 'Costco pre-negotiates with specific participating dealers. To get the Costco incentive, you typically need to use a Costco-approved dealer. You can find participating dealers at costcoauto.com before you shop.' },
              { title: 'Current offers rotate monthly', body: 'The Costco Auto Program page at costcoauto.com lists current manufacturer incentives. Check it before you sign any lease — even if you didn\'t get Costco cash last time, there may be something active this month.' },
              { title: 'The 15% service discount is always available', body: 'Even when a manufacturer doesn\'t have active Costco cash, your membership gets you 15% off parts, service, and accessories (up to $500 per visit) at any participating dealership service center. Over the life of a 3-year lease this adds up.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E1F5EE', color: '#0F6E56', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How AutoBidly factors in your Costco membership</h2>
          <p style={{ marginBottom: 20 }}>
            When you personalize your Lease Intelligence scores with Custom Lease Intelligence™, checking "Costco member" adjusts your scores based on current program activity. GM vehicles get the largest boost because Costco cash is consistently available and stackable on GM. BMW and Audi get a moderate boost. Ford, Toyota, and Honda get minimal adjustment because manufacturer-backed Costco cash rarely applies to those brands.
          </p>
          <p style={{ marginBottom: 32 }}>
            The result is a personalized ranking that reflects what your Costco membership is actually worth on each vehicle — not a flat adjustment that treats all brands the same.
          </p>

        </div>

        {/* CTA */}
        <div style={{ background: '#111', borderRadius: 14, padding: '32px', textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>See how your Costco membership affects your scores</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Check "Costco member" in Custom Lease Intelligence™ and see which vehicles get a boost — and how much. Then submit a BidLock™ at your target payment.</p>
          <a href="/lease-intelligence" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Personalize my scores →</a>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Does the Costco Auto Program work for leases?', a: 'Yes. The pre-negotiated dealer price applies to both purchases and leases. The manufacturer cash incentives also typically apply to leases, though you should confirm with the dealer that the Costco incentive is combinable with current lease programs.' },
              { q: 'Does Costco cash stack with GM employee pricing?', a: 'Yes — this is one of the strongest stacks available. GM Family First employee pricing combined with Costco member cash is fully stackable and is one of the reasons GM vehicles consistently score so well in our Lease Intelligence rankings for Metro Detroit buyers.' },
              { q: 'How do I find out what Costco incentives are active right now?', a: 'Visit costcoauto.com and check the current special offers page. It lists every manufacturer with active incentives and the specific models included. This changes monthly so check it each time you\'re shopping.' },
              { q: 'Do I have to buy from a specific dealer to get the Costco incentive?', a: 'Yes — the manufacturer cash incentive is tied to Costco-participating dealers. The Costco Auto Program finder at costcoauto.com will show you participating dealers in your area.' },
              { q: 'What if my brand doesn\'t have active Costco cash right now?', a: 'You still get the pre-negotiated dealer price, which removes the haggling and gives you a verified below-MSRP starting point. And 15% off service and parts at participating dealers is always available regardless of whether manufacturer cash is active.' },
              { q: 'Can I join Costco just to get the car incentive?', a: 'You can join Costco at any time, but you must be a member before a promotional period begins to qualify for that promotion. If there\'s an active offer and you\'re not a member yet, you\'ll need to wait for the next cycle. At $65/year, a Costco membership typically pays for itself on a single car lease when GM cash is active.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{item.q}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'employee-pricing-detroit', title: 'Employee pricing in Metro Detroit — what you have, what you might not know you have, and how to use it', tag: 'Insider Intel' },
              { slug: 'no-money-down', title: 'Why you should almost never put money down on a lease', tag: 'Lease Math' },
              { slug: 'money-factor', title: 'Money factor explained — the lease interest rate most buyers never see', tag: 'Lease Math' },
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