export default function TermsPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: 20, fontWeight: 600, textDecoration: 'none', color: '#111' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></a>
      </nav>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, color: '#111', marginBottom: 8, letterSpacing: '-0.5px' }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: '#999', marginBottom: 40 }}>Last updated: June 2026</p>

        <div style={{ fontSize: 15, color: '#444', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>1. Acceptance of Terms</h2>
          <p>By accessing or using AutoBidly at autobidly.vercel.app, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>2. Description of Service</h2>
          <p>AutoBidly is a two-sided lease marketplace that allows consumers to submit vehicle lease bids (BidLock™) and participating dealers to respond. AutoBidly is not a dealer, lender, or financial institution. We facilitate connections between buyers and dealers but are not a party to any lease agreement.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>3. SMS Messaging</h2>
          <p>By providing your phone number and submitting a verification request, you consent to receive SMS messages from AutoBidly including one-time verification codes and bid status notifications. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. For support contact info@autobidly.com.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>4. BidLock Submissions</h2>
          <p>When you submit a BidLock, you are indicating your intent to lease the specified vehicle at the stated payment terms. Your contact information will only be shared with a dealer after you review and accept their response. You have 72 hours to visit the dealership and complete the lease after accepting a dealer's offer. AutoBidly does not guarantee that any dealer will accept your bid.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>5. User Responsibilities</h2>
          <p>You agree to provide accurate and complete information when using AutoBidly. You are responsible for maintaining the confidentiality of your account information. You agree not to use AutoBidly for any unlawful purpose or in violation of these terms.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>6. Limitation of Liability</h2>
          <p>AutoBidly is provided on an "as is" basis. AutoBidly LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of the service. Our total liability shall not exceed the amount you paid to use the service.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or prominent notice on our website. Continued use of AutoBidly after changes constitutes acceptance of the new terms.</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111', marginTop: 32, marginBottom: 12 }}>8. Contact</h2>
          <p>For questions about these Terms of Service, contact us at <a href="mailto:info@autobidly.com" style={{ color: '#1D9E75' }}>info@autobidly.com</a>.</p>

          <p style={{ marginTop: 40, padding: '20px', background: '#E1F5EE', borderRadius: 8, fontSize: 13, color: '#0F6E56' }}>
            AutoBidly LLC · Michigan · autobidly.vercel.app
          </p>
        </div>
      </div>
    </main>
  );
}