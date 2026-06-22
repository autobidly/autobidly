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

export default function DealerPage() {
  const [bidlocks, setBidlocks] = useState<BidLock[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  const [selected, setSelected] = useState<BidLock | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        window.location.href = '/dealer-login';
      } else {
        setAuthChecking(false);
        fetchBidlocks();
      }
    });
  }, []);

  function fetchBidlocks() {
    fetch('/api/dealer/bidlocks')
      .then(r => r.json())
      .then(data => {
        setBidlocks(data.bidlocks || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/dealer-login';
  }

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  }

  function timeLeft(dateStr: string) {
    const diff = new Date(dateStr).getTime() - Date.now();
    if (diff <= 0) return 'Expired';
    const hrs = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    return `${hrs}h ${mins}m`;
  }

  function creditLabel(credit: string) {
    if (credit === 'excellent') return '720+';
    if (credit === 'good') return '680-719';
    return '620-679';
  }

  function incentives(b: BidLock) {
    const list = [];
    if (b.employee) list.push('Employee/A-Plan');
    if (b.loyalty) list.push('Lease Loyalty');
    if (b.conquest) list.push('Conquest');
    if (b.military) list.push('Military');
    if (b.costco) list.push('Costco');
    return list;
  }

  if (authChecking) {
    return (
      <div style={{ fontFamily: 'system-ui', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f9f9f7' }}>
        <div style={{ color: '#999', fontSize: 14 }}>Checking credentials...</div>
      </div>
    );
  }

  const active = bidlocks.filter(b => b.status === 'active');

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: '#111', padding: '14px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>Auto<span style={{ color: '#1D9E75' }}>Bidly</span> <span style={{ fontSize: 12, color: '#666', fontWeight: 400 }}>Dealer Dashboard</span></div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <a href="/" style={{ fontSize: 13, color: '#666', textDecoration: 'none' }}>← Back to AutoBidly</a>
          <button onClick={handleLogout} style={{ fontSize: 13, color: '#999', background: 'none', border: '1px solid #333', borderRadius: 99, padding: '6px 16px', cursor: 'pointer' }}>Sign out</button>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px' }}>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
          {[
            { label: 'Active BidLocks', value: active.length.toString(), color: '#1D9E75' },
            { label: 'Total received', value: bidlocks.length.toString(), color: '#111' },
            { label: 'Avg payment target', value: bidlocks.length ? `$${Math.round(bidlocks.reduce((a, b) => a + b.payment, 0) / bidlocks.length)}/mo` : '$—', color: '#111' },
            { label: 'Most requested', value: bidlocks.length ? (() => { const counts: Record<string, number> = {}; bidlocks.forEach(b => { const k = `${b.make} ${b.model}`; counts[k] = (counts[k] || 0) + 1; }); return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || '—'; })() : '—', color: '#111' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '20px 24px', border: '1px solid #eee' }}>
              <div style={{ fontSize: 12, color: '#999', marginBottom: 6 }}>{stat.label}</div>
              <div style={{ fontSize: 24, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 380px' : '1fr', gap: 20 }}>

          {/* BIDLOCK LIST */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2 style={{ fontSize: 18, fontWeight: 600, color: '#111' }}>Incoming BidLocks</h2>
              <button onClick={fetchBidlocks} style={{ fontSize: 13, color: '#1D9E75', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>↻ Refresh</button>
            </div>

            {loading ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', color: '#999' }}>Loading BidLocks...</div>
            ) : bidlocks.length === 0 ? (
              <div style={{ background: '#fff', borderRadius: 12, padding: 40, textAlign: 'center', border: '1px solid #eee' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>📭</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#111', marginBottom: 8 }}>No BidLocks yet</div>
                <div style={{ fontSize: 14, color: '#888' }}>When buyers submit bids for vehicles in your area, they'll appear here.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {bidlocks.map((b, i) => (
                  <div key={i} onClick={() => setSelected(selected?.id === b.id ? null : b)} style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', border: `1.5px solid ${selected?.id === b.id ? '#1D9E75' : '#eee'}`, cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center' }}>
                    <div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>{b.make} {b.model} {b.trim}</span>
                        <span style={{ fontSize: 11, background: b.status === 'active' ? '#E1F5EE' : '#eee', color: b.status === 'active' ? '#0F6E56' : '#999', padding: '2px 8px', borderRadius: 99, fontWeight: 500 }}>{b.status}</span>
                      </div>
                      <div style={{ fontSize: 13, color: '#666', marginBottom: 6 }}>{b.config} · {b.cab} · {b.term}mo · {parseInt(b.miles).toLocaleString()} mi/yr · ZIP {b.zip}</div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 11, background: '#f9f9f7', padding: '2px 8px', borderRadius: 99, color: '#666' }}>Credit {creditLabel(b.credit)}</span>
                        {incentives(b).map((inc, j) => (
                          <span key={j} style={{ fontSize: 11, background: '#E1F5EE', color: '#0F6E56', padding: '2px 8px', borderRadius: 99 }}>{inc}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 24, fontWeight: 700, color: '#1D9E75' }}>${b.payment}/mo</div>
                      <div style={{ fontSize: 12, color: '#999' }}>${b.down} down</div>
                      <div style={{ fontSize: 11, color: '#999', marginTop: 4 }}>Expires in {timeLeft(b.expires_at)}</div>
                      <div style={{ fontSize: 11, color: '#bbb' }}>{timeAgo(b.created_at)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DETAIL PANEL */}
          {selected && (
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #eee', padding: 24, height: 'fit-content', position: 'sticky', top: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111' }}>BidLock Details</div>
                <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', fontSize: 18, color: '#999', cursor: 'pointer' }}>×</button>
              </div>

              <div style={{ fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 4 }}>{selected.make} {selected.model}</div>
              <div style={{ fontSize: 14, color: '#666', marginBottom: 20 }}>{selected.trim} · {selected.config} · {selected.cab}</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[
                  { label: 'Payment target', value: `$${selected.payment}/mo` },
                  { label: 'Down payment', value: `$${selected.down}` },
                  { label: 'Lease term', value: `${selected.term} months` },
                  { label: 'Miles/year', value: parseInt(selected.miles).toLocaleString() },
                  { label: 'ZIP code', value: selected.zip },
                  { label: 'Credit tier', value: creditLabel(selected.credit) },
                ].map((item, i) => (
                  <div key={i} style={{ background: '#f9f9f7', borderRadius: 8, padding: '12px 14px' }}>
                    <div style={{ fontSize: 11, color: '#999', marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {incentives(selected).length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>Verified incentives</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {incentives(selected).map((inc, i) => (
                      <span key={i} style={{ fontSize: 12, background: '#E1F5EE', color: '#0F6E56', padding: '4px 10px', borderRadius: 99 }}>{inc}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ background: '#f9f9f7', borderRadius: 10, padding: '14px 16px', marginBottom: 20, fontSize: 13, color: '#555', lineHeight: 1.6 }}>
                <strong style={{ color: '#111' }}>Expires in:</strong> {timeLeft(selected.expires_at)}<br />
                <strong style={{ color: '#111' }}>Submitted:</strong> {timeAgo(selected.created_at)}
              </div>

              <div style={{ background: '#E1F5EE', borderRadius: 10, padding: '14px 16px', marginBottom: 16, fontSize: 13, color: '#0F6E56', lineHeight: 1.6 }}>
                <strong>To accept:</strong> Buyer contact info revealed upon acceptance. Full acceptance flow coming soon.
              </div>

              <button style={{ width: '100%', background: '#1D9E75', color: '#fff', border: 'none', borderRadius: 99, padding: '14px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                Accept BidLock™ — ${selected.payment}/mo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}