export default function DealsPage() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <iframe
        src="/deals.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
      <div style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#111',
        color: '#fff',
        padding: '14px 24px',
        borderRadius: 99,
        fontFamily: 'system-ui, sans-serif',
        fontSize: 14,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        zIndex: 9999,
        whiteSpace: 'nowrap',
      }}>
        <span>💡 Buyers who BidLocked saved avg <strong style={{ color: '#1D9E75' }}>$47/mo</strong> vs walk-in price</span>
        <a href="/bidlock" style={{
          background: '#1D9E75',
          color: '#fff',
          textDecoration: 'none',
          padding: '8px 18px',
          borderRadius: 99,
          fontSize: 13,
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}>Lock my price →</a>
      </div>
    </div>
  );
}