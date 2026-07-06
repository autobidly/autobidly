"use client";

const FORD_PROMO_END = new Date('2026-07-07'); // Update this date when Ford runs the promotion again
const fordPromoActive = new Date() < FORD_PROMO_END;

export default function FordEmployeePricingForAllPage() {
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

        {/* ALERT BANNER — only shows when promotion is active */}
        {fordPromoActive && (
          <div style={{ background: '#FEF3C7', borderRadius: 12, padding: '16px 20px', marginBottom: 32, border: '1px solid #FDE68A', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 20, flexShrink: 0 }}>⚠️</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#B45309', marginBottom: 4 }}>Ford Employee Pricing for All is running right now</div>
              <div style={{ fontSize: 13, color: '#B45309', lineHeight: 1.6 }}>
                If you're shopping for a Ford today, read this entire article before you sign. The promotion sounds like the deal of the year. In Metro Detroit, it often isn't. Here's exactly why — and what to do instead.
              </div>
            </div>
          </div>
        )}

        {/* NOT ACTIVE BANNER — shows when promotion is not running */}
        {!fordPromoActive && (
          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '16px 20px', marginBottom: 32, border: '1px solid #9FE1CB', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 20, flexShrink: 0 }}>💡</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0F6E56', marginBottom: 4 }}>Ford Employee Pricing for All is not currently running</div>
              <div style={{ fontSize: 13, color: '#0F6E56', lineHeight: 1.6 }}>
                Ford has run this promotion twice — April 2025 and May 2026. If you're planning to wait for the next event, read this first. When it runs again, this page will tell you — and explain exactly what to do.
              </div>
            </div>
          </div>
        )}

        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Insider Intel</span>
            <span style={{ fontSize: 13, color: '#999' }}>6 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Why Ford Employee Pricing for All is actually a bad deal in Metro Detroit — and what to do instead
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            The commercials make it sound like the deal of the year. For buyers in most of the country, it might be. For buyers in Metro Detroit — where almost everyone already has access to at least one tier of Ford employee pricing — it's often the worst month to buy a Ford.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>What Ford Employee Pricing for All actually is</h2>
          <p style={{ marginBottom: 20 }}>
            Ford Employee Pricing for All is a promotional event where Ford opens up their employee pricing program — normally reserved for employees, retirees, and their families — to any buyer, nationwide. First launched on April 3, 2025 under the banner "From America, For America" as a response to auto import tariff uncertainty, it was brought back again on May 1, 2026, this time tied to America's upcoming 250th anniversary celebration.
          </p>
          <p style={{ marginBottom: 20 }}>
            The premise is genuinely compelling. You pay what Ford employees pay. No negotiation. No wondering if you got a fair deal. Just the employee price, extended to everyone.
          </p>
          <p style={{ marginBottom: 20 }}>
            For a buyer in Phoenix or Nashville who has never had access to any Ford employee pricing tier, Ford Employee Pricing for All is a real and meaningful discount. They're getting a price they normally couldn't access. The promotion does exactly what it says.
          </p>
          <p style={{ marginBottom: 20 }}>
            But in Metro Detroit, the math works very differently.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The Metro Detroit problem</h2>
          <p style={{ marginBottom: 20 }}>
            In Metro Detroit, Ford X-Plan pricing is practically the baseline. X-Plan is the Friends and Neighbors tier of Ford's employee pricing program — any Ford employee or retiree can sponsor up to 4 people per year, and the sponsorship takes minutes to generate online. In a market where tens of thousands of people work for Ford or have a family member who retired from Ford, almost every buyer either has X-Plan access already or knows someone who could get them a PIN in an afternoon.
          </p>
          <p style={{ marginBottom: 20 }}>
            Here's the part that matters: in a normal month, X-Plan pricing stacks. A buyer with X-Plan can combine that discount with current national incentives — conquest cash, loyalty bonuses, seasonal rebates, regional offers. In a strong month, that stack can add up to $3,000-5,000 in combined incentives on top of the employee pricing baseline.
          </p>
          <p style={{ marginBottom: 20 }}>
            When Ford runs Employee Pricing for All nationwide, they pull those stackable incentives. Ford Employee Pricing for All becomes the only program running. It doesn't stack with conquest cash. It doesn't stack with loyalty bonuses. It doesn't stack with seasonal rebates. It's one program, standing alone, replacing everything else.
          </p>
          <p style={{ marginBottom: 20 }}>
            What replaces those stacked incentives is a single program that Metro Detroit buyers were already getting — or could have gotten with a phone call to a Ford-employee neighbor — often at a better combined number in any other month.
          </p>

          <div style={{ background: '#111', borderRadius: 14, padding: '28px', marginBottom: 32, marginTop: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The math — a real example</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '18px' }}>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Normal month — X-Plan stacked</div>
                <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.8 }}>
                  X-Plan pricing<br />
                  + $1,500 conquest cash<br />
                  + $1,000 loyalty bonus<br />
                  + $500 regional rebate
                </div>
                <div style={{ borderTop: '1px solid #333', marginTop: 12, paddingTop: 12 }}>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Total incentive stack</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#1D9E75' }}>$3,000–5,000+</div>
                </div>
              </div>
              <div style={{ background: '#1a1a1a', borderRadius: 10, padding: '18px' }}>
                <div style={{ fontSize: 12, color: '#666', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ford Employee Pricing for All month</div>
                <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.8 }}>
                  Ford Employee Pricing for All<br />
                  <span style={{ color: '#DC2626' }}>Stackable incentives pulled</span><br />
                  <br />
                </div>
                <div style={{ borderTop: '1px solid #333', marginTop: 12, paddingTop: 12 }}>
                  <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Total incentive stack</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#DC2626' }}>Employee price only</div>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>
              A Metro Detroit buyer who already had X-Plan access walked in during Ford Employee Pricing for All month thinking they were getting the deal of the year — and paid more than a buyer who came in the month before with X-Plan stacked on top of normal monthly incentives.
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The conversation that started AutoBidly</h2>
          <p style={{ marginBottom: 20 }}>
            This isn't a hypothetical. AutoBidly was founded in part because of exactly this situation. Sitting at a Ford dealership in Metro Detroit, ready to sign on an F-150 during Ford Employee Pricing for All month, a salesperson showed us something on his screen that we've never forgotten.
          </p>
          <p style={{ marginBottom: 20 }}>
            He pulled up the previous month's numbers — X-Plan pricing stacked with that month's conquest cash, loyalty bonus, and seasonal rebates. Then he showed the Ford Employee Pricing for All number from the current month. The difference was thousands of dollars. Buyers who walked in that month thinking they were getting the deal of the year were actually paying more than buyers who had come in thirty days earlier.
          </p>
          <p style={{ marginBottom: 20 }}>
            He changed the screen back and said: "Anyone that got this truck last month paid less than anyone getting it this month. The commercial doesn't tell you that."
          </p>
          <p style={{ marginBottom: 20 }}>
            We drove home without signing. And we started building AutoBidly.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Why Ford runs the program anyway</div>
            <p style={{ fontSize: 15, color: '#0F6E56', lineHeight: 1.7, margin: 0 }}>
              Ford Employee Pricing for All isn't a bad program — it's a great program for the right market. In cities where X-Plan access is rare, it genuinely opens up employee pricing to buyers who couldn't otherwise get it. Ford runs it to move inventory nationally and generate positive press. Both are legitimate goals. The problem is that the commercial doesn't come with a footnote that says "results may vary in Metro Detroit."
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>
            {fordPromoActive ? 'What to do if Ford Employee Pricing for All is running right now' : 'What to do when Ford Employee Pricing for All runs again'}
          </h2>
          <p style={{ marginBottom: 20 }}>
            Ford Employee Pricing for All is the only incentive program running during the event — that's the point. There's nothing to stack it with. So here's how to think about your options:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
            {[
              {
                step: '1',
                title: 'Find out if you have X-Plan access',
                body: 'Ask around. Do you know anyone who works or retired from Ford? A neighbor, a coworker, a family friend? Ford employees can sponsor up to 4 people per year for X-Plan at myplan.ford.com. In Metro Detroit you almost certainly know someone. The PIN takes minutes to generate.',
              },
              {
                step: '2',
                title: 'Ask the dealer what last month\'s stacked deal would have looked like',
                body: 'A good dealer can pull up prior month numbers. Ask specifically: "What would X-Plan pricing have looked like last month stacked with conquest cash, loyalty bonuses, and seasonal rebates?" That number tells you what you\'re giving up by buying during Ford Employee Pricing for All instead of waiting.',
              },
              {
                step: '3',
                title: 'Understand that waiting may be your best move',
                body: 'Ford Employee Pricing for All typically runs 30-60 days. When it ends, normal monthly incentives return and X-Plan can stack again. If the prior month\'s stacked number was significantly better — and it often is in Metro Detroit — it may be worth waiting for the incentive cycle to reset. A few weeks of patience can be worth thousands of dollars.',
              },
              {
                step: '4',
                title: 'If you need a vehicle now, submit a BidLock™ at your target price',
                body: 'Even during Ford Employee Pricing for All, different dealers have different flexibility. Submit a BidLock™ at your target payment and let dealers in your area compete. You\'ll find out quickly whether the market can hit your number — and the first dealer to accept is locked in at that price.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{item.step}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#555', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The broader lesson</h2>
          <p style={{ marginBottom: 20 }}>
            Ford Employee Pricing for All is a perfect example of why national automotive promotions don't always translate to local value. The commercial is designed for the average buyer in the average market. Metro Detroit is not the average market.
          </p>
          <p style={{ marginBottom: 20 }}>
            In this market, the best deals almost never come from national promotional events. They come from knowing your incentive stack, knowing how to stack it, and knowing which month the incentives align in your favor.
          </p>
          <p style={{ marginBottom: 32, fontStyle: 'italic', color: '#555', fontSize: 15, lineHeight: 1.75, borderLeft: '3px solid #1D9E75', paddingLeft: 20 }}>
            The salesperson who showed us those numbers wasn't trying to talk us out of buying a truck. He was being honest because he knew a buyer who trusted him would come back. That's the kind of dealer AutoBidly is built to connect buyers with.
          </p>

        </div>

        {/* CTA */}
        <div style={{ background: '#111', borderRadius: 14, padding: '32px', textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Know what you should be paying before you walk in</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Enter your Ford X-Plan access in Custom Lease Intelligence™ and see your personalized score. Then submit a BidLock™ at your target payment — let dealers compete at your price.</p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/lease-intelligence" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '13px 28px', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Personalize my scores →</a>
            <a href="/bidlock" style={{ background: 'transparent', color: '#fff', border: '1.5px solid #333', borderRadius: 99, padding: '13px 28px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a BidLock™ — free</a>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'What is Ford Employee Pricing for All?', a: 'Ford Employee Pricing for All is a promotional event where Ford opens their standard employee pricing program to any buyer nationwide. It was first launched April 3, 2025 under "From America, For America" in response to auto import tariff uncertainty, and brought back May 1, 2026 tied to America\'s 250th anniversary.' },
              { q: 'Why is Ford Employee Pricing for All a bad deal in Metro Detroit specifically?', a: 'In Metro Detroit, most buyers already have access to Ford X-Plan pricing through an employee or retiree connection. X-Plan normally stacks with other monthly incentives. Ford Employee Pricing for All replaces those stackable incentives — it\'s the only program running during the event. A buyer who already had X-Plan access often ends up with a worse combined deal than they would have gotten in a normal month with a full incentive stack.' },
              { q: 'Does Ford Employee Pricing for All stack with other incentives?', a: 'No — that\'s the key point. Ford Employee Pricing for All is designed as a standalone program. When it runs, most stackable incentives are pulled. This is exactly why it can be a worse deal in Metro Detroit, where buyers could otherwise stack X-Plan with conquest cash, loyalty bonuses, and seasonal rebates.' },
              { q: 'What is Ford X-Plan and how do I get it?', a: 'Ford X-Plan is the Friends and Neighbors tier of Ford\'s employee pricing program. Any Ford employee or retiree can sponsor up to 4 people per year. They generate a PIN at myplan.ford.com — you need this PIN before you go to the dealer. In Metro Detroit, ask around — you almost certainly know someone who can get you a PIN.' },
              { q: 'Should I wait until Ford Employee Pricing for All ends?', a: 'If you have X-Plan access and the prior month\'s stacked incentives were significantly better, waiting may absolutely be worth it. Ask your dealer to show you what last month\'s stacked deal would have looked like versus the current Ford Employee Pricing for All number. The difference will tell you whether waiting makes financial sense.' },
              { q: 'How will I know when Ford Employee Pricing for All runs again?', a: 'AutoBidly tracks manufacturer promotions and updates this page automatically when Ford Employee Pricing for All is active. The banner at the top of this article will tell you whether the promotion is currently running every time you visit.' },
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
              { slug: 'why-autobidly-exists', title: 'Why AutoBidly exists — the founding story', tag: 'Our Story' },
              { slug: 'money-factor', title: 'Money factor explained — the lease interest rate most buyers never see', tag: 'Lease Math' },
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