"use client";

const articles = [
  {
    slug: "why-autobidly-exists",
    title: "Why AutoBidly exists",
    subtitle: "The story behind the platform — and why it took a Metro Detroit founder to build it.",
    tag: "Our Story",
    readTime: "10 min read",
    teaser: "This isn't a startup origin story about a lightbulb moment in a college dorm. It's about years of sitting across from car salespeople and leaving with that specific feeling — equal parts excited about a new vehicle and completely unsure what just happened to you.",
  },
  {
    slug: "employee-pricing-detroit",
    title: "Employee pricing in Metro Detroit — what you have, what you might not know you have, and how to use it",
    subtitle: "The complete guide to GM Family First, Ford AXZ Plans, and Stellantis Employee Advantage.",
    tag: "Insider Intel",
    readTime: "8 min read",
    teaser: "In Metro Detroit, employee pricing isn't a perk for the lucky few. It's practically a birthright. Here's the complete guide to every manufacturer program, who qualifies, and how to stack what you have.",
  },
  {
    slug: "model-year-timing",
    title: "Leasing last year's model — when it saves you money and when it doesn't",
    subtitle: "The answer depends on the vehicle, the time of year, and what the manufacturer is supporting.",
    tag: "Model Year Timing",
    readTime: "4 min read",
    teaser: "Most buyers assume older model year always means better deal. Sometimes that's true. Often it isn't. Here's exactly when leasing last year's model saves you money — and when the current year is actually the smarter move.",
  },
  {
    slug: "lease-equity",
    title: "Does your current lease have equity? Here's how to check before you turn it in.",
    subtitle: "In today's used car market, your lease buyout may be less than what the car is actually worth.",
    tag: "Lease Equity",
    readTime: "5 min read",
    teaser: "When you turn in a lease, the dealer takes the car and you walk away. But in many cases the car is worth more than your buyout price. That difference belongs to you — if you know to look for it before you hand over the keys.",
  },
  {
    slug: "dealer-addons",
    title: "The real cost of adding accessories to your lease",
    subtitle: "Dealer-installed accessories are convenient. Here's what that convenience actually costs over 36 months.",
    tag: "Lease Math",
    readTime: "3 min read",
    teaser: "There's nothing wrong with having the dealer install a tonneau cover before you pick up your truck. But before you say yes, it's worth understanding the full 36-month cost — and what your alternatives look like.",
  },
  {
    slug: "retired-loaners",
    title: "Retired loaners — brand new vehicles with built-in savings",
    subtitle: "Under 3,000 miles. Manufacturer discount applied. Same warranty as new.",
    tag: "Insider Intel",
    readTime: "4 min read",
    teaser: "Every dealer has retired loaner vehicles — nearly new cars with under 3,000 miles that were used as service loaners. Manufacturers provide a discount that dealers can pass through to buyers. Most buyers don't know to ask for them.",
  },
  {
    slug: "lease-protection",
    title: "Lease protection packages — is it worth it?",
    subtitle: "Understanding what you're buying, what it covers, and how to decide if it makes sense for you.",
    tag: "Finance Office",
    readTime: "4 min read",
    teaser: "At the end of signing, you'll likely be offered a lease protection package covering excess wear and tear. Here's what it covers, what it costs over the life of your lease, and the questions worth asking before you decide.",
  },
  {
    slug: "money-factor",
    title: "Money factor explained — the lease interest rate most buyers never see",
    subtitle: "Every lease has an interest rate. Here's how to find yours and what it means for your payment.",
    tag: "Lease Math",
    readTime: "5 min read",
    teaser: "Every lease has an interest rate called the money factor. It's not always disclosed upfront, but it significantly affects your monthly payment. Here's how to find it, how to interpret it, and how to use it when comparing lease offers.",
  },
];

export default function InsiderPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/deals" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Browse deals</a>
          <a href="/lease-intelligence" style={{ fontSize: 14, color: '#666', textDecoration: 'none' }}>Lease Intelligence</a>
          <a href="/insider" style={{ fontSize: 14, color: '#1D9E75', textDecoration: 'none', fontWeight: 500 }}>The Insider</a>
          <a href="/bidlock" style={{ background: '#1D9E75', color: '#fff', borderRadius: 99, padding: '8px 20px', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Submit a bid</a>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px' }}>

        {/* HEADER */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: '#111', color: '#1D9E75', fontSize: 11, fontWeight: 600, padding: '4px 14px', borderRadius: 99, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The AutoBidly Insider</div>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: '#111', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            The informed buyer&apos;s guide to leasing.
          </h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.75, maxWidth: 680 }}>
            The best lease experiences happen when buyers come to the table informed. These guides give you the knowledge the most confident buyers already have — so you can ask the right questions, understand what you&apos;re signing, and walk away feeling good about your deal.
          </p>
        </div>

        {/* FEATURED — OUR STORY */}
        <a href="/insider/why-autobidly-exists" style={{ textDecoration: 'none', display: 'block', marginBottom: 16 }}>
          <div
            style={{ background: '#111', borderRadius: 16, padding: '32px 36px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.95')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#1D9E75', background: '#1D9E7522', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Our Story</span>
              <span style={{ fontSize: 12, color: '#555' }}>10 min read</span>
              <span style={{ fontSize: 12, color: '#555' }}>·</span>
              <span style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500 }}>Start here</span>
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 10 }}>Why AutoBidly exists</h2>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 20, maxWidth: 620 }}>
              This isn&apos;t a startup origin story about a lightbulb moment in a college dorm. It&apos;s about years of sitting across from car salespeople and leaving with that specific feeling — equal parts excited about a new vehicle and completely unsure what just happened to you.
            </p>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#1D9E75' }}>Read the founding story →</span>
          </div>
        </a>

        {/* FEATURED — EMPLOYEE PRICING */}
        <a href="/insider/employee-pricing-detroit" style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
          <div
            style={{ background: '#fff', borderRadius: 16, padding: '28px 32px', cursor: 'pointer', border: '1.5px solid #1D9E75' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#f9fff9')}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
          >
            <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Insider Intel</span>
              <span style={{ fontSize: 12, color: '#999' }}>8 min read</span>
              <span style={{ fontSize: 12, color: '#999' }}>·</span>
              <span style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500 }}>Essential for Metro Detroit</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 8 }}>Employee pricing in Metro Detroit — what you have, what you might not know you have, and how to use it</h2>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.65, marginBottom: 16 }}>In Metro Detroit, employee pricing isn&apos;t a perk for the lucky few. It&apos;s practically a birthright. Here&apos;s the complete guide to GM Family First, Ford AXZ Plans, and Stellantis Employee Advantage — including how to stack them.</p>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75' }}>Read the full guide →</span>
          </div>
        </a>

        {/* ARTICLE GRID */}
        <div style={{ fontSize: 13, fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>All guides</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 48 }}>
          {articles.slice(2).map((article, i) => (
            <a key={i} href={`/insider/${article.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: '24px', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#1D9E75')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
              >
                <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{article.tag}</span>
                  <span style={{ fontSize: 11, color: '#999' }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111', lineHeight: 1.35, marginBottom: 10, flex: 1 }}>{article.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 16 }}>{article.teaser.substring(0, 110)}...</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75' }}>Read more →</span>
              </div>
            </a>
          ))}

          {/* COMING SOON */}
          {[
            { title: 'Why Ford Employee Pricing for All is actually a bad deal in Metro Detroit', tag: 'Insider Intel' },
            { title: 'Why you should almost never put money down on a lease', tag: 'Lease Math' },
            { title: 'Your Costco membership and car leasing — what it actually does and when it matters', tag: 'Insider Intel' },
          ].map((article, i) => (
            <div key={i} style={{ background: '#f9f9f7', borderRadius: 12, border: '1px dashed #ddd', padding: '24px', display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#999', background: '#eee', padding: '3px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{article.tag}</span>
                <span style={{ fontSize: 11, color: '#bbb' }}>Coming soon</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#999', lineHeight: 1.35, flex: 1 }}>{article.title}</h3>
            </div>
          ))}
        </div>

        {/* EMAIL SIGNUP */}
        <div style={{ background: '#111', borderRadius: 16, padding: '36px', textAlign: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>The AutoBidly Insider Newsletter</div>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', marginBottom: 10 }}>One email a month. Tailored to your lease situation.</h2>
          <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 28px' }}>
            No generic deals. No spam. Just the information that&apos;s relevant to your specific vehicle, your lease timeline, and your market. The email you&apos;ll actually want to open.
          </p>
          <div style={{ display: 'flex', gap: 8, maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              id="insider-email"
              type="email"
              placeholder="your@email.com"
              style={{ flex: 1, minWidth: 220, padding: '12px 16px', borderRadius: 99, border: '1px solid #333', background: '#1a1a1a', color: '#fff', fontSize: 14, outline: 'none', fontFamily: 'system-ui' }}
            />
            <button
              onClick={async () => {
                const emailEl = document.getElementById('insider-email') as HTMLInputElement;
                const msg = document.getElementById('insider-msg') as HTMLDivElement;
                const email = emailEl.value;
                if (!email || !email.includes('@')) { msg.textContent = 'Please enter a valid email.'; msg.style.color = '#E24B4A'; return; }
                try {
                  const res = await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
                  if (res.ok) { msg.textContent = "You're in! First email coming soon."; msg.style.color = '#1D9E75'; emailEl.value = ''; }
                  else { msg.textContent = 'Something went wrong.'; msg.style.color = '#E24B4A'; }
                } catch { msg.textContent = 'Something went wrong.'; msg.style.color = '#E24B4A'; }
              }}
              style={{ background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: '12px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Subscribe free
            </button>
          </div>
          <div id="insider-msg" style={{ marginTop: 10, fontSize: 13, minHeight: 18 }}></div>
          <p style={{ fontSize: 11, color: '#555', marginTop: 10 }}>No spam. Unsubscribe anytime. We respect your inbox.</p>
        </div>

      </div>
    </main>
  );
}