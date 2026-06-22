"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://wwvieytvxygrbbtbxaar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmlleXR2eHlncmJidGJ4YWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NzU4NzQsImV4cCI6MjA5NzQ1MTg3NH0.gjmu7Gbl7cwPCeUmPMVlz8-iaschkRKPf2CbwYtqiRk'
);

export default function DealerLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    if (!email || !password) return;
    setLoading(true);
    setError('');
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      setError('Invalid email or password. Please try again.');
      setLoading(false);
    } else {
      window.location.href = '/dealer';
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid #ddd',
    fontSize: 15,
    fontFamily: 'system-ui',
    outline: 'none',
    marginBottom: 16,
    boxSizing: 'border-box' as const,
  };

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#f9f9f7', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400, padding: '0 20px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <a href="/" style={{ fontSize: 24, fontWeight: 600, textDecoration: 'none', color: '#111' }}>
            Auto<span style={{ color: '#1D9E75' }}>Bidly</span>
          </a>
          <div style={{ fontSize: 13, color: '#999', marginTop: 4 }}>Dealer Dashboard</div>
        </div>

        <div style={{ background: '#fff', borderRadius: 16, padding: 32, border: '1px solid #eee' }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111', marginBottom: 8 }}>Sign in</h1>
          <p style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>Access your dealer dashboard to view and accept incoming BidLocks.</p>

          <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Email address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@dealership.com"
            style={inputStyle}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
          />

          <label style={{ fontSize: 12, color: '#666', display: 'block', marginBottom: 6 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ ...inputStyle, marginBottom: 8 }}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
          />

          {error && (
            <div style={{ fontSize: 13, color: '#DC2626', marginBottom: 16 }}>{error}</div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !email || !password}
            style={{
              width: '100%',
              background: email && password ? '#1D9E75' : '#ccc',
              color: '#fff',
              border: 'none',
              borderRadius: 99,
              padding: '14px',
              fontSize: 15,
              fontWeight: 600,
              cursor: email && password ? 'pointer' : 'not-allowed',
              marginBottom: 16,
            }}
          >
            {loading ? 'Signing in...' : 'Sign in to dashboard'}
          </button>

          <div style={{ fontSize: 13, color: '#888', textAlign: 'center' }}>
            Not a dealer yet? <a href="mailto:info@autobidly.com" style={{ color: '#1D9E75', textDecoration: 'none', fontWeight: 500 }}>Contact us to get started</a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <a href="/" style={{ fontSize: 13, color: '#999', textDecoration: 'none' }}>← Back to AutoBidly</a>
        </div>
      </div>
    </main>
  );
}