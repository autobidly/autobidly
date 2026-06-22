"use client";

export default function LeaseProtectionPage() {
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
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Finance Office</span>
            <span style={{ fontSize: 13, color: '#999' }}>4 min read</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Lease protection packages — is it worth it?
          </h1>
          <p style={{ fontSize: 18, color: '#555', lineHeight: 1.75 }}>
            Near the end of every lease signing, the finance manager will offer you an Excess Wear and Tear protection plan. Here's exactly what it is, what it covers, what it costs, and how to decide if it makes sense for your situation.
          </p>
        </div>

        <div style={{ fontSize: 16, color: '#333', lineHeight: 1.85 }}>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 0, marginBottom: 12 }}>What is the Excess Wear and Tear protection plan?</h2>
          <p style={{ marginBottom: 20 }}>
            When you return a leased vehicle, the leasing company inspects it for damage beyond what they consider normal wear and tear. If they find damage that exceeds their guidelines — a deep scratch, significant interior staining, heavy rim curb rash — they charge you for it. Those charges can add up quickly at lease end.
          </p>
          <p style={{ marginBottom: 20 }}>
            The Excess Wear and Tear protection plan is an optional add-on, typically offered in the finance office at signing, that waives your financial liability for those charges up to a specified limit — usually $5,000. You pay a fixed monthly amount over the lease term, and at turn-in you walk away without worrying about what the inspector finds.
          </p>
          <p style={{ marginBottom: 20 }}>
            The total cost typically ranges from $500 to $1,500 over the life of the lease, adding roughly $15 to $40 per month to your payment depending on the vehicle and lender.
          </p>

          <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '24px 28px', marginBottom: 28, marginTop: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The finance office framing</div>
            <p style={{ fontSize: 16, color: '#0F6E56', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
              "With 22-inch rims, if anything happens to those wheels you're looking at real money at turn-in. This policy covers all of it for $X a month."
            </p>
          </div>

          <p style={{ marginBottom: 20 }}>
            That framing isn't dishonest — rim damage on a high-end vehicle can genuinely be expensive. But the decision deserves more than 90 seconds of consideration in the middle of a 4-hour signing session. Here's what you actually need to know.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>What it covers</h2>
          <p style={{ marginBottom: 16 }}>Most Excess Wear and Tear plans cover the following damage types up to the policy limit:</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {[
              { category: 'Exterior paint & body', examples: 'Deep scratches, large door dings, and bumper scrapes that exceed the lender\'s size guidelines' },
              { category: 'Interior damage', examples: 'Permanent seat stains, carpet burns, fabric rips, and damage beyond normal use' },
              { category: 'Wheels & tires', examples: 'Heavy rim curb rash, bent wheels, and worn tire tread below minimum depth' },
              { category: 'Glass & lights', examples: 'Windshield chips and cracks, cracked side mirrors, and broken light lenses' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', border: '1px solid #eee', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 16, alignItems: 'start' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{item.category}</div>
                <div style={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{item.examples}</div>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>What leasing companies actually expect at turn-in</h2>
          <p style={{ marginBottom: 20 }}>
            Here's something most buyers don't know: leasing companies are more forgiving at turn-in than most people expect. They're not looking for a perfect vehicle — they're looking for a vehicle that shows reasonable, normal use.
          </p>
          <p style={{ marginBottom: 20 }}>
            Ford Credit's Wear and Use guidelines, for example, allow up to three dings or scratches per body panel as long as they're under four inches in length. Minor scuffs, small door dings, and light interior wear are typically not charged at all. The guidelines are designed to reflect what a normally driven vehicle looks like after three years — not showroom condition.
          </p>
          <p style={{ marginBottom: 20 }}>
            GM Financial, Chase Auto, and most other captive lenders have similar frameworks. The charges that actually show up at turn-in are typically for significant damage — not the kind that accumulates from normal daily driving.
          </p>

          <div style={{ background: '#111', borderRadius: 12, padding: '24px 28px', marginBottom: 28 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The pre-return inspection</div>
            <p style={{ fontSize: 15, color: '#ccc', lineHeight: 1.7, margin: '0 0 10px 0' }}>
              Most lenders offer a free pre-return inspection 60 to 90 days before your lease ends. An inspector will go over the vehicle and give you an exact list of any charges before you hand back the keys.
            </p>
            <p style={{ fontSize: 15, color: '#ccc', lineHeight: 1.7, margin: 0 }}>
              This is one of the most underused tools available to lease buyers. If damage is found, you have time to get it repaired independently — usually for significantly less than what the leasing company would charge. A local detail shop can fix a deep scratch for $150-300. The leasing company might charge $400-600 for the same item.
            </p>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>The real math</h2>
          <p style={{ marginBottom: 20 }}>
            Let's say the Excess Wear and Tear plan costs $25 a month on a 36-month lease. That's $900 total over the lease term. You're paying $900 upfront — in the sense that it's baked into your payment from day one — to protect against damage charges at turn-in.
          </p>
          <p style={{ marginBottom: 20 }}>
            If you return the vehicle with no significant damage, you paid $900 for nothing. If you return it with $1,200 in damage, the policy saved you $300. If you return it with $3,000 in damage, it saved you $2,100.
          </p>
          <p style={{ marginBottom: 20 }}>
            The question is: how likely are you to have significant damage at turn-in? For most drivers, the honest answer is: not very. The pre-return inspection option gives you a safety net even without the policy — you find out what's chargeable, fix it yourself for less, and walk away clean.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>When it makes sense — and when it doesn't</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
            <div style={{ background: '#E1F5EE', borderRadius: 12, padding: '20px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0F6E56', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Consider buying it if...</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'You live in a dense city with tight street parking and frequent parallel parking',
                  'You have young children or pets that are genuinely hard on interiors',
                  'You\'re leasing a luxury vehicle with expensive wheels or paint that costs significantly more to repair',
                  'You want complete peace of mind at lease end — no inspection anxiety, no repair appointments, just hand back the keys',
                  'You know your driving habits and history suggest above-average wear',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#0F6E56', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, color: '#065F46', lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FEF2F2', borderRadius: 12, padding: '20px' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#991B1B', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Skip it if...</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'You\'re a careful driver with a history of returning vehicles in good condition',
                  'You\'re willing to get a pre-return inspection and handle any repairs independently',
                  'You garage the vehicle or live in a suburban or rural area with lower parking risk',
                  'You\'re leasing a standard vehicle where repair costs are relatively modest',
                  'You\'d rather keep the $15-40/month and self-insure against a risk that may never materialize',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#991B1B', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✗</span>
                    <span style={{ fontSize: 13, color: '#7F1D1D', lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ marginBottom: 32, fontSize: 15, color: '#555', fontStyle: 'italic', borderLeft: '3px solid #1D9E75', paddingLeft: 20, lineHeight: 1.75 }}>
            There's no universal right answer. The plan can genuinely make sense for some buyers. The point is that it should be a calm, informed decision — not something you agree to in the middle of a signing session when you've already made a hundred other decisions that day.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginTop: 40, marginBottom: 12 }}>Questions to ask before you decide</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
            {[
              { q: 'What exactly does this plan cover and what are the exclusions?', why: 'Some plans exclude mechanical damage, tire sidewall damage, or specific interior materials. Know exactly what you\'re buying.' },
              { q: 'What is the per-incident limit and the total policy limit?', why: 'Most plans cover up to $5,000 total. If you have multiple damage items, they all come out of that pool.' },
              { q: 'Does this plan transfer if I pay off the lease early or trade in early?', why: 'If you return the vehicle before lease end, you may have paid for coverage you can\'t use.' },
              { q: 'What does this lender\'s wear and tear guide actually allow?', why: 'Ask to see the lender\'s official guidelines before deciding. You may already be covered for more than you think.' },
              { q: 'Can I add this plan later if I change my mind?', why: 'Most plans must be purchased at signing and cannot be added later. But it\'s worth asking.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '18px 20px', border: '1px solid #eee' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 6 }}>"{item.q}"</div>
                <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}><strong style={{ color: '#555' }}>Why it matters:</strong> {item.why}</div>
              </div>
            ))}
          </div>

        </div>

        {/* FAQ */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', marginBottom: 20 }}>Frequently asked questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'How much does Excess Wear and Tear protection typically cost?', a: 'Most plans range from $500 to $1,500 total over the lease term, adding $15 to $40 per month to your payment. The cost varies by vehicle type, lender, and coverage limit.' },
              { q: 'What is the coverage limit on most plans?', a: 'Most Excess Wear and Tear plans cover up to $5,000 in damage charges at turn-in. Individual items are covered up to specified limits within that total.' },
              { q: 'Can I get a pre-return inspection without the plan?', a: 'Yes. Most lenders offer a free pre-return inspection 60-90 days before lease end regardless of whether you have a protection plan. This gives you time to repair damage independently at lower cost.' },
              { q: 'Does the plan cover mechanical issues?', a: 'No. Excess Wear and Tear plans cover cosmetic and physical damage — scratches, dents, interior damage, wheel damage, and glass. Mechanical issues are covered by your factory warranty and are separate from wear and tear charges.' },
              { q: 'Is the plan refundable if I return the vehicle early?', a: 'This varies by lender and plan. Some plans offer a prorated refund for early return, others do not. Ask specifically about early termination before purchasing.' },
              { q: 'What qualifies as "normal" wear and tear?', a: 'Each lender defines this differently, but generally: minor scuffs, small dings under a certain size, light interior wear, and normal tire wear are considered acceptable. Ask for the lender\'s official Wear and Use guide before signing.' },
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
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Lock your payment before the finance office conversation starts.</h2>
          <p style={{ fontSize: 14, color: '#999', marginBottom: 24, lineHeight: 1.7 }}>When your monthly payment is already agreed on via BidLock™, every add-on in the finance office is a separate, calm decision — not part of a high-pressure signing environment.</p>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Submit a BidLock™ — free</a>
        </div>

        {/* MORE ARTICLES */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>More from The Insider</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { slug: 'dealer-addons', title: 'The real cost of adding accessories to your lease', tag: 'Lease Math' },
              { slug: 'lease-equity', title: "Does your current lease have equity? Here's how to check before you turn it in.", tag: 'Lease Equity' },
              { slug: 'retired-loaners', title: 'Retired loaners — brand new vehicles with built-in savings', tag: 'Insider Intel' },
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