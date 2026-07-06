"use client";

export default function EmployeePricingDetroitPage() {
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
            <span style={{ fontSize: 13, color: '#999' }}>8 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Employee pricing in Metro Detroit — what you have, what you might not know you have, and how to use it
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            In Metro Detroit, employee pricing isn't a perk for the lucky few. It's practically a birthright. Here's the complete guide to every manufacturer program, who qualifies, and how to stack what you have.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>Why this market is different</h2>
          <p style={{ marginBottom: 20 }}>
            There is no car market in America quite like Metro Detroit. Three of the world's largest automakers — General Motors, Ford Motor Company, and Stellantis — have their global headquarters here. Tens of thousands of people work directly for these companies. Tens of thousands more work for the supplier companies that feed them. And virtually everyone else knows someone who does.
          </p>
          <p style={{ marginBottom: 20 }}>
            The result is a market where employee pricing isn't exceptional — it's the baseline. A buyer in Dallas who gets Ford X-Plan pricing feels like they found a secret. A buyer in Northville feels like everyone has it, because most people do.
          </p>
          <p style={{ marginBottom: 20 }}>
            And yet most buyers still don't know exactly what they have, how much it's worth, or how to use it. They show up at a dealership and mention employee pricing, and the conversation moves on before they fully understand what they just unlocked — or whether they could have stacked it with something else to get an even better number.
          </p>
          <p style={{ marginBottom: 20 }}>
            This guide fixes that.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Metro Detroit reality</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: 0 }}>
              In Metro Detroit, almost everyone qualifies for at least one tier of employee pricing from at least one manufacturer. If you don't have it yourself, your parent does. Or your sibling. Or your neighbor. Or a coworker's spouse. The question isn't whether you can get employee pricing — it's which programs you qualify for and how to stack them.
            </p>
          </div>

          {/* GM SECTION */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>GM Family First — Chevrolet, Buick, GMC, Cadillac</h2>
          <p style={{ marginBottom: 20 }}>
            General Motors has one of the most generous and broadly available employee programs in the automotive industry. It's called GM Family First, and it's accessed through gmfamilyfirst.com.
          </p>
          <p style={{ marginBottom: 16, fontWeight: 600, color: '#111' }}>Who qualifies:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {[
              'Active and retired GM and GM Financial employees',
              'Spouses and registered domestic partners',
              'Children and stepchildren (up to age 25 if full-time student)',
              'Grandchildren and step-grandchildren',
              'Parents, stepparents, and grandparents — including in-laws and step-grandparents',
              'Siblings, half-siblings, and step-siblings — including siblings-in-law',
              'Aunts, uncles, nieces, and nephews',
              'Active employees at authorized GM dealerships',
              'Former GM employees with 5+ years of service can sponsor spouses and dependent children',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 14px', background: '#fff', borderRadius: 8, border: '1px solid #eee' }}>
                <span style={{ color: '#1D9E75', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: '#333' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#111', borderRadius: 12, padding: '20px 24px', marginBottom: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75', marginBottom: 8 }}>How to use it</div>
            <div style={{ fontSize: 14, color: '#ccc', lineHeight: 1.7 }}>
              The GM employee or retiree logs into gmfamilyfirst.com and generates an Authorization Number for the buyer. Up to 6 authorization numbers per year for active employees and retirees. The buyer brings this number to any participating GM dealer. The price is set — the dealer cannot inflate it above the program price.
            </div>
          </div>

          <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '16px 20px', marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 6 }}>The stacking advantage</div>
            <div style={{ fontSize: 14, color: '#0F6E56', lineHeight: 1.65 }}>
              GM Family First pricing can typically be combined with most current national incentives, loyalty bonuses, conquest cash, and Costco member incentives. In a strong month, a GM employee buyer in Metro Detroit can have $4,000-8,000 in combined incentives working simultaneously. This is why GM vehicles consistently dominate our Lease Intelligence rankings in this market.
            </div>
          </div>

          {/* FORD SECTION */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Ford AXZ Plans — Ford & Lincoln</h2>
          <p style={{ marginBottom: 20 }}>
            Ford's employee pricing system is called the AXZ Plan and it has four tiers — A, Z, D, and X — each covering a different group of people. The most important one for Metro Detroit buyers to understand is X-Plan, because it extends to friends and neighbors and most people don't know it exists.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {[
              {
                plan: 'A-Plan',
                who: 'Active Ford corporate employees and their immediate family',
                detail: 'The deepest Ford discount available. Calculated at invoice minus holdback minus advertising fee plus a $275 program fee. Up to 4 PINs per year. Generate at axz.ford.com.',
                color: '#0F6E56',
              },
              {
                plan: 'Z-Plan',
                who: 'Retired Ford employees, surviving spouses, and their immediate family',
                detail: 'Identical pricing to A-Plan. Same 4 PINs per year. Z-Plan holders access the same program at axz.ford.com.',
                color: '#0F6E56',
              },
              {
                plan: 'D-Plan',
                who: 'Ford dealership employees and their immediate family',
                detail: 'Almost as deep as A-Plan with a small $100 fee. Up to 2 PINs per year. Designed for the salespeople and service staff at local Ford stores.',
                color: '#1D9E75',
              },
              {
                plan: 'X-Plan',
                who: 'Anyone sponsored by a Ford employee or retiree — friends, neighbors, extended family, partner company employees',
                detail: 'Slightly less deep than A-Plan but still significant. A Ford employee or retiree can sponsor up to 4 people per year. They generate a PIN at myplan.ford.com — you must have this PIN before you go to the dealer. Does not apply to F-150 Raptor or Mustang Dark Horse.',
                color: '#B45309',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ background: item.color, color: '#fff', fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 99, flexShrink: 0, marginTop: 2 }}>{item.plan}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.who}</div>
                    <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{item.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#FEF3C7', borderRadius: 10, padding: '16px 20px', marginBottom: 28, border: '1px solid #FDE68A' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#B45309', marginBottom: 6 }}>The X-Plan opportunity most Metro Detroit buyers miss</div>
            <div style={{ fontSize: 14, color: '#B45309', lineHeight: 1.65 }}>
              Ford employees can sponsor up to 4 people per year with X-Plan PINs. Many employees have unused PINs every single year. If you know anyone who works or worked at Ford — a neighbor, a coworker's spouse, a family friend — ask if they have a PIN available. In Metro Detroit, you almost certainly know someone. The PIN is generated in minutes at myplan.ford.com. You need it before you walk into the dealer.
            </div>
          </div>

          {/* STELLANTIS SECTION */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Stellantis Employee Advantage — Jeep, Ram, Chrysler, Dodge</h2>
          <p style={{ marginBottom: 20 }}>
            Stellantis — the company behind Jeep, Ram, Chrysler, and Dodge — operates its employee pricing through the FCA Employee Advantage Program. The structure is similar to Ford's but with one critical difference: Stellantis pricing often does not stack with public cash rebates. You typically have to choose one or the other.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
            {[
              {
                plan: 'Employee Purchase (EP)',
                who: 'Active Stellantis employees, retirees, surviving spouses, and immediate family',
                detail: 'Fixed at 5% below dealer invoice plus a $200 program fee. Requires a Control Number generated through the Stellantis employee portal. Up to 6 Control Numbers per year.',
              },
              {
                plan: 'Employee Choice',
                who: 'Anyone — literally anyone — sponsored by an active Stellantis employee',
                detail: 'Active employees receive ONE Choice voucher per year that can go to any single person of their choosing — friend, neighbor, or acquaintance. Same full EP pricing. Extremely limited and extremely valuable. If a Stellantis employee offers you their Choice voucher, use it.',
              },
              {
                plan: 'Friends Program',
                who: 'Extended family and friends sponsored by Stellantis employees',
                detail: 'Approximately 1% below invoice plus a $75 fee. Meaningfully weaker than EP pricing or the Employee Choice voucher, but still better than retail on most models.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111', marginBottom: 6 }}>{item.plan}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#666', marginBottom: 6 }}>{item.who}</div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.65 }}>{item.detail}</div>
              </div>
            ))}
          </div>

          <div style={{ background: '#FEF2F2', borderRadius: 10, padding: '16px 20px', marginBottom: 28, border: '1px solid #FECACA' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#991B1B', marginBottom: 6 }}>⚠️ The Stellantis stacking problem</div>
            <div style={{ fontSize: 14, color: '#991B1B', lineHeight: 1.65 }}>
              Unlike GM and Ford — where employee pricing typically stacks with other incentives — Stellantis frequently requires you to choose between employee pricing OR the current public cash rebates. In months when Stellantis is running aggressive public incentives (which they do frequently due to high inventory), public rebates may actually be worth more than employee pricing. Always compare both options before committing to either one.
            </div>
          </div>

          {/* STACKING SECTION */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The stacking play — and why Metro Detroit is uniquely positioned</h2>
          <p style={{ marginBottom: 20 }}>
            Here's something most buyers don't realize: you can qualify for incentives across multiple brands simultaneously. Having GM Family First pricing doesn't prevent you from also having Ford X-Plan access if you know a Ford employee. Both apply — to their respective brands.
          </p>
          <p style={{ marginBottom: 20 }}>
            In Metro Detroit, this cross-brand incentive access is extremely common. A GM household where dad works at GM and a neighbor works at Ford can legitimately access:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
            {[
              'GM Family First on any Chevrolet, Buick, GMC, or Cadillac — stacking with Costco cash and loyalty bonuses',
              'Ford X-Plan on any Ford or Lincoln — stacking with Ford loyalty or conquest cash',
              'Stellantis Friends Program on Jeep, Ram, Chrysler, or Dodge — if another connection exists',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '12px 16px', background: '#f9f9f7', borderRadius: 8 }}>
                <span style={{ color: '#1D9E75', fontWeight: 700, flexShrink: 0 }}>→</span>
                <span style={{ fontSize: 14, color: '#555', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: 20 }}>
            AutoBidly's Custom Lease Intelligence™ lets you enter every incentive you qualify for — across all brands simultaneously — and see personalized scores that reflect your actual situation. A GM employee with Costco who knows a Ford neighbor sees a completely different set of rankings than a buyer with no incentive access. Both are using the same platform. Both get the right answer for their situation.
          </p>

          {/* PRACTICAL SECTION */}
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>How to use your employee pricing — a practical checklist</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
            {[
              { step: '1', title: 'Identify everything you qualify for', body: 'Go through each manufacturer. Who in your family works or worked at GM, Ford, or Stellantis? Do you know a neighbor or coworker who could sponsor you for Ford X-Plan or Stellantis Friends? Do you have a Costco membership? Are you military or a veteran? Write it all down.' },
              { step: '2', title: 'Get your authorization number, PIN, or control number before you go', body: 'GM requires an Authorization Number from gmfamilyfirst.com. Ford X-Plan requires a PIN generated at myplan.ford.com. Stellantis requires a Control Number from the employee portal. You cannot use any of these programs without the number in hand. Don\'t walk into a dealership without it.' },
              { step: '3', title: 'Check current public incentives too', body: 'Especially for Stellantis — compare the employee price against the current public rebates. Sometimes public incentives are worth more, particularly when a manufacturer is running aggressive clearance promotions. Your employee contact can help you run both numbers.' },
              { step: '4', title: 'Use AutoBidly to see your personalized score', body: 'Enter your incentive stack in Custom Lease Intelligence™ and see which vehicles score highest for your specific situation. The ranking for a GM employee buyer in June looks completely different from a buyer with no incentives. Your score reflects what\'s actually available to you.' },
              { step: '5', title: 'Submit a BidLock™ at your target price', body: 'Once you know your vehicle and your incentive stack, submit a BidLock™. Verified dealers in your area see your bid — including your verified incentive eligibility. The dealer who accepts first is locked in. No negotiation. No games.' },
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

        </div>

        {/* CTA */}
        <div style={{ background: '#111', borderRadius: 14, padding: '32px', textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>Custom Lease Intelligence™</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>See your personalized scores</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>Enter every incentive you qualify for — GM Family First, Ford X-Plan, Stellantis Friends, Costco, military — and see which vehicles rank highest for your specific situation.</p>
          <a href="/lease-intelligence" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Personalize my scores →</a>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Can I have employee pricing from multiple manufacturers?', a: 'Yes. Each manufacturer\'s program is completely independent. If your mother works at GM and your neighbor works at Ford and offers to sponsor you for X-Plan, you can use GM Family First on a Chevrolet and Ford X-Plan on a Ford. Both are valid simultaneously on their respective brands.' },
              { q: 'Do I need to be related to a GM employee to qualify for GM Family First?', a: 'The eligible family tree is very broad — it includes aunts, uncles, nieces, nephews, grandparents, in-laws, and step-relations. For Ford and Stellantis Friends programs, you don\'t need a family relationship at all — you just need to know someone who works there and is willing to sponsor you.' },
              { q: 'What is Ford X-Plan and how do I get it?', a: 'Ford X-Plan is a pricing tier available to anyone sponsored by a Ford employee or retiree. The employee generates a PIN at myplan.ford.com — up to 4 per year. You bring this PIN to the dealership. You cannot use X-Plan without the PIN, so get it before you visit.' },
              { q: 'Does GM employee pricing stack with Costco?', a: 'Yes — GM Family First pricing can typically be combined with the Costco Auto Program incentive, which adds another $1,000-2,000 on select GM vehicles. This is one of the strongest incentive stacks available in any market.' },
              { q: 'Does Stellantis employee pricing stack with other incentives?', a: 'Not always. Unlike GM and Ford, Stellantis frequently requires buyers to choose between employee pricing OR current public cash rebates — not both. Always compare both options before deciding which to use.' },
              { q: 'How does AutoBidly factor in my employee pricing?', a: 'AutoBidly\'s Custom Lease Intelligence™ lets you enter every incentive you qualify for. Once entered, every vehicle in our database gets a personalized score that reflects your actual situation — employee pricing, Friends program access, loyalty, Costco, and military all move your scores on their respective brands.' },
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
              { slug: 'why-autobidly-exists', title: 'Why AutoBidly exists — the founding story', tag: 'Our Story' },
              { slug: 'money-factor', title: 'Money factor explained — the lease interest rate most buyers never see', tag: 'Lease Math' },
              { slug: 'retired-loaners', title: 'Retired loaners — brand new vehicles with built-in savings', tag: 'Insider Intel' },
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
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