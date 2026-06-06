export default function HowItWorksPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 40px', borderBottom: '1px solid #e5e5e5', background: '#fff' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px', textDecoration: 'none', color: '#111' }}>
          Auto<span style={{ color: '#1D9E75' }}>Bidly</span>
        </a>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <a href="/how-it-works" style={{ fontSize: 14, color: '#111', textDecoration: 'none', fontWeight: 500 }}>How it works</a>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/dealer" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>For dealers</a>
          <a href="/profile" style={{ fontSize: 14, color: '#1D9E75', textDecoration: 'none', fontWeight: 500 }}>My Lease Passport</a>
          <a href="/bidlock" style={{ background: '#111', color: '#fff', borderRadius: 99, padding: '9px 22px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Get started</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '72px 40px 64px', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>How it works</div>
          <h1 style={{ fontSize: 44, fontWeight: 600, color: '#111', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
            The lease process is broken.<br /><span style={{ color: '#1D9E75' }}>We fixed it.</span>
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
            Same car. Same incentives. Five dealers. Five completely different prices. AutoBidly ends that — forever.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: '64px 40px', background: '#f9f9f7' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', background: '#fdecea', color: '#c0392b', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 99, marginBottom: 16 }}>The problem</span>
              <h2 style={{ fontSize: 28, fontWeight: 600, color: '#111', lineHeight: 1.2, marginBottom: 16 }}>Dealers decide how much they can get away with.</h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 12 }}>Every dealer has access to the same manufacturer incentives. But they each decide for themselves how much profit to keep — and how much to pass on to you.</p>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8 }}>The result? Two people buying the same car on the same day can pay hundreds of dollars per month apart. The only difference is who negotiated better.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { dealer: 'Dealer A · Northville, MI', price: '$619/mo + $15,000 down', good: false },
                { dealer: 'Dealer B · Novi, MI', price: '$578/mo + $3,000 down', good: false },
                { dealer: 'Dealer C · Novi, MI', price: '$541/mo + $1,000 down', good: false },
                { dealer: 'Dealer D · 20 min away', price: '$389/mo + $0 down', good: true },
              ].map((d, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', border: d.good ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                  <div style={{ fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>{d.dealer}</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: d.good ? '#1D9E75' : '#E24B4A' }}>{d.price}</div>
                  <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>Same car. Same incentives available.</div>
                </div>
              ))}
              <div style={{ fontSize: 12, color: '#999', textAlign: 'center', fontStyle: 'italic' }}>AutoBidly finds your Dealer D every time.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — BUYERS */}
      <section style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 99, marginBottom: 16 }}>For buyers</span>
            <h2 style={{ fontSize: 32, fontWeight: 600, color: '#111', letterSpacing: '-0.5px' }}>From couch to keys in 4 steps.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: '#eee', borderRadius: 12, overflow: 'hidden', marginBottom: 48 }}>
            {[
              { num: '01', title: 'Build your Lease Passport', body: 'Tell us who you are — your employer, military status, profession, and brand preferences. We find every discount you qualify for automatically.' },
              { num: '02', title: 'Browse or BidLock', body: 'See verified real prices near you — or name your exact monthly payment and let dealers compete for your business.' },
              { num: '03', title: 'Dealers accept', body: 'Your pre-qualified BidLock hits every dealer dashboard. The first to accept is legally bound to your price. No changes at the door.' },
              { num: '04', title: 'Walk in and sign', body: 'Price locked. You\'re already verified. Show up within 72 hours, sign the paperwork, drive home.' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '28px 22px' }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#1D9E75', marginBottom: 16, letterSpacing: '0.05em' }}>{s.num} —</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>

          {/* BIDLOCK EXPLAINER */}
          <div style={{ background: '#f9f9f7', borderRadius: 16, padding: '36px 40px', border: '1px solid #eee' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-block', background: '#111', color: '#fff', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>BidLock™</div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: '#111', marginBottom: 12 }}>What makes a BidLock binding?</h3>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: 16 }}>When a dealer accepts your BidLock, it's not a quote — it's a commitment. Here's what locks it in:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { icon: '✓', text: 'Your eligibility is verified before the bid goes live' },
                    { icon: '✓', text: 'A soft credit check confirms your credit tier (no score impact)' },
                    { icon: '✓', text: 'The deal is tied to a specific VIN on the dealer\'s lot' },
                    { icon: '✓', text: 'Dealer acceptance is timestamped and legally binding' },
                    { icon: '✓', text: 'You have 72 hours to visit — price cannot change' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: '#1D9E75', fontWeight: 700, flexShrink: 0 }}>{item.icon}</span>
                      <span style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1.5px solid #1D9E75' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Example BidLock™</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 2 }}>2025 Ford F-150 XLT 4x4</div>
                <div style={{ fontSize: 13, color: '#666', marginBottom: 16 }}>Crew Cab · 36mo · 12,000 mi/yr</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#999' }}>Locked payment</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#1D9E75' }}>$489<span style={{ fontSize: 14, fontWeight: 400 }}>/mo</span></div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: '#999' }}>Down payment</div>
                    <div style={{ fontSize: 22, fontWeight: 600, color: '#111' }}>$0</div>
                  </div>
                </div>
                <div style={{ background: '#E1F5EE', borderRadius: 8, padding: '10px 14px', fontSize: 12, color: '#0F6E56', fontWeight: 500 }}>
                  ✓ Accepted by Suburban Ford · Sterling Heights · 14 min ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR DEALERS */}
      <section style={{ padding: '72px 40px', background: '#f9f9f7' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 99, marginBottom: 16 }}>For dealers</span>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: '#111', lineHeight: 1.2, marginBottom: 16 }}>Every lead is verified before you pay a penny.</h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 12 }}>You see the vehicle, the payment target, the credit tier, and the verified incentives — all before you decide to unlock the buyer's contact info.</p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 24 }}>No more chasing ghosts. Every buyer on AutoBidly has been credit-verified, eligibility-confirmed, and is ready to sign within 72 hours.</p>
            <a href="/dealer" style={{ display: 'inline-block', background: '#111', color: '#fff', borderRadius: 99, padding: '12px 28px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>See the dealer dashboard →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Free to join', body: 'No monthly fee to be on the platform. You only pay when you accept a deal.' },
              { title: 'Deal Intelligence Score', body: 'Every incoming offer is ranked Gold, Silver, or Bronze based on your holding cost, days on lot, and estimated gross profit.' },
              { title: 'Verified buyers only', body: 'Credit tier confirmed. Incentives verified. Every buyer has passed our eligibility check before you see them.' },
              { title: 'Pay only when you win', body: 'Accept a deal, pay the fee. Pass on a deal, pay nothing. Your risk is zero until you say yes.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 99, marginBottom: 16 }}>FAQ</span>
            <h2 style={{ fontSize: 32, fontWeight: 600, color: '#111', letterSpacing: '-0.5px' }}>Quick answers.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: '#eee', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { q: 'Is it really free to submit a BidLock?', a: 'Yes. Buyers never pay anything on AutoBidly. Dealers pay a fee only when they accept your offer.' },
              { q: 'Will this hurt my credit score?', a: 'No. We run a soft credit check only, which has zero impact on your score. It\'s just used to verify your credit tier for dealers.' },
              { q: 'What if no dealer accepts my bid?', a: 'Your BidLock expires after 72 hours at no cost to you. You can resubmit at a different payment target or browse verified deals instead.' },
              { q: 'Can the dealer change the price when I walk in?', a: 'No. A BidLock acceptance is binding. The price, vehicle, and terms are locked at acceptance. If a dealer tries to change the price, report it immediately and we will investigate and remove them from the platform.' },
              { q: 'How do I know the incentives shown are real?', a: 'We verify manufacturer incentives monthly and cross-reference against dealer submissions. Every incentive shown on AutoBidly is confirmed active for the current month.' },
              { q: 'How is AutoBidly different from TrueCar or CarGurus?', a: 'Those platforms show you prices and hope you call a dealer. AutoBidly locks in your price before you ever walk in. The dealer comes to you — not the other way around.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', padding: '22px 28px', borderBottom: i < 5 ? '1px solid #eee' : 'none' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{item.q}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: '#04342C', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, fontWeight: 600, color: '#fff', letterSpacing: '-0.7px', marginBottom: 14, lineHeight: 1.2 }}>
          Ready to stop negotiating?
        </h2>
        <p style={{ fontSize: 16, color: '#9FE1CB', marginBottom: 36 }}>Create your free Lease Passport and let dealers come to you.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/profile" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '15px 36px', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Create my Lease Passport</a>
          <a href="/deals" style={{ background: 'transparent', color: '#9FE1CB', borderRadius: 99, padding: '15px 36px', fontSize: 15, fontWeight: 500, textDecoration: 'none', border: '1.5px solid #1D9E75' }}>Browse deals first</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '22px 40px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 16, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <p style={{ fontSize: 12, color: '#999' }}>© 2025 AutoBidly. All rights reserved.</p>
      </footer>

    </main>
  );
}