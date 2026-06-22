"use client";

const articles = [
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
    slug: "lease-protection",
    title: "Lease protection packages — is it worth it?",
    subtitle: "Understanding what you're buying, what it covers, and how to decide if it makes sense for you.",
    tag: "Finance Office",
    readTime: "4 min read",
    teaser: "At the end of signing, you'll likely be offered a lease protection package covering excess wear and tear. Here's what it covers, what it costs over the life of your lease, and the questions worth asking before you decide.",
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

        {/* FEATURED ARTICLE */}
        <a href={`/insider/${articles[0].slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
          <div style={{ background: '#111', borderRadius: 16, padding: '32px 36px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#1D9E75', background: '#1D9E7522', padding: '3px 10px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{articles[0].tag}</span>
              <span style={{ fontSize: 12, color: '#555' }}>{articles[0].readTime}</span>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 10 }}>{articles[0].title}</h2>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, marginBottom: 20 }}>{articles[0].teaser}</p>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#1D9E75' }}>Read the full guide →</span>
          </div>
        </a>

        {/* ARTICLE GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 48 }}>
          {articles.slice(1).map((article, i) => (
            <a key={i} href={`/insider/${article.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: '24px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#1D9E75')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
              >
                <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: '#0F6E56', background: '#E1F5EE', padding: '3px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{article.tag}</span>
                  <span style={{ fontSize: 11, color: '#999' }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111', lineHeight: 1.3, marginBottom: 10, flex: 1 }}>{article.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 16 }}>{article.teaser.substring(0, 120)}...</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1D9E75' }}>Read more →</span>
              </div>
            </a>
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