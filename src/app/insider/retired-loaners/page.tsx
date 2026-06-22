"use client";

export default function RetiredLoanersPage() {
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
            <span style={{ fontSize: 13, color: '#999' }}>4 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Retired loaners — brand new vehicles with built-in savings
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Every dealer has them. Almost no buyer asks for them. Retired loaner vehicles are nearly new cars with under 3,000 miles and a manufacturer discount already built in. Here's everything you need to know.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>What is a retired loaner vehicle?</h2>
          <p style={{ marginBottom: 20 }}>
            When you bring your car in for service and it needs to stay overnight — or for a few days — the dealership gives you a loaner vehicle to drive in the meantime. These loaners are brand new vehicles pulled directly from dealer inventory. They're titled to the dealership, not to a private owner, which means they're still technically new.
          </p>
          <p style={{ marginBottom: 20 }}>
            After a loaner vehicle accumulates a certain number of miles — typically between 1,000 and 3,000, depending on the brand and dealer — it gets retired from the loaner fleet and put up for sale. At that point, the manufacturer steps in with a discount to help the dealer move it. That discount gets passed to you.
          </p>
          <p style={{ marginBottom: 20 }}>
            Same new car warranty. Same new car financing eligibility. Just a few hundred or thousand miles on the odometer — and a meaningfully lower price.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Why dealers don't advertise them</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: 0 }}>
              Retired loaners are less profitable than selling a brand new vehicle at full price. Dealers would rather sell you the new one. They'll show you a loaner if you ask — but they're rarely going to bring it up on their own. Knowing to ask is the difference between paying $489/month and $399/month for the same vehicle.
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How much can you save?</h2>
          <p style={{ marginBottom: 20 }}>
            Retired loaners typically come with $2,000–$5,000 in manufacturer allowance on top of any other incentives you qualify for. On a lease, that translates directly to a lower capitalized cost and a lower monthly payment.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
            {[
              { label: 'Typical manufacturer allowance', value: '$2,000 – $5,000', sub: 'Applied as a discount to the vehicle price' },
              { label: 'Typical monthly savings', value: '$55 – $120/mo', sub: 'Depending on vehicle price and term' },
              { label: 'Typical mileage at retirement', value: '1,000 – 3,000 mi', sub: 'Varies by brand and dealer policy' },
              { label: 'Warranty status', value: 'Full new car warranty', sub: 'Starts from date of retail sale' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 11, color: '#999', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#1D9E75', marginBottom: 4 }}>{item.value}</div>
                <div style={{ fontSize: 12, color: '#888' }}>{item.sub}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The loaner car psychology — and why it works for dealers</h2>
          <p style={{ marginBottom: 20 }}>
            There's a reason dealers use new vehicles as loaners instead of older ones. When you drop off your aging truck and drive away in a brand new Silverado for three days, something happens. The new car smell. The backup camera. The smooth ride. The heated seats. By the time you pick up your truck, the loaner has done its job.
          </p>
          <p style={{ marginBottom: 32 }}>
            But here's the part that works in your favor: that same loaner vehicle, after a few months of service, becomes available to you at a discount. The dealer already used it to plant a seed. Now you can buy the harvest at below-market pricing.
          </p>

          {/* CRITICAL SECTION — MILES */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Do the loaner miles count against your lease allowance?</h2>
          <p style={{ marginBottom: 20 }}>
            This is one of the most important questions to ask before signing — and most buyers never think to ask it. If a retired loaner has 2,500 miles on it and you're signing a 36-month, 10,000 mile per year lease (30,000 total), do those 2,500 miles count against your allowance?
          </p>
          <p style={{ marginBottom: 20 }}>
            The answer depends on the brand, the dealer, and how the lease is written. It can go either way — and the difference matters a lot.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {[
              {
                scenario: 'Miles DO count against your allowance',
                detail: "Some dealers set your lease mileage allowance starting from zero — meaning those 2,500 loaner miles are already used. On a 30,000 mile lease you effectively only have 27,500 miles left. At $0.25/mile overage that's a potential $625 exposure you didn't realize you had.",
                bad: true
              },
              {
                scenario: 'Miles do NOT count against your allowance',
                detail: 'Other dealers start your mileage clock from the day you sign — meaning the loaner miles don\'t affect your allowance at all. You still get your full 10,000 miles per year regardless of what was on the odometer when you leased it.',
                bad: false
              },
            ].map((item, i) => (
              <div key={i} style={{ background: item.bad ? '#FEF2F2' : '#E1F5EE', borderRadius: 10, padding: '18px 20px', border: `1px solid ${item.bad ? '#FECACA' : '#9FE1CB'}` }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: item.bad ? '#991B1B' : '#0F6E56', marginBottom: 6 }}>{item.bad ? '⚠️' : '✓'} {item.scenario}</div>
                <div style={{ fontSize: 14, color: item.bad ? '#7F1D1D' : '#065F46', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: 10, padding: '20px 24px', border: '1.5px solid #1D9E75', marginBottom: 40 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 8 }}>The question to ask — and the negotiation to have</div>
            <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
              Before you sign, ask directly: <strong style={{ color: '#111' }}>"Do the miles already on this vehicle count against my lease allowance?"</strong> Get the answer confirmed in your lease contract — not just verbally from a salesperson.
              <br /><br />
              If the miles do count against your allowance, this is completely reasonable to negotiate. Ask them to either adjust your mileage allowance upward by the number of miles already on the vehicle, or reduce your per-mile overage rate. Dealers want to move retired loaners — they have more flexibility here than on a standard new vehicle. This is one of the easiest negotiating points you'll ever have at a dealership.
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>What to check before you lease a retired loaner</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
            {[
              { title: 'Ask about the miles vs your allowance', body: 'As covered above — this is the most important question. Get it in writing.' },
              { title: 'Verify the mileage and condition', body: 'See the vehicle in person before committing. Check for interior scuffs, exterior dings, or unusual tire wear. Loaners are typically well maintained but confirm it yourself.' },
              { title: 'Confirm the warranty start date', body: "The factory warranty starts when the vehicle first entered service — which for a loaner is when it joined the fleet, not when you buy it. Ask exactly when the warranty clock started." },
              { title: 'Understand the manufacturer allowance', body: 'Ask specifically what the program vehicle allowance is. Make sure it\'s reflected in the selling price before you agree to anything.' },
              { title: 'Get the VIN history', body: 'Run a quick VIN check. It should show as dealer-owned with no accidents. Takes two minutes and gives you peace of mind.' },
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

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How to find retired loaners near you</h2>
          <p style={{ marginBottom: 20 }}>
            Retired loaners aren't listed separately on most dealer websites. They sit in new vehicle inventory alongside standard stock, sometimes with a note like "program vehicle" or "courtesy loaner" in the description. You have to know to look — or know to ask.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
            {[
              'Call your target dealership and ask specifically: "Do you have any retired loaner vehicles available on the Silverado?" — or whatever model you want',
              'Search the dealer\'s website inventory and filter by "program vehicle," "loaner," or "courtesy vehicle" if those filters exist',
              'Submit a BidLock™ on AutoBidly and note that you\'re open to a retired loaner — dealers with program vehicles in your market will see your bid',
              'Check AutoBidly\'s deals page — we flag program vehicles when dealers submit them as Certified Deals',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 16px', background: '#f9f9f7', borderRadius: 8 }}>
                <span style={{ color: '#1D9E75', fontWeight: 600, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Which brands typically have the best loaner programs?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
            {[
              { brand: 'GM — Chevrolet, GMC, Buick, Cadillac', detail: 'Strong loaner allowance program. Silverado, Equinox, and Traverse loaners are common and often come with $2,500–$4,000 in manufacturer allowance.' },
              { brand: 'BMW', detail: 'One of the most generous loaner programs in the luxury segment. Expect $3,000–$6,000 in allowance on retired loaners, making already-competitive BMW leases even better.' },
              { brand: 'Mercedes-Benz', detail: 'Similar to BMW. Strong loaner programs on C-Class and GLC make these worth asking about specifically.' },
              { brand: 'Honda', detail: 'Solid loaner program on CR-V and Accord. Typically $1,500–$3,000 in allowance.' },
              { brand: 'Ford', detail: 'Ford uses Explorer and F-150 as loaners frequently. Explorer loaner discounts in particular can make an already-good lease significantly better.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 4 }}>{item.brand}</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is a retired loaner considered a new or used vehicle?', a: "If the vehicle was titled to the dealership (not to a private individual), it's typically still eligible for new car financing and new car warranty. Always ask how the vehicle is titled before assuming." },
              { q: 'Do the loaner miles count against my lease mileage allowance?', a: "It depends on the dealer and how the lease is written — it can go either way. Always ask before signing and get the answer confirmed in your contract. If the miles do count, negotiate to have your allowance adjusted upward to compensate." },
              { q: 'Do retired loaners qualify for manufacturer lease programs?', a: "In most cases, yes. Retired program vehicles are eligible for the same manufacturer lease incentives as new vehicles. Some brands even offer additional allowances specifically for program vehicles on top of standard incentives." },
              { q: 'Can I BidLock a retired loaner on AutoBidly?', a: "Yes. When you submit a BidLock™, you can note that you're open to a program or loaner vehicle. Dealers with retired loaners who want to move them quickly are often the fastest to accept." },
              { q: 'How many miles is too many on a retired loaner?', a: "Most retired loaners have between 1,000 and 3,000 miles. Above 5,000 miles, negotiate more aggressively. Above 10,000 miles, you're in used car territory and should be priced accordingly." },
              { q: 'Does the warranty start when the loaner entered service or when I buy it?', a: "The factory warranty typically starts when the vehicle first entered service — when it joined the loaner fleet, not when you buy it. Ask the dealer for the in-service date so you know exactly how much warranty time remains." },
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
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Looking for a retired loaner near you?</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Submit a BidLock™ and let dealers with program vehicles in your market compete for your business. Note that you're open to a loaner and watch what comes back.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Submit a BidLock™ — free</a>
            <a href="/deals" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #333', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Browse verified deals</a>
          </div>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'model-year-timing', title: "Leasing last year's model — when it saves you money and when it doesn't", tag: 'Model Year Timing' },
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
              { slug: 'dealer-addons', title: 'The real cost of adding accessories to your lease', tag: 'Lease Math' },
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