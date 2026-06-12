export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
      </nav>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, color: '#111', marginBottom: 8, letterSpacing: '-0.5px' }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: '#999', marginBottom: 40 }}>Last updated: June 2026</p>

        <div style={{ fontSize: 15, color: '#444', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>1. Information We Collect</h2>
          <p>When you use AutoBidly, we collect information you provide directly to us, including your name, email address, phone number, zip code, vehicle preferences, and lease terms. We also collect information about your credit tier and applicable manufacturer incentives you indicate eligibility for.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>2. How We Use Your Information</h2>
          <p>We use the information we collect to operate and improve AutoBidly, to match your lease bid with participating dealers, to send you SMS verification codes and bid status notifications, and to communicate with you about your account and our services.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>3. SMS Communications</h2>
          <p>By providing your phone number and requesting a verification code on autobidly.vercel.app, you consent to receive a one-time SMS verification code from AutoBidly. Standard message and data rates may apply. You can opt out at any time by replying STOP to any message.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>4. Information Sharing</h2>
          <p>We do not sell your personal information to third parties. Your contact information is only shared with a dealer after you have reviewed and accepted their response to your BidLock submission. We do not share your information with dealers before that point.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>5. Data Security</h2>
          <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. All data is transmitted over encrypted connections.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>6. Data Retention</h2>
          <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and associated data at any time by contacting us at info@autobidly.com.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@autobidly.com" style={{ color: '#1D9E75' }}>info@autobidly.com</a>.</p>

          <p style={{ marginTop: 40, padding: '20px', background: '#E1F5EE', borderRadius: 8, fontSize: 13, color: '#0F6E56' }}>
            AutoBidly LLC · Michigan · autobidly.vercel.app
          </p>
        </div>
      </div>
    </main>
  );
}