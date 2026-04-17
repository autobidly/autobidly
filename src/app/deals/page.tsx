export default function DealsPage() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>AutoBidly — Who's Got the Lowest Deal Near You?</title>
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>
:root {
  --ink:#0f0e0d;--ink2:#1d1c1a;--paper:#f5f3ee;--paper2:#ede9e1;--paper3:#e4dfd5;
  --rule:#d6d0c5;--muted:#9a9488;--signal:#d4390f;--signal2:#e8580a;
  --go:#1a7a3c;--go-soft:#edf7f1;--warn:#b45309;--warn-soft:#fef9ee;
  --info:#1d4ed8;--info-soft:#eff4ff;--rank1:#d4390f;--verified:#1a7a3c;
  --shadow:0 1px 3px rgba(15,14,13,.08),0 4px 12px rgba(15,14,13,.06);
  --shadow2:0 2px 8px rgba(15,14,13,.1),0 12px 32px rgba(15,14,13,.08);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;font-size:15px}
body{background:var(--paper);color:var(--ink);font-family:'Familjen Grotesk',sans-serif;line-height:1.5;overflow-x:hidden}
header{background:var(--ink);position:sticky;top:0;z-index:100;border-bottom:3px solid var(--signal)}
.header-inner{max-width:1280px;margin:0 auto;padding:0 32px;height:60px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:baseline;gap:0;text-decoration:none}
.logo-auto{font-size:22px;font-weight:700;color:#c8c3bb;letter-spacing:-.3px}
.logo-bidly{font-size:22px;font-weight:700;color:white;letter-spacing:-.3px}
.logo-tm{font-size:9px;color:var(--signal);font-weight:700;letter-spacing:1px;margin-left:3px;vertical-align:super}
.header-nav{display:flex;align-items:center;gap:28px}
.header-nav a{font-size:13px;font-weight:600;color:#666;text-decoration:none;letter-spacing:.2px;transition:color .15s}
.header-nav a:hover{color:white}
.back-btn{padding:8px 20px;background:transparent;color:#888;border:1px solid #333;border-radius:3px;font-family:'Familjen Grotesk',sans-serif;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:.3px;transition:all .15s}
.back-btn:hover{color:white;border-color:#666}
.header-cta{padding:8px 20px;background:var(--signal);color:white;border:none;border-radius:3px;font-family:'Familjen Grotesk',sans-serif;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.3px;transition:background .15s}
.header-cta:hover{background:var(--signal2)}
.hero{background:var(--ink);padding:52px 32px 0;position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--signal),transparent)}
.hero-inner{max-width:1280px;margin:0 auto}
.hero-eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--go);box-shadow:0 0 0 3px rgba(26,122,60,.2);animation:livepulse 2s infinite}
@keyframes livepulse{0%,100%{box-shadow:0 0 0 3px rgba(26,122,60,.2)}50%{box-shadow:0 0 0 6px rgba(26,122,60,.05)}}
.live-label{font-size:12px;font-weight:700;color:var(--go);letter-spacing:1px;text-transform:uppercase}
.live-count{font-size:12px;color:#555;font-family:'JetBrains Mono',monospace}
.hero-title{font-size:clamp(32px,4vw,52px);font-weight:700;color:white;line-height:1.05;letter-spacing:-.5px;margin-bottom:8px}
.hero-title .highlight{color:var(--signal);font-style:italic}
.hero-sub{font-size:16px;color:#888;margin-bottom:36px;max-width:540px;font-weight:400}
.hero-sub strong{color:#bbb}
.search-card{background:white;border-radius:8px 8px 0 0;padding:28px 28px 0;box-shadow:0 -4px 32px rgba(0,0,0,.3)}
.search-top{display:grid;grid-template-columns:140px 1fr 1fr 1fr 130px 130px;gap:12px;margin-bottom:14px;align-items:end}
.search-mid{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;margin-bottom:16px}
.sf{display:flex;flex-direction:column;gap:4px}
.sf label{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted)}
.sf input,.sf select{background:var(--paper);border:1.5px solid var(--rule);border-radius:4px;padding:10px 12px;font-family:'Familjen Grotesk',sans-serif;font-size:14px;color:var(--ink);transition:border-color .15s;appearance:none;-webkit-appearance:none}
.sf input:focus,.sf select:focus{outline:none;border-color:var(--signal)}
.incentives-row{display:flex;align-items:center;gap:8px;padding:14px 0;border-top:1.5px solid var(--paper2);flex-wrap:wrap}
.incentives-label{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);white-space:nowrap;margin-right:4px}
.chip{display:flex;align-items:center;gap:5px;padding:6px 12px;border:1.5px solid var(--rule);border-radius:100px;font-size:12px;font-weight:600;color:var(--muted);cursor:pointer;transition:all .15s;user-select:none;background:white}
.chip input{display:none}
.chip:has(input:checked){border-color:var(--signal);color:var(--signal);background:#fff5f3}
.search-action{padding:0 0 20px;display:flex;gap:10px;align-items:center;margin-top:4px}
.search-btn{flex:1;padding:14px;background:var(--ink);color:white;border:none;border-radius:5px;font-family:'Familjen Grotesk',sans-serif;font-size:15px;font-weight:700;cursor:pointer;letter-spacing:.3px;transition:background .15s;display:flex;align-items:center;justify-content:center;gap:8px}
.search-btn:hover{background:var(--signal)}
.search-btn svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:2.5}
.no-bs-note{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--go);font-weight:600;white-space:nowrap}
.page{max-width:1280px;margin:0 auto;padding:32px}
.meta-bar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px}
.meta-left h2{font-size:20px;font-weight:700;letter-spacing:-.2px}
.meta-left h2 span{color:var(--signal)}
.meta-left p{font-size:13px;color:var(--muted);margin-top:2px}
.meta-left p strong{color:var(--go)}
.meta-right{display:flex;gap:8px;align-items:center}
.sort-label{font-size:12px;color:var(--muted);font-weight:600}
.sort-select{padding:7px 12px;border:1.5px solid var(--rule);border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:13px;background:white;color:var(--ink);cursor:pointer}
.view-btns{display:flex;border:1.5px solid var(--rule);border-radius:4px;overflow:hidden}
.view-btn{padding:6px 12px;background:white;border:none;cursor:pointer;font-size:16px;transition:background .15s;border-left:1.5px solid var(--rule)}
.view-btn:first-child{border-left:none}
.view-btn.active,.view-btn:hover{background:var(--ink);color:white}
.truth-banner{background:var(--go-soft);border:1.5px solid rgba(26,122,60,.2);border-radius:6px;padding:12px 18px;margin-bottom:24px;display:flex;align-items:flex-start;gap:10px}
.truth-banner p{font-size:13px;color:#166534;line-height:1.6}
.truth-banner strong{font-weight:700}
.deals-table{width:100%;border-collapse:separate;border-spacing:0 8px}
.deals-table thead tr th{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:0 16px 4px;text-align:left}
.deal-row{background:white;box-shadow:var(--shadow);cursor:pointer;transition:box-shadow .15s,transform .1s}
.deal-row:hover{box-shadow:var(--shadow2);transform:translateY(-1px)}
.deal-row td{padding:18px 16px;vertical-align:middle}
.deal-row td:first-child{border-radius:6px 0 0 6px;padding-left:20px}
.deal-row td:last-child{border-radius:0 6px 6px 0;padding-right:20px}
.rank-badge{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:700}
.rank-1{background:var(--signal);color:white}
.rank-2{background:var(--ink2);color:white}
.rank-3{background:#6b7280;color:white}
.rank-n{background:var(--paper2);color:var(--muted)}
.dealer-name-row{display:flex;align-items:center;gap:8px;margin-bottom:4px}
.dealer-name{font-size:15px;font-weight:700}
.v-badge{display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:700;color:var(--verified);background:var(--go-soft);border:1px solid rgba(26,122,60,.2);padding:2px 6px;border-radius:2px;letter-spacing:.3px}
.featured-badge{display:inline-flex;align-items:center;gap:3px;font-size:10px;font-weight:700;color:var(--warn);background:var(--warn-soft);border:1px solid rgba(180,83,9,.2);padding:2px 6px;border-radius:2px;letter-spacing:.3px}
.dealer-meta{font-size:12px;color:var(--muted)}
.timestamp{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:4px}
.ts-dot{width:5px;height:5px;border-radius:50%;background:var(--go);flex-shrink:0}
.price-main{font-size:28px;font-weight:700;letter-spacing:-.5px;line-height:1;color:var(--ink);font-variant-numeric:tabular-nums}
.price-main.best{color:var(--signal)}
.price-sub{font-size:12px;color:var(--muted);margin-top:3px}
.term-tag{display:inline-block;padding:3px 8px;border-radius:2px;font-size:11px;font-weight:700;font-family:'JetBrains Mono',monospace;margin:2px 2px 2px 0;border:1px solid var(--rule);background:var(--paper);color:var(--muted)}
.cond-clean{font-size:12px;color:var(--go);font-weight:700;display:flex;align-items:center;gap:4px;margin-bottom:4px}
.cond-warn{font-size:12px;color:var(--warn);font-weight:700;display:flex;align-items:center;gap:4px;margin-bottom:4px}
.cond-text{font-size:12px;color:var(--muted);line-height:1.5}
.dist-col{min-width:90px;font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted);white-space:nowrap}
.deal-btn{padding:9px 18px;background:var(--ink);color:white;border:none;border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:background .15s;white-space:nowrap}
.deal-btn:hover{background:var(--signal)}
.deal-btn.save{background:white;color:var(--ink);border:1.5px solid var(--rule);margin-top:6px;width:100%}
.deal-btn.save:hover{border-color:var(--ink)}
.deal-expand{display:none;background:#fafaf8}
.deal-expand td{padding:0!important}
.deal-expand.open{display:table-row}
.expand-inner{padding:20px 20px 20px 68px;border-top:1.5px solid var(--paper2)}
.expand-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-bottom:16px}
.expand-field{background:white;border:1.5px solid var(--rule);border-radius:5px;padding:12px}
.ef-label{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
.ef-value{font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:600;color:var(--ink)}
.ef-value.highlight{color:var(--signal);font-size:16px}
.ef-value.green{color:var(--go)}
.expand-actions{display:flex;gap:10px}
.ea-btn{padding:10px 24px;border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;border:none}
.ea-btn.primary{background:var(--signal);color:white}
.ea-btn.primary:hover{background:var(--signal2)}
.ea-btn.ghost{background:white;color:var(--ink);border:1.5px solid var(--rule)}
.ea-btn.ghost:hover{border-color:var(--ink)}
.ea-btn.notify{background:var(--go-soft);color:var(--go);border:1.5px solid rgba(26,122,60,.2)}
.cards-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px}
.deal-card{background:white;border-radius:8px;box-shadow:var(--shadow);overflow:hidden;cursor:pointer;transition:box-shadow .15s,transform .1s;position:relative}
.deal-card:hover{box-shadow:var(--shadow2);transform:translateY(-2px)}
.card-header{height:120px;display:flex;align-items:center;justify-content:center;font-size:52px;position:relative;background:var(--paper2)}
.card-header.best-bg{background:linear-gradient(135deg,#fff5f3,#fde8e2)}
.card-body{padding:18px}
.card-dealer{font-size:13px;font-weight:700;margin-bottom:2px;display:flex;align-items:center;gap:6px}
.card-dist{font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-bottom:12px}
.card-price{font-size:34px;font-weight:700;letter-spacing:-.5px;line-height:1;margin-bottom:2px}
.card-price.best{color:var(--signal)}
.card-price-sub{font-size:12px;color:var(--muted);margin-bottom:12px}
.card-tags{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:12px}
.card-tag{padding:3px 7px;border-radius:2px;font-size:10px;font-weight:700;font-family:'JetBrains Mono',monospace;border:1px solid var(--rule);background:var(--paper);color:var(--muted)}
.card-cond{font-size:11px;margin-bottom:14px;line-height:1.5}
.card-cond.clean{color:var(--go)}
.card-cond.warn{color:var(--warn)}
.card-ts{font-size:10px;color:var(--muted);font-family:'JetBrains Mono',monospace;display:flex;align-items:center;gap:4px;margin-bottom:14px}
.card-footer{display:flex;gap:8px;padding-top:12px;border-top:1.5px solid var(--paper2)}
.card-footer button{flex:1;padding:9px;border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:13px;font-weight:700;cursor:pointer;border:none;transition:all .15s}
.card-footer .cf-primary{background:var(--ink);color:white}
.card-footer .cf-primary:hover{background:var(--signal)}
.card-footer .cf-ghost{background:var(--paper);color:var(--ink)}
.alert-bar{background:var(--ink2);border-radius:8px;padding:24px 28px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.alert-bar-left h3{font-size:17px;font-weight:700;color:white;margin-bottom:4px}
.alert-bar-left p{font-size:13px;color:#888}
.alert-bar-right{display:flex;gap:10px;flex-shrink:0}
.alert-input{padding:10px 14px;background:var(--ink);border:1.5px solid #333;border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:14px;color:white;width:220px}
.alert-input::placeholder{color:#555}
.alert-input:focus{outline:none;border-color:var(--signal)}
.alert-submit{padding:10px 20px;background:var(--signal);color:white;border:none;border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;transition:background .15s}
.alert-submit:hover{background:var(--signal2)}
.bidlock-teaser{background:var(--paper2);border:2px dashed var(--rule);border-radius:8px;padding:28px;text-align:center;margin-top:32px}
.bt-label{font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.bt-title{font-size:22px;font-weight:700;letter-spacing:-.3px;margin-bottom:8px}
.bt-title span{color:var(--signal)}
.bt-sub{font-size:14px;color:var(--muted);margin-bottom:18px;max-width:500px;margin-left:auto;margin-right:auto}
.bt-btn{padding:12px 32px;background:var(--ink);color:white;border:none;border-radius:4px;font-family:'Familjen Grotesk',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:background .15s}
.bt-btn:hover{background:var(--signal)}
.coming-soon{display:inline-block;margin-left:8px;font-size:10px;font-weight:700;background:var(--signal);color:white;padding:2px 7px;border-radius:2px;letter-spacing:.5px;vertical-align:middle}
.modal-ov{display:none;position:fixed;inset:0;z-index:200;background:rgba(15,14,13,.6);align-items:center;justify-content:center;padding:20px}
.modal-ov.open{display:flex}
.modal-box{background:white;border-radius:10px;padding:32px;max-width:560px;width:100%;box-shadow:0 32px 80px rgba(0,0,0,.25);max-height:90vh;overflow-y:auto}
.modal-close{float:right;background:none;border:none;font-size:20px;cursor:pointer;color:var(--muted);line-height:1;padding:0}
.modal-box h3{font-size:22px;font-weight:700;letter-spacing:-.3px;clear:both;margin-bottom:2px}
.modal-box h3 span{color:var(--signal)}
.modal-dealer{font-size:14px;color:var(--muted);margin-bottom:20px;padding-bottom:18px;border-bottom:1.5px solid var(--paper2)}
.modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px}
.mg{background:var(--paper);border:1.5px solid var(--rule);border-radius:5px;padding:13px}
.mg-l{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--muted);margin-bottom:3px}
.mg-v{font-family:'JetBrains Mono',monospace;font-size:15px;font-weight:600;color:var(--ink)}
.mg-v.signal{color:var(--signal);font-size:20px}
.mg-v.green{color:var(--go)}
.modal-actions{display:flex;gap:10px}
.modal-actions button{flex:1;padding:13px;border-radius:5px;font-family:'Familjen Grotesk',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;border:none}
.ma-primary{background:var(--signal);color:white}
.ma-primary:hover{background:var(--signal2)}
.ma-ghost{background:var(--paper);color:var(--ink);border:1.5px solid var(--rule)!important}
.toast-c{position:fixed;bottom:20px;right:20px;z-index:300;display:flex;flex-direction:column;gap:8px}
.toast{display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:6px;font-size:13px;font-weight:600;max-width:340px;box-shadow:0 4px 20px rgba(0,0,0,.15)}
.toast.ok{background:var(--ink);color:var(--go)}
.toast.info{background:var(--ink);color:#93c5fd}
.toast.warn{background:var(--ink);color:#fcd34d}
#cardsView{display:none}
</style>
</head>
<body>
<header>
  <div class="header-inner">
    <a class="logo" href="/">
      <span class="logo-auto">Auto</span><span class="logo-bidly">Bidly</span><span class="logo-tm">™</span>
    </a>
    <nav class="header-nav">
      <a href="/">Home</a>
      <a href="#">How It Works</a>
      <a href="#">For Dealers</a>
    </nav>
    <button class="header-cta" onclick="showToast('Coming soon — get notified at launch','info')">Get Deal Alerts</button>
  </div>
</header>
<div class="hero">
  <div class="hero-inner">
    <div class="hero-eyebrow">
      <div class="live-dot"></div>
      <span class="live-label">Live Index</span>
      <span class="live-count" id="liveCount">— 11,847 verified deals across 340 dealerships</span>
    </div>
    <h1 class="hero-title">Who's got the <span class="highlight">lowest deal</span><br>near you right now?</h1>
    <p class="hero-sub">Every dealer. <strong>Real prices.</strong> Only the incentives you actually qualify for. Updated every 12 hours.</p>
    <div class="search-card">
      <div class="search-top">
        <div class="sf"><label>ZIP Code</label><input type="text" id="s_zip" value="48167" placeholder="Your ZIP"/></div>
        <div class="sf"><label>Make</label>
          <select id="s_make" onchange="updateModels()">
            <option>Ford</option><option>Chevrolet</option><option>GMC</option><option>Ram</option>
            <option>Jeep</option><option>Dodge</option><option>Toyota</option><option>Honda</option>
            <option>Nissan</option><option>Hyundai</option><option>Kia</option><option>Subaru</option>
            <option>BMW</option><option>Mercedes-Benz</option><option>Audi</option>
            <option>Cadillac</option><option>Buick</option><option>Lincoln</option>
            <option>Lexus</option><option>Tesla</option><option>Rivian</option>
          </select>
        </div>
        <div class="sf"><label>Model</label><select id="s_model" onchange="updateTrims()"></select></div>
        <div class="sf"><label>Deal Type</label>
          <select id="s_type">
            <option value="lease">Lease</option>
            <option value="finance">Finance</option>
            <option value="cash">Cash Purchase</option>
          </select>
        </div>
        <div class="sf"><label>Radius</label>
          <select id="s_radius">
            <option>25 miles</option><option selected>50 miles</option><option>75 miles</option><option>100 miles</option>
          </select>
        </div>
        <div class="sf"><label>Max Monthly</label><input type="number" id="s_max" placeholder="Any"/></div>
      </div>
      <div class="search-mid">
        <div class="sf"><label>Trim</label><select id="s_trim"><option>Any Trim</option></select></div>
        <div class="sf"><label>Config</label><select id="s_config"><option>Any</option></select></div>
        <div class="sf"><label>Cab / Body</label><select id="s_cab"><option>Any</option></select></div>
        <div class="sf"><label>Engine</label><select id="s_engine"><option>Any</option></select></div>
        <div class="sf"><label>Term</label>
          <select><option>Any</option><option>24 mo</option><option>36 mo</option><option>48 mo</option></select>
        </div>
        <div class="sf"><label>Miles/Yr</label>
          <select><option>Any</option><option>10,000</option><option>12,000</option><option>15,000</option></select>
        </div>
        <div class="sf"><label>Credit</label>
          <select><option>Excellent 720+</option><option>Good 680+</option><option>Fair 620+</option></select>
        </div>
      </div>
      <div class="incentives-row">
        <span class="incentives-label">My Incentives:</span>
        <label class="chip"><input type="checkbox"/> 🔄 Lease Loyalty</label>
        <label class="chip"><input type="checkbox"/> 🏷️ Employee / A-Plan</label>
        <label class="chip"><input type="checkbox"/> 🎖️ Military</label>
        <label class="chip"><input type="checkbox"/> 🎓 College Grad</label>
        <label class="chip"><input type="checkbox"/> ⚔️ Conquest</label>
        <label class="chip"><input type="checkbox"/> 🔋 EV Credit</label>
        <label class="chip"><input type="checkbox"/> 🚗 Trade-In</label>
      </div>
      <div class="search-action">
        <button class="search-btn" onclick="doSearch()">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" stroke-linecap="round"/></svg>
          SEARCH REAL DEALS
        </button>
        <div class="no-bs-note">🛡️ Only YOUR incentives applied — no bait pricing</div>
      </div>
    </div>
  </div>
</div>
<div class="page">
  <div class="truth-banner">
    <span style="font-size:18px;flex-shrink:0">✅</span>
    <p><strong>How we verify pricing:</strong> Every deal is pulled from manufacturer incentive feeds, Edmunds inventory data, and direct dealer submissions — then cross-checked against real window sticker data. Prices shown reflect <strong>only the incentives you selected</strong>. Deals are timestamped. Anything older than 72 hours is marked stale.</p>
  </div>
  <div class="alert-bar">
    <div class="alert-bar-left">
      <h3>📬 Get Alerted When This Deal Gets Cheaper</h3>
      <p>We'll email you the moment a lower deal appears near you. Free, no account needed.</p>
    </div>
    <div class="alert-bar-right">
      <input class="alert-input" type="email" placeholder="your@email.com" id="alertEmail"/>
      <button class="alert-submit" onclick="signupAlert()">Alert Me →</button>
    </div>
  </div>
  <div class="meta-bar">
    <div class="meta-left">
      <h2 id="resultsHeading">2025 Ford F-150 <span>— 8 Dealers Near 48167</span></h2>
      <p>Showing lease deals · 36mo · 12k mi/yr · Good credit · <strong>$0 additional incentives</strong> · 50mi radius</p>
    </div>
    <div class="meta-right">
      <span class="sort-label">Sort:</span>
      <select class="sort-select" onchange="handleSort(this.value)">
        <option value="price">Lowest Price</option>
        <option value="dist">Closest</option>
        <option value="verified">Verified First</option>
        <option value="recent">Most Recent</option>
      </select>
      <div class="view-btns">
        <button class="view-btn active" id="btnTable" onclick="setView('table')">☰</button>
        <button class="view-btn" id="btnCards" onclick="setView('cards')">⊞</button>
      </div>
    </div>
  </div>
  <div id="tableView">
    <table class="deals-table">
      <thead><tr>
        <th style="width:48px">#</th>
        <th>Dealership</th>
        <th>Monthly Payment</th>
        <th>Terms</th>
        <th>Conditions</th>
        <th>Distance</th>
        <th>Last Verified</th>
        <th></th>
      </tr></thead>
      <tbody id="tableBody"></tbody>
    </table>
  </div>
  <div id="cardsView"><div class="cards-grid" id="cardsGrid"></div></div>
  <div class="bidlock-teaser">
    <div class="bt-label">Coming Soon</div>
    <h2 class="bt-title">Don't see your price? <span>Post it.</span><span class="coming-soon">PHASE 2</span></h2>
    <p class="bt-sub">BidLock™ is coming. Post exactly what you'll pay for exactly the vehicle you want. Dealers in your area claim it if they can match. You never step foot in a showroom to negotiate.</p>
    <button class="bt-btn" onclick="showToast('You are on the BidLock waitlist!','ok')">Join BidLock™ Waitlist →</button>
  </div>
</div>
<div class="modal-ov" id="dealModal">
  <div class="modal-box">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h3 id="m_title">Ford <span>F-150</span></h3>
    <div class="modal-dealer" id="m_dealer"></div>
    <div class="modal-grid" id="m_grid"></div>
    <div class="modal-actions">
      <button class="ma-primary" onclick="closeModal();showToast('Dealer contacted — they will reach you within 2 hrs','ok')">Contact This Dealer</button>
      <button class="ma-ghost" onclick="closeModal();showToast('Deal saved to your list','ok')">Save Deal</button>
    </div>
  </div>
</div>
<div class="toast-c" id="toastC"></div>
<script>
const DEALS=[{rank:1,name:'LaFontaine Ford',short:'LF',verified:true,featured:false,monthly:479,down:0,total:'$17,244',msrp:42180,term:'36mo',miles:'12k/yr',mf:'0.00125',residual:'58%',conditions:'clean',condText:'No special incentives required. Standard lease, good credit.',stock:4,dist:4.2,distStr:'4.2 mi',claimed:'March 22 9:14 AM',claimedAgo:'14 hrs ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:2,name:'Bill Brown Ford',short:'BB',verified:true,featured:false,monthly:491,down:0,total:'$17,676',msrp:42180,term:'36mo',miles:'12k/yr',mf:'0.00131',residual:'57%',conditions:'clean',condText:'Ford Red Carpet lease. Standard good-credit offer.',stock:6,dist:7.1,distStr:'7.1 mi',claimed:'March 23 6:30 AM',claimedAgo:'3 hrs ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:3,name:'Varsity Ford',short:'VF',verified:true,featured:true,monthly:508,down:500,total:'$18,788',msrp:43200,term:'36mo',miles:'12k/yr',mf:'0.00138',residual:'57%',conditions:'warn',condText:'$500 due at signing required.',stock:2,dist:9.4,distStr:'9.4 mi',claimed:'March 21 3:45 PM',claimedAgo:'2 days ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:4,name:'Suburban Ford',short:'SF',verified:true,featured:false,monthly:517,down:0,total:'$18,612',msrp:41900,term:'36mo',miles:'12k/yr',mf:'0.00142',residual:'56%',conditions:'clean',condText:'No special incentives. Standard rate.',stock:3,dist:11.8,distStr:'11.8 mi',claimed:'March 22 5:00 PM',claimedAgo:'18 hrs ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:5,name:'Hines Park Ford',short:'HP',verified:false,featured:false,monthly:531,down:0,total:'$19,116',msrp:43800,term:'36mo',miles:'12k/yr',mf:'0.00149',residual:'56%',conditions:'warn',condText:'Advertised $489/mo requires Ford Owner Loyalty. Without it, this is the real price.',stock:5,dist:13.2,distStr:'13.2 mi',claimed:'March 19 11:20 AM',claimedAgo:'4 days ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:6,name:'Bob Maxey Ford',short:'BM',verified:true,featured:false,monthly:544,down:1000,total:'$20,584',msrp:44100,term:'36mo',miles:'12k/yr',mf:'0.00152',residual:'55%',conditions:'warn',condText:'Requires $1,000 cap cost reduction.',stock:2,dist:18.5,distStr:'18.5 mi',claimed:'March 23 8:00 AM',claimedAgo:'4 hrs ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:7,name:'Courtesy Ford',short:'CL',verified:false,featured:false,monthly:559,down:0,total:'$20,124',msrp:44900,term:'36mo',miles:'12k/yr',mf:'0.00160',residual:'54%',conditions:'warn',condText:'Advertised rate requires 740+ credit.',stock:1,dist:22.1,distStr:'22.1 mi',claimed:'March 17 2:15 PM',claimedAgo:'6 days ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:8,name:'Gateway Ford',short:'GW',verified:false,featured:false,monthly:588,down:0,total:'$21,168',msrp:45200,term:'36mo',miles:'12k/yr',mf:'0.00171',residual:'53%',conditions:'warn',condText:'$999 dealer market adjustment included.',stock:1,dist:28.4,distStr:'28.4 mi',claimed:'March 14 4:00 PM',claimedAgo:'9 days ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'}];

const DEMO_DATA={'GMC':{'Sierra 1500':[{rank:1,name:'LaFontaine Buick GMC',verified:true,monthly:529,down:0,total:'$19,044',msrp:48200,term:'36mo',miles:'12k/yr',mf:'0.00148',residual:'55%',conditions:'clean',condText:'No special incentives.',stock:3,dist:3.8,distStr:'3.8 mi',claimed:'March 22 10:00 AM',claimedAgo:'12 hrs ago',emoji:'🛻',make:'GMC',model:'Sierra 1500',trim:'SLE 4x4 Crew',dealType:'lease'},{rank:2,name:'Feldman GMC',verified:true,monthly:544,down:0,total:'$19,584',msrp:48200,term:'36mo',miles:'12k/yr',mf:'0.00151',residual:'54%',conditions:'clean',condText:'Standard GMC lease program.',stock:5,dist:6.2,distStr:'6.2 mi',claimed:'March 23 7:00 AM',claimedAgo:'5 hrs ago',emoji:'🛻',make:'GMC',model:'Sierra 1500',trim:'SLE 4x4 Crew',dealType:'lease'},{rank:3,name:'Serra GMC',verified:true,monthly:561,down:500,total:'$20,696',msrp:49100,term:'36mo',miles:'12k/yr',mf:'0.00158',residual:'54%',conditions:'warn',condText:'$500 cap cost reduction required.',stock:4,dist:9.1,distStr:'9.1 mi',claimed:'March 21 2:30 PM',claimedAgo:'2 days ago',emoji:'🛻',make:'GMC',model:'Sierra 1500',trim:'SLE 4x4 Crew',dealType:'lease'}]},'Ford':{'F-150':[{rank:1,name:'LaFontaine Ford',verified:true,monthly:479,down:0,total:'$17,244',msrp:42180,term:'36mo',miles:'12k/yr',mf:'0.00125',residual:'58%',conditions:'clean',condText:'No special incentives required.',stock:4,dist:4.2,distStr:'4.2 mi',claimed:'March 22 9:14 AM',claimedAgo:'14 hrs ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'},{rank:2,name:'Bill Brown Ford',verified:true,monthly:491,down:0,total:'$17,676',msrp:42180,term:'36mo',miles:'12k/yr',mf:'0.00131',residual:'57%',conditions:'clean',condText:'Ford Red Carpet lease.',stock:6,dist:7.1,distStr:'7.1 mi',claimed:'March 23 6:30 AM',claimedAgo:'3 hrs ago',emoji:'🚗',make:'Ford',model:'F-150',trim:'XLT 4x4 Crew',dealType:'lease'}],'Bronco':[{rank:1,name:'Bill Brown Ford',verified:true,monthly:449,down:0,total:'$16,164',msrp:40200,term:'36mo',miles:'12k/yr',mf:'0.00132',residual:'56%',conditions:'clean',condText:'No special incentives needed.',stock:3,dist:7.1,distStr:'7.1 mi',claimed:'March 23 8:00 AM',claimedAgo:'4 hrs ago',emoji:'🟠',make:'Ford',model:'Bronco',trim:'Big Bend 4x4',dealType:'lease'},{rank:2,name:'LaFontaine Ford',verified:true,monthly:461,down:0,total:'$16,596',msrp:40800,term:'36mo',miles:'12k/yr',mf:'0.00138',residual:'55%',conditions:'clean',condText:'Standard lease program.',stock:2,dist:4.2,distStr:'4.2 mi',claimed:'March 22 11:00 AM',claimedAgo:'11 hrs ago',emoji:'🟠',make:'Ford',model:'Bronco',trim:'Big Bend 4x4',dealType:'lease'}]},'Cadillac':{'Escalade':[{rank:1,name:'Ray Laethem Cadillac',verified:true,featured:true,monthly:1149,down:0,total:'$41,364',msrp:82000,term:'36mo',miles:'10k/yr',mf:'0.00175',residual:'52%',conditions:'clean',condText:'No special incentives. Best available price.',stock:2,dist:5.1,distStr:'5.1 mi',claimed:'March 23 9:00 AM',claimedAgo:'3 hrs ago',emoji:'🖤',make:'Cadillac',model:'Escalade',trim:'Premium Luxury 4WD',dealType:'lease'},{rank:2,name:'Sellers Cadillac',verified:true,monthly:1189,down:0,total:'$42,804',msrp:83500,term:'36mo',miles:'10k/yr',mf:'0.00180',residual:'51%',conditions:'clean',condText:'Standard Cadillac lease.',stock:1,dist:8.3,distStr:'8.3 mi',claimed:'March 22 2:00 PM',claimedAgo:'20 hrs ago',emoji:'🖤',make:'Cadillac',model:'Escalade',trim:'Premium Luxury 4WD',dealType:'lease'}]}};

const modelMap={'Ford':['Bronco','Bronco Sport','Edge','Escape','Expedition','Explorer','F-150','F-150 Lightning','Maverick','Mustang','Mustang Mach-E','Ranger'],'Chevrolet':['Blazer','Blazer EV','Colorado','Corvette','Equinox','Equinox EV','Silverado 1500','Suburban','Tahoe','Traverse','Trax'],'GMC':['Acadia','Canyon','Sierra 1500','Sierra 2500HD','Terrain','Yukon','Yukon XL'],'Ram':['1500','2500','3500','ProMaster'],'Jeep':['Cherokee','Compass','Gladiator','Grand Cherokee','Wrangler'],'Toyota':['4Runner','Camry','Corolla','Highlander','Prius','RAV4','Sequoia','Tacoma','Tundra'],'Honda':['Accord','Civic','CR-V','HR-V','Odyssey','Passport','Pilot','Ridgeline'],'Nissan':['Altima','Ariya','Frontier','Kicks','Leaf','Murano','Pathfinder','Rogue','Titan'],'Hyundai':['Elantra','IONIQ 5','IONIQ 6','Kona','Palisade','Santa Fe','Sonata','Tucson'],'Kia':['Carnival','EV6','EV9','K5','Niro','Seltos','Sorento','Sportage','Telluride'],'Subaru':['Ascent','BRZ','Crosstrek','Forester','Outback','WRX'],'BMW':['2 Series','3 Series','4 Series','5 Series','X1','X3','X5','X7','i4','iX'],'Mercedes-Benz':['C-Class','E-Class','GLC','GLE','GLS','S-Class','EQS','EQE'],'Audi':['A3','A4','A5','Q3','Q5','Q7','Q8','e-tron GT'],'Cadillac':['CT4','CT5','Escalade','Escalade ESV','LYRIQ','XT4','XT5','XT6'],'Buick':['Enclave','Encore GX','Envision','Envista'],'Lincoln':['Aviator','Corsair','Navigator','Nautilus'],'Lexus':['ES','GX','IS','NX','RX','TX','UX'],'Tesla':['Cybertruck','Model 3','Model S','Model X','Model Y'],'Rivian':['R1S','R1T'],'Dodge':['Challenger','Charger','Durango','Hornet']};

function getDealsForSearch(make,model){const d=DEMO_DATA[make];if(d&&d[model])return d[model];return DEALS.map(d=>({...d,make,model,trim:model+' Base Trim'}));}

function renderTable(data){document.getElementById('tableBody').innerHTML=data.map((d,i)=>`<tr class="deal-row" onclick="toggleExpand(${d.rank},event)"><td><div class="rank-badge rank-${d.rank<=3?d.rank:'n'}">${d.rank}</div></td><td><div class="dealer-name-row"><span class="dealer-name">${d.name}</span>${d.verified?'<span class="v-badge">✓ Verified</span>':''}${d.featured?'<span class="featured-badge">★ Featured</span>':''}</div><div class="dealer-meta">${d.stock} in stock · ${d.trim}</div><div class="timestamp"><div class="ts-dot"></div>${d.claimedAgo} · ${d.claimed}</div></td><td><div class="price-main ${d.rank===1?'best':''}">$${d.monthly}<span style="font-size:15px;font-weight:500;color:var(--muted)">/mo</span></div><div class="price-sub">$${d.down} due at signing · ${d.total} total</div></td><td><span class="term-tag">${d.term}</span><span class="term-tag">${d.miles}</span><span class="term-tag">MF ${d.mf}</span><span class="term-tag">Res. ${d.residual}</span></td><td>${d.conditions==='clean'?'<div class="cond-clean">✓ No hidden conditions</div>':'<div class="cond-warn">⚠ Conditions apply</div>'}<div class="cond-text">${d.condText}</div></td><td class="dist-col">📍 ${d.distStr}</td><td>${d.claimedAgo}</td><td><button class="deal-btn" onclick="event.stopPropagation();openModal(${d.rank-1})">Details</button><button class="deal-btn save" onclick="event.stopPropagation();showToast('Deal saved','ok')">♡ Save</button></td></tr><tr class="deal-expand" id="expand-${d.rank}"><td colspan="9"><div class="expand-inner"><div class="expand-grid"><div class="expand-field"><div class="ef-label">Monthly</div><div class="ef-value highlight">$${d.monthly}/mo</div></div><div class="expand-field"><div class="ef-label">Due at Signing</div><div class="ef-value">$${d.down}</div></div><div class="expand-field"><div class="ef-label">MSRP</div><div class="ef-value">$${d.msrp.toLocaleString()}</div></div><div class="expand-field"><div class="ef-label">Total Cost</div><div class="ef-value">${d.total}</div></div><div class="expand-field"><div class="ef-label">Money Factor</div><div class="ef-value">${d.mf||'—'}</div></div><div class="expand-field"><div class="ef-label">Residual</div><div class="ef-value">${d.residual}</div></div></div><div class="expand-actions"><button class="ea-btn primary" onclick="showToast('Contacting ${d.name}','ok')">📞 Contact Dealer</button><button class="ea-btn ghost" onclick="showToast('Deal saved','ok')">♡ Save Deal</button><button class="ea-btn notify" onclick="showToast('You will be alerted if this price drops','ok')">🔔 Alert if Price Drops</button></div></div></td></tr>`).join('');}

function renderCards(data){document.getElementById('cardsGrid').innerHTML=data.map(d=>`<div class="deal-card" onclick="openModal(${d.rank-1})"><div class="card-header ${d.rank===1?'best-bg':''}">${d.emoji}</div><div class="card-body"><div class="card-dealer">${d.name}${d.verified?'<span class="v-badge">✓</span>':''}</div><div class="card-dist">📍 ${d.distStr} · ${d.stock} in stock</div><div class="card-price ${d.rank===1?'best':''}">$${d.monthly}<span style="font-size:16px;font-weight:500;color:var(--muted)">/mo</span></div><div class="card-price-sub">$${d.down} due at signing</div><div class="card-tags"><span class="card-tag">${d.term}</span><span class="card-tag">${d.miles}</span><span class="card-tag">MF ${d.mf}</span></div><div class="card-cond ${d.conditions}">${d.conditions==='clean'?'✓ No hidden conditions':'⚠ '+d.condText.substring(0,50)+'...'}</div><div class="card-footer"><button class="cf-primary" onclick="event.stopPropagation();showToast('Contacting dealer','ok')">Contact</button><button class="cf-ghost" onclick="event.stopPropagation();showToast('Saved','ok')">♡ Save</button></div></div></div>`).join('');}

let openExpandId=null;
function toggleExpand(rank,e){if(e.target.tagName==='BUTTON')return;const el=document.getElementById('expand-'+rank);if(openExpandId&&openExpandId!==rank){document.getElementById('expand-'+openExpandId)?.classList.remove('open');}el.classList.toggle('open');openExpandId=el.classList.contains('open')?rank:null;}

let currentDeals=DEALS;
function openModal(i){const d=currentDeals[i];if(!d)return;document.getElementById('m_title').innerHTML=d.make+' <span>'+d.model+'</span>';document.getElementById('m_dealer').innerHTML=d.name+(d.verified?' <span class="v-badge">✓ Verified</span>':'')+'&nbsp;·&nbsp;'+d.trim+'&nbsp;·&nbsp;📍 '+d.distStr+'<div style="font-size:12px;color:var(--muted);margin-top:4px">Last verified: '+d.claimed+'</div>';document.getElementById('m_grid').innerHTML='<div class="mg"><div class="mg-l">Monthly Payment</div><div class="mg-v signal">$'+d.monthly+'/mo</div></div><div class="mg"><div class="mg-l">Due at Signing</div><div class="mg-v">$'+d.down+'</div></div><div class="mg"><div class="mg-l">Term</div><div class="mg-v">'+d.term+'</div></div><div class="mg"><div class="mg-l">Annual Miles</div><div class="mg-v">'+d.miles+'</div></div><div class="mg"><div class="mg-l">MSRP</div><div class="mg-v">$'+d.msrp.toLocaleString()+'</div></div><div class="mg"><div class="mg-l">Total Cost</div><div class="mg-v">'+d.total+'</div></div><div class="mg"><div class="mg-l">Money Factor</div><div class="mg-v">'+d.mf+'</div></div><div class="mg"><div class="mg-l">Residual Value</div><div class="mg-v">'+d.residual+'</div></div><div class="mg" style="grid-column:1/-1"><div class="mg-l">Conditions</div><div class="mg-v" style="font-family:sans-serif;font-size:13px;color:'+(d.conditions==='clean'?'var(--go)':'var(--warn)')+'">'+d.condText+'</div></div>';document.getElementById('dealModal').classList.add('open');}
function closeModal(){document.getElementById('dealModal').classList.remove('open');}
document.getElementById('dealModal').addEventListener('click',e=>{if(e.target===document.getElementById('dealModal'))closeModal();});

function setView(v){document.getElementById('tableView').style.display=v==='table'?'block':'none';document.getElementById('cardsView').style.display=v==='cards'?'block':'none';document.getElementById('btnTable').classList.toggle('active',v==='table');document.getElementById('btnCards').classList.toggle('active',v==='cards');}

function handleSort(val){let sorted=[...currentDeals];if(val==='price')sorted.sort((a,b)=>a.monthly-b.monthly);else if(val==='dist')sorted.sort((a,b)=>a.dist-b.dist);sorted.forEach((d,i)=>d.rank=i+1);renderTable(sorted);renderCards(sorted);}

function updateModels(){const make=document.getElementById('s_make').value;const modelSel=document.getElementById('s_model');const models=modelMap[make]||[];modelSel.innerHTML=models.map(m=>'<option>'+m+'</option>').join('');updateTrims();}

function updateTrims(){document.getElementById('s_trim').innerHTML='<option>Any</option>';document.getElementById('s_config').innerHTML='<option>Any</option>';document.getElementById('s_cab').innerHTML='<option>Any</option>';document.getElementById('s_engine').innerHTML='<option>Any</option>';}

let isInitialLoad=true;
function doSearch(){const zip=document.getElementById('s_zip').value||'48167';const make=document.getElementById('s_make').value;const model=document.getElementById('s_model').value;const type=document.getElementById('s_type').value;currentDeals=getDealsForSearch(make,model);currentDeals.forEach((d,i)=>d.rank=i+1);renderTable(currentDeals);renderCards(currentDeals);document.getElementById('resultsHeading').innerHTML='2026 '+make+' '+model+' <span>— '+currentDeals.length+' Dealers Near '+zip+'</span>';if(!isInitialLoad){showToast('Found '+currentDeals.length+' verified '+type+' deals near '+zip,'ok');document.querySelector('.page').scrollIntoView({behavior:'smooth'});}isInitialLoad=false;}

function signupAlert(){const email=document.getElementById('alertEmail').value;if(!email||!email.includes('@')){showToast('Enter a valid email address','warn');return;}showToast('You will be alerted when this deal drops — '+email,'ok');document.getElementById('alertEmail').value='';}

function showToast(msg,type='ok'){const t=document.createElement('div');t.className='toast '+type;t.textContent=msg;document.getElementById('toastC').appendChild(t);setTimeout(()=>t.remove(),4000);}

updateModels();
doSearch();
let count=11847;
setInterval(()=>{count+=Math.floor(Math.random()*3);document.getElementById('liveCount').textContent='— '+count.toLocaleString()+' verified deals across 340 dealerships';},8000);
</script>
</body>
</html>
    ` }} />
  );
}