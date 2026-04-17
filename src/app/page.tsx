export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 40px', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px' }}>
          Auto<span style={{ color: '#1D9E75' }}>Bidly</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: '#666', cursor: 'pointer' }}>How it works</span>
          <span style={{ fontSize: 14, color: '#666', cursor: 'pointer' }}>Browse deals</span>
          <span style={{ fontSize: 14, color: '#666', cursor: 'pointer' }}>For dealers</span>
          <button style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 99, padding: '9px 22px', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Get started</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 40px 64px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
              {[
                { value: '$184', label: 'avg monthly savings' },
                { value: '4,200+', label: 'bids accepted' },
                { value: '47', label: 'dealer partners' },
              ].map((stat, i) => (
                <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#f9f9f7', border: '1px solid #e5e5e5', borderRadius: 99, padding: '6px 14px' }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1D9E75' }}>{stat.value}</span>
                  <span style={{ fontSize: 12, color: '#888' }}>{stat.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #ddd', borderRadius: 99, padding: '6px 16px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              <span style={{ fontSize: 13, color: '#555' }}>The lease marketplace dealers didn&apos;t want you to know about</span>
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-1px', marginBottom: 24, color: '#111' }}>
              You set the price.<br />Dealers <span style={{ color: '#1D9E75' }}>compete.</span>
            </h1>
            <p style={{ fontSize: 18, color: '#555', lineHeight: 1.7, maxWidth: 520, marginBottom: 16 }}>
              Browse real lease deals near you based on every discount you actually qualify for — or name your exact payment and let dealers come to you.
            </p>
            <p style={{ fontSize: 14, color: '#999', marginBottom: 40, fontStyle: 'italic' }}>
              Pre-qualified. Binding offers. No negotiating. No &quot;let me talk to my manager.&quot;
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>See my best deals</button>
              <button style={{ background: 'transparent', color: '#111', border: '1.5px solid #ccc', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Submit a bid</button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 280, background: '#111', borderRadius: 40, padding: '12px', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
              <div style={{ background: '#111', borderRadius: 30, overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8, paddingBottom: 4 }}>
                  <div style={{ width: 80, height: 20, background: '#000', borderRadius: 99 }}></div>
                </div>
                <div style={{ background: '#f9f9f7', minHeight: 520, borderRadius: 24, overflow: 'hidden' }}>
                  <div style={{ background: '#fff', padding: '16px 20px', borderBottom: '1px solid #eee' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
                  </div>
                  <div style={{ padding: 16 }}>
                    <div style={{ background: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, border: '1px solid #eee' }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: '#1D9E75', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your BidLock™</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 2 }}>2025 F-150 XLT 4x4</div>
                      <div style={{ fontSize: 11, color: '#999', marginBottom: 8 }}>Crew Cab · Cloth · 36mo · 12k/yr</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: 10, color: '#999' }}>Monthly payment</div>
                          <div style={{ fontSize: 20, fontWeight: 700, color: '#1D9E75' }}>$495<span style={{ fontSize: 12, fontWeight: 400 }}>/mo</span></div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 10, color: '#999' }}>Down payment</div>
                          <div style={{ fontSize: 16, fontWeight: 600, color: '#111' }}>$0</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '10px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1D9E75', animation: 'pulse 1.5s infinite' }}></div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#0F6E56' }}>Bid sent to 8 dealers</div>
                        <div style={{ fontSize: 10, color: '#1D9E75' }}>Expires in 47:32:18</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>Dealer responses</div>
                    {[
                      { name: 'Suburban Ford', location: 'Sterling Heights', status: 'reviewing', time: '2m ago' },
                      { name: 'LaFontaine Buick', location: 'Highland', status: 'accepted', time: 'Just now' },
                      { name: 'Fox Ford', location: 'Ann Arbor', status: 'reviewing', time: '5m ago' },
                    ].map((dealer, i) => (
                      <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '10px 12px', marginBottom: 8, border: dealer.status === 'accepted' ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 600, color: '#111' }}>{dealer.name}</div>
                            <div style={{ fontSize: 10, color: '#999' }}>{dealer.location}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: 10, fontWeight: 600, color: dealer.status === 'accepted' ? '#1D9E75' : '#f59e0b', background: dealer.status === 'accepted' ? '#E1F5EE' : '#FEF3C7', padding: '3px 8px', borderRadius: 99 }}>
                              {dealer.status === 'accepted' ? '✓ Accepted' : 'Reviewing'}
                            </div>
                            <div style={{ fontSize: 9, color: '#bbb', marginTop: 2 }}>{dealer.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button style={{ width: '100%', background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: '12px', fontSize: 12, fontWeight: 600, cursor: 'pointer', marginTop: 4 }}>
                      View accepted deal →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: '#085041', padding: '13px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: 56, animation: 'scroll 22s linear infinite' }}>
          {[
            '2025 F-150 XLT 4x4 — $0 down, $489/mo accepted · Detroit, MI',
            '2025 RAV4 Hybrid XSE — $0 down, $312/mo accepted · Chicago, IL',
            '2025 Silverado 1500 LT — $0 down, $419/mo accepted · Dallas, TX',
            '2025 Enclave Essence — $0 down, $539/mo accepted · Columbus, OH',
            '2025 Model 3 RWD — $0 down, $379/mo accepted · Austin, TX',
            '2025 F-150 XLT 4x4 — $0 down, $489/mo accepted · Detroit, MI',
            '2025 RAV4 Hybrid XSE — $0 down, $312/mo accepted · Chicago, IL',
            '2025 Silverado 1500 LT — $0 down, $419/mo accepted · Dallas, TX',
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 500, color: '#9FE1CB', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#1D9E75', display: 'inline-block' }}></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* DIRTY SECRET */}
      <section style={{ padding: '72px 40px', background: '#f9f9f7' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 99, marginBottom: 16 }}>The dirty secret</span>
            <h2 style={{ fontSize: 30, fontWeight: 600, color: '#111', lineHeight: 1.2, letterSpacing: '-0.5px', marginBottom: 16 }}>
              Same car. Same sticker.<br /><span style={{ color: '#1D9E75' }}>Wildly different prices.</span>
            </h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 12 }}>Five dealers. Same 2025 Sierra 1500 Elevation. Same GM incentives every one of them had access to. Same customer with GM employee pricing and Costco membership.</p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 12 }}>Five completely different monthly payments — because every dealer decides for themselves how much they think they can get away with.</p>
            <p style={{ fontSize: 15, color: '#111', fontWeight: 500 }}>AutoBidly fixes this. We show you what you should actually be paying.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { dealer: 'Dealer A · Northville, MI', price: '$619/mo + $15,000 down', good: false },
              { dealer: 'Dealer B · Novi, MI', price: '$578/mo + $3,000 down', good: false },
              { dealer: 'Dealer C · Novi, MI', price: '$541/mo + $1,000 down', good: false },
              { dealer: 'Dealer D · 20 min away', price: '$389/mo + $0 down', good: true },
            ].map((d, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 20, border: d.good ? '1.5px solid #1D9E75' : '1px solid #eee' }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#999', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>{d.dealer}</div>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.5px', color: d.good ? '#1D9E75' : '#E24B4A' }}>{d.price}</div>
                <div style={{ fontSize: 12, color: '#999', marginTop: 4 }}>Same car. Same incentives available.</div>
              </div>
            ))}
            <div style={{ fontSize: 12, color: '#999', textAlign: 'center', fontStyle: 'italic' }}>AutoBidly finds your Dealer D every time.</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '72px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 99, marginBottom: 16 }}>How it works</span>
          <h2 style={{ fontSize: 30, fontWeight: 600, color: '#111', letterSpacing: '-0.5px', marginBottom: 8 }}>From browser to keys in 4 steps.</h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 40 }}>No phone calls. No haggling. No &quot;let me check with my manager.&quot;</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, background: '#eee', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { num: '01', title: 'Select your eligibility', body: 'Employee pricing, conquest, returning lessee, military, Costco. Every discount you qualify for, applied automatically.' },
              { num: '02', title: 'Browse or bid', body: 'See the lowest real lease prices near you, or build your exact vehicle and name the payment you want.' },
              { num: '03', title: 'Dealers accept', body: 'Your pre-qualified offer hits every dealer dashboard. The first to accept wins your business — binding.' },
              { num: '04', title: 'Walk in & sign', body: "Price is locked. You're already qualified. Show up within 72 hours, sign the paperwork, drive away." },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '28px 22px' }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#1D9E75', marginBottom: 20, letterSpacing: '0.05em' }}>{s.num} —</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: '#04342C', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, fontWeight: 600, color: '#fff', letterSpacing: '-0.7px', marginBottom: 14, lineHeight: 1.2 }}>
          Stop negotiating.<br /><span style={{ color: '#5DCAA5' }}>Start driving.</span>
        </h2>
        <p style={{ fontSize: 16, color: '#9FE1CB', marginBottom: 36 }}>It&apos;s free to browse deals and submit bids. No commitment until you say yes.</p>
        <button style={{ background: '#1D9E75', color: '#fff', border: 'none', padding: '15px 36px', borderRadius: 99, fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Find my best deal now</button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '22px 40px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
        <p style={{ fontSize: 12, color: '#999' }}>© 2025 AutoBidly. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </main>
  );
}