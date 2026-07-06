"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://wwvieytvxygrbbtbxaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmlleXR2eHlncmJidGJ4YWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NzU4NzQsImV4cCI6MjA5NzQ1MTg3NH0.gjmu7Gbl7cwPCeUmPMVlz8-iaschkRKPf2CbwYtqiRk'
);

interface BidLock {
  id: string;
  make: string;
  model: string;
  trim: string;
  config: string;
  cab: string;
  term: string;
  miles: string;
  payment: number;
  down: number;
  zip: string;
  credit: string;
  loyalty: boolean;
  employee: boolean;
  conquest: boolean;
  military: boolean;
  costco: boolean;
  status: string;
  created_at: string;
  expires_at: string;
}

interface BuyerInfo {
  name: string;
  email: string;
  phone: string;
}

export default function DealerPage() {
  const [bidlocks, setBidlocks] = useState<BidLock[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  const [selected, setSelected] = useState<BidLock | null>(null);
  const [accepting, setAccepting] = useState(false);
  const [acceptedBuyer, setAcceptedBuyer] = useState<BuyerInfo | null>(null);
  const [dealerEmail, setDealerEmail] = useState('');
  const [showPast, setShowPast] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        window.location.href = '/dealer-login';
      } else {
        setDealerEmail(session.user.email || '');
        setAuthChecking(false);
        fetchBidlocks();
      }
    });
  }, []);

  function fetchBidlocks() {
    setLoading(true);
    fetch('/api/dealer/bidlocks')
      .then(r => r.json())
      .then(data => {
        setBidlocks(data.bidlocks || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  async function handleAccept() {
    if (!selected) return;
    setAccepting(true);
    try {
      const res = await fetch('/api/dealer/accept', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bidlockId: selected.id, dealerEmail }),
      });
      const data = await res.json();
      if (data.success) {
        setAcceptedBuyer(data.buyer);
        setBidlocks(prev => prev.map(b => b.id === selected.id ? { ...b, status: 'accepted' } : b));
        setSelected({ ...selected, status: 'accepted' });
      } else {
        alert(data.error || 'Failed to accept BidLock');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
    setAccepting(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/dealer-login';
  }

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 2) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  }

  function timeLeft(dateStr: string) {
    const diff = new Date(dateStr).getTime() - Date.now();
    if (diff <= 0) return null;
    const hrs = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    if (hrs > 24) return `${Math.floor(hrs / 24)}d ${hrs % 24}h`;
    return `${hrs}h ${mins}m`;
  }

  function creditLabel(credit: string) {
    if (credit === 'excellent') return '720+';
    if (credit === 'good') return '680-719';
    return '620-679';
  }

  function getIncentives(b: BidLock) {
    const list = [];
    if (b.employee) list.push('Employee pricing');
    if (b.loyalty) list.push('Lease loyalty');
    if (b.conquest) list.push('Conquest');
    if (b.military) list.push('Military');
    if (b.costco) list.push('Costco');
    return list;
  }

  function isExpired(b: BidLock) {
    return b.status !== 'accepted' && new Date(b.expires_at).getTime() < Date.now();
  }

  if (authChecking) {
    return (
      <div style={{ fontFamily: 'system-ui', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#0a0a0a' }}>
        <div style={{ color: '#666', fontSize: 14 }}>Loading dashboard...</div>
      </div>
    );
  }

  const activeBidlocks = bidlocks.filter(b => b.status === 'active' && !isExpired(b));
  const acceptedBidlocks = bidlocks.filter(b => b.status === 'accepted');
  const expiredBidlocks = bidlocks.filter(b => isExpired(b));

  const avgPayment = activeBidlocks.length
    ? Math.round(activeBidlocks.reduce((a, b) => a + b.payment, 0) / activeBidlocks.length)
    : 0;

  const vehicleCounts: Record<string, number> = {};
  bidlocks.forEach(b => {
    const k = `${b.make} ${b.model}`;
    vehicleCounts[k] = (vehicleCounts[k] || 0) + 1;
  });
  const topVehicles = Object.entries(vehicleCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);

  function BidLockCard({ b }: { b: BidLock }) {
    const expired = isExpired(b);
    const tLeft = timeLeft(b.expires_at);
    const incs = getIncentives(b);
    const isSelected = selected?.id === b.id;

    return (
      <div
        onClick={() => { setSelected(isSelected ? null : b); setAcceptedBuyer(null); }}
        style={{
          background: '#fff',
          borderRadius: 12,
          padding: '20px 22px',
          border: `1.5px solid ${isSelected ? '#1D9E75' : '#eee'}`,
          cursor: 'pointer',
          opacity: expired ? 0.5 : 1,
          transition: 'border-color 0.15s',
        }}
        onMouseEnter={e => { if (!isSelected) e.currentTarget.style.borderColor = '#1D9E75'; }}
        onMouseLeave={e => { if (!isSelected) e.currentTarget.style.borderColor = '#eee'; }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#111' }}>{b.make} {b.model} {b.trim}</span>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '2px 10px', borderRadius: 99,
                background: b.status === 'accepted' ? '#E1F5EE' : expired ? '#f5f5f5' : '#FEF3C7',
                color: b.status === 'accepted' ? '#0F6E56' : expired ? '#999' : '#B45309',
              }}>
                {b.status === 'accepted' ? '✓ Accepted' : expired ? 'Expired' : '● Active'}
              </span>
            </div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
              {b.config && b.config !== 'Standard' ? `${b.config} · ` : ''}{b.cab && b.cab !== 'Standard' ? `${b.cab} · ` : ''}{b.term}mo · {parseInt(b.miles).toLocaleString()} mi/yr · ZIP {b.zip}
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, background: '#f9f9f7', padding: '3px 10px', borderRadius: 99, color: '#666', border: '1px solid #eee' }}>
                Credit {creditLabel(b.credit)}
              </span>
              {incs.map((inc, j) => (
                <span key={j} style={{ fontSize: 11, background: '#E1F5EE', color: '#0F6E56', padding: '3px 10px', borderRadius: 99 }}>{inc}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontSize: 26, fontWeight: 700, color: '#1D9E75', lineHeight: 1 }}>${b.payment}<span style={{ fontSize: 14, fontWeight: 400, color: '#888' }}>/mo</span></div>
            <div style={{ fontSize: 12, color: '#999', marginTop: 3 }}>${b.down} down</div>
            {!expired && b.status === 'active' && tLeft && (
              <div style={{ fontSize: 11, color: '#B45309', marginTop: 4, fontWeight: 500 }}>⏱ {tLeft} left</div>
            )}
            <div style={{ fontSize: 11, color: '#ccc', marginTop: 4 }}>{timeAgo(b.created_at)}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f5f5f3', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: '#111', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span></div>
          <div style={{ fontSize: 12, color: '#444', background: '#1a1a1a', padding: '3px 10px', borderRadius: 99 }}>Dealer Dashboard</div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#555' }}>{dealerEmail}</span>
          <a href="/" style={{ fontSize: 13, color: '#555', textDecoration: 'none' }}>← AutoBidly</a>
          <button onClick={handleLogout} style={{ fontSize: 13, color: '#888', background: 'none', border: '1px solid #333', borderRadius: 99, padding: '6px 16px', cursor: 'pointer' }}>Sign out</button>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {[
            { label: 'Active BidLocks', value: activeBidlocks.length.toString(), sub: 'Ready to accept', color: '#1D9E75', bg: '#E1F5EE', border: '#1D9E75' },
            { label: 'Accepted this month', value: acceptedBidlocks.length.toString(), sub: 'Deals closed', color: '#0F6E56', bg: '#fff', border: '#eee' },
            { label: 'Avg payment target', value: avgPayment ? `$${avgPayment}/mo` : '—', sub: 'Active BidLocks only', color: '#111', bg: '#fff', border: '#eee' },
            { label: 'Most requested', value: topVehicles[0]?.[0] || '—', sub: `${topVehicles[0]?.[1] || 0} bids in last 30 days`, color: '#111', bg: '#fff', border: '#eee' },
          ].map((stat, i) => (
            <div key={i} style={{ background: stat.bg, borderRadius: 12, padding: '20px 24px', border: `1.5px solid ${stat.border}` }}>
              <div style={{ fontSize: 12, color: i === 0 ? stat.color : '#999', marginBottom: 6, fontWeight: 500 }}>{stat.label}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: stat.color, marginBottom: 3 }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: i === 0 ? '#1D9E75' : '#bbb' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 420px' : '1fr', gap: 24 }}>

          {/* LEFT COLUMN */}
          <div>

            {/* MARKET DEMAND */}
            {topVehicles.length > 0 && (
              <div style={{ background: '#111', borderRadius: 12, padding: '20px 24px', marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 14 }}>
                  Buyer demand in your market — last 30 days
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {topVehicles.map(([vehicle, count], i) => (
                    <div key={i} style={{ background: '#1a1a1a', borderRadius: 8, padding: '10px 16px', border: '1px solid #222' }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 3 }}>{vehicle}</div>
                      <div style={{ fontSize: 12, color: '#666' }}>{count} bid{count !== 1 ? 's' : ''} in your market</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ACTIVE BIDLOCKS */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: '#111', marginBottom: 2 }}>Active BidLocks</h2>
                <div style={{ fontSize: 13, color: '#999' }}>Buyers waiting for a dealer to accept their price</div>
              </div>
              <button onClick={fetchBidlocks} style={{ fontSize: 13, color: '#1D9E75', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>↻ Refresh</button>
            </div>

            {loading ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', color: '#999', border: '1px solid #eee' }}>Loading BidLocks...</div>
            ) : activeBidlocks.length === 0 ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', border: '1px solid #eee', marginBottom: 20 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>📭</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 8 }}>No active BidLocks right now</div>
                <div style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>When buyers submit bids for vehicles in your area, they'll appear here. Check back soon or refresh.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {activeBidlocks.map((b, i) => <BidLockCard key={i} b={b} />)}
              </div>
            )}

            {/* ACCEPTED */}
            {acceptedBidlocks.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111', marginBottom: 12 }}>✓ Accepted deals</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {acceptedBidlocks.map((b, i) => <BidLockCard key={i} b={b} />)}
                </div>
              </div>
            )}

            {/* PAST / EXPIRED */}
            {expiredBidlocks.length > 0 && (
              <div>
                <button
                  onClick={() => setShowPast(!showPast)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#999', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 12, padding: 0 }}
                >
                  <span>{showPast ? '▾' : '▸'}</span>
                  <span>Past BidLocks ({expiredBidlocks.length})</span>
                </button>
                {showPast && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {expiredBidlocks.map((b, i) => <BidLockCard key={i} b={b} />)}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* DETAIL PANEL */}
          {selected && (
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: 24, height: 'fit-content', position: 'sticky', top: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#111' }}>BidLock™ Details</div>
                <button onClick={() => { setSelected(null); setAcceptedBuyer(null); }} style={{ background: 'none', border: 'none', fontSize: 20, color: '#bbb', cursor: 'pointer', lineHeight: 1 }}>×</button>
              </div>

              <div style={{ background: '#111', borderRadius: 10, padding: '16px 18px', marginBottom: 20 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{selected.make} {selected.model} {selected.trim}</div>
                <div style={{ fontSize: 13, color: '#888', marginBottom: 12 }}>
                  {selected.config && selected.config !== 'Standard' ? `${selected.config} · ` : ''}{selected.cab && selected.cab !== 'Standard' ? `${selected.cab} · ` : ''}{selected.term}mo · {parseInt(selected.miles).toLocaleString()} mi/yr
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: '#1D9E75', lineHeight: 1 }}>${selected.payment}</div>
                  <div style={{ fontSize: 16, color: '#888' }}>/mo</div>
                  <div style={{ fontSize: 14, color: '#555', marginLeft: 8 }}>· ${selected.down} down</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
                {[
                  { label: 'ZIP code', value: selected.zip },
                  { label: 'Credit tier', value: creditLabel(selected.credit) },
                  { label: 'Submitted', value: timeAgo(selected.created_at) },
                  { label: 'Expires', value: timeLeft(selected.expires_at) || 'Expired' },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#f9f9f7', borderRadius: 8, padding: '12px 14px' }}>
                    <div style={{ fontSize: 11, color: '#999', marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {getIncentives(selected).length > 0 && (
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 12, color: '#999', marginBottom: 8, fontWeight: 500 }}>Buyer incentives</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {getIncentives(selected).map((inc, i) => (
                      <span key={i} style={{ fontSize: 12, background: '#E1F5EE', color: '#0F6E56', padding: '4px 12px', borderRadius: 99, fontWeight: 500 }}>{inc}</span>
                    ))}
                  </div>
                </div>
              )}

              {acceptedBuyer ? (
                <div>
                  <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '18px', marginBottom: 14 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0F6E56', marginBottom: 12 }}>✓ Deal accepted — buyer contact info:</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 6 }}>{acceptedBuyer.name}</div>
                    <a href={`tel:${acceptedBuyer.phone}`} style={{ fontSize: 15, color: '#1D9E75', display: 'block', marginBottom: 4, textDecoration: 'none', fontWeight: 500 }}>{acceptedBuyer.phone}</a>
                    <a href={`mailto:${acceptedBuyer.email}`} style={{ fontSize: 14, color: '#1D9E75', display: 'block', textDecoration: 'none' }}>{acceptedBuyer.email}</a>
                  </div>
                  <div style={{ background: '#f9f9f7', borderRadius: 10, padding: '14px 16px', fontSize: 13, color: '#555', lineHeight: 1.7 }}>
                    <strong style={{ color: '#111' }}>Next steps:</strong> Contact the buyer within 2 hours. They have <strong>72 hours</strong> to come in and sign. Price is locked at <strong>${selected.payment}/mo</strong> — no renegotiation.
                  </div>
                </div>
              ) : selected.status === 'accepted' ? (
                <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '14px 16px', fontSize: 14, color: '#0F6E56', textAlign: 'center', fontWeight: 500 }}>
                  ✓ This BidLock has been accepted
                </div>
              ) : isExpired(selected) ? (
                <div style={{ background: '#f9f9f7', borderRadius: 10, padding: '14px 16px', fontSize: 14, color: '#999', textAlign: 'center' }}>
                  This BidLock has expired
                </div>
              ) : (
                <div>
                  <div style={{ background: '#FFFBEB', borderRadius: 10, padding: '12px 16px', marginBottom: 14, fontSize: 13, color: '#B45309', lineHeight: 1.6, border: '1px solid #FDE68A' }}>
                    💡 Buyer contact info is revealed the moment you accept. You commit to the price — the buyer has 72 hours to sign.
                  </div>
                  <button
                    onClick={handleAccept}
                    disabled={accepting}
                    style={{
                      width: '100%',
                      background: accepting ? '#ccc' : '#1D9E75',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 12,
                      padding: '16px',
                      fontSize: 16,
                      fontWeight: 700,
                      cursor: accepting ? 'not-allowed' : 'pointer',
                      lineHeight: 1.3,
                    }}
                  >
                    {accepting ? 'Accepting...' : `Accept BidLock™ — $${selected.payment}/mo · ${selected.make} ${selected.model}`}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}