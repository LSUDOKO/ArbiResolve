# ArbiResolve — Frontend Instruction Folder

> **"Intent in. DeFi out."**
> 
> You speak plain English. ArbiResolve's AI agent finds the best route on Arbitrum and executes it.

---

## Project Name
**ArbiResolve** — short, clear, memorable. "Resolve" = resolving intents + resolving transactions.
Domain suggestion: `arbi.resolve` or `arbi-resolve.xyz`

---

## What's In This Folder

```
arbi-resolve-instructions/
│
├── README.md                    ← You're here — start here
├── DESIGN-SYSTEM.md             ← Colors, fonts, layout rules, button styles
│
├── pages/
│   └── PAGE-SPECS.md            ← Every page, section by section, with HTML structure
│
├── components/
│   ├── COMPONENTS.md            ← All reusable components with HTML + CSS
│   └── ANIMATIONS.md            ← All animation specs with CSS + JS
│
└── assets/
    ├── main.css                 ← Full production-ready CSS (copy directly)
    └── main.js                  ← Full JS for nav, scroll reveal, intent demo
```

---

## Design Philosophy

This UI is **directly inspired by atuin.media**:
- Dark background (`#0a0a0a`) with near-black section backgrounds
- **DM Serif Display** for headings (atuin uses a serif — we match it)
- `<em>` tags in headings = **green italic** (atuin's signature move)
- Same section structure: `.content-wrapper > .content`
- Same `.rounded` sections with `border-radius: 2rem 2rem 0 0`
- Same infinite-scroll ribbon for capability/protocol tickers
- Same card hover lifts, same button shapes
- Same nav pattern: hamburger → full-screen overlay

The **only differences** are:
- Dark theme (atuin is light — we go dark for crypto)
- Green accent (`#00ff88`) instead of atuin's blue
- Intent-specific components (scan results, simulation preview, live dot)
- Arbitrum orbit ring background in hero

---

## Site Map

| Page | URL | Purpose |
|---|---|---|
| Landing | `/` | Hero + intro + capabilities + intent demo + protocols |
| App | `/app` | Main intent workspace |
| Portfolio | `/portfolio` | Active positions + AI suggestions |
| History | `/history` | Past intents + yield earned |
| Agent | `/agent` | Public identity page (hackathon requirement) |
| Protocols | `/protocols` | Supported protocols showcase |

---

## Key Design Rules (Must Follow)

### 1. Headline Pattern (critical — copy from atuin.media)
Every section headline splits across two lines with `<em>` on key word:
```html
<!-- ✅ Correct -->
<h1>
  Intent in.
  <em>DeFi out.</em>
</h1>

<!-- ❌ Wrong — em not on second line, not italic green -->
<h1>ArbiResolve is a DeFi intent resolver</h1>
```

### 2. Content Width (identical to atuin)
```html
<section>
  <div class="content-wrapper">   <!-- max 1400px, centered -->
    <div class="content">         <!-- max 900px, left-aligned -->
      <!-- Your content here -->
    </div>
  </div>
</section>
```

### 3. Ribbon = Always Duplicate (for infinite scroll)
```html
<!-- TWO identical <ul> side by side, same animation -->
<div class="ribbon-container">
  <ul class="ribbon-list"><!-- items --></ul>
  <ul class="ribbon-list" role="presentation"><!-- same items --></ul>
</div>
```

### 4. Rounded Sections (stack like atuin)
```html
<!-- Each rounded section overlaps the previous by 2rem -->
<section class="stats-section rounded">...</section>
<section class="demo-section rounded">...</section>
```

### 5. Green `<em>` Everywhere
The single biggest atuin.media signature. Use it liberally:
- In headings: `<h1>Your funds. <em>optimised.</em></h1>`
- In nav logo: `arbi<em>.resolve</em>`
- In stats: `<em>18.4%</em><span>APY</span>`

---

## Quick Start (Build Order)

### Step 1: Copy the CSS & JS
Copy `assets/main.css` and `assets/main.js` to your project root.

### Step 2: Build the base template
Use the `Base HTML Template` from `components/COMPONENTS.md` for every page.

### Step 3: Build Landing page first
Follow `pages/PAGE-SPECS.md` → Page 1 section by section.

### Step 4: Build /app page
The intent workspace — use Component 4 (Intent Box) + Component 6 (Simulation Preview) + Component 8 (Market Sidebar).

### Step 5: Build /agent page
Required for hackathon. Use Component 9. Fill in real agent address after registration.

### Step 6: Polish animations
Add `.fade-in` class to every section/card. The IntersectionObserver in `main.js` handles the rest.

---

## Hackathon Checklist

- [ ] Agent registered on Arbitrum One registry (`0x8004A169FB4a3325136EB29fA0ceB6D2e539a432`)
- [ ] `/agent` page live with real agent address
- [ ] Intent demo works end-to-end (at least simulated)
- [ ] Protocols page shows Uniswap + Camelot + GMX integration
- [ ] GitHub repo public with README
- [ ] Submission form filled before April 3, 2026 19:30 CET

---

## Tech Stack for the Full Build

| Layer | Tool | Notes |
|---|---|---|
| Frontend | Next.js 14 + React | App router |
| Styling | CSS (this main.css) | No Tailwind needed |
| Wallet | Wagmi + Viem | Standard |
| AI Brain | Claude API | Intent parsing + routing |
| On-chain reads | Ethers.js | Arbitrum RPC |
| DEX | Uniswap V3 SDK | Swap routing |
| DEX 2 | Camelot SDK | Yield pools |
| Perps | GMX SDK | Position management |
| Bridge | CCTP | Cross-chain USDC |
| Agent registry | agent0 SDK | Mandatory |
| Deployment | Vercel | Free tier fine |

---

## Copy Suggestions

**Hero:** "You speak. Arbitrum listens."
**Subheadline:** "One sentence. The best DeFi route. Executed."
**CTA:** "Launch the agent →"
**Footer CTA:** "You have an intent to resolve — Tell us about it!"
**Nav items:** Home · App · Protocols · Agent · History
**Agent page:** "Registered on Arbitrum One ✅ · Resolving intents since March 2026"

---

## Color Quick Reference

| Use | Value |
|---|---|
| Background | `#0a0a0a` |
| Card background | `#161616` |
| Primary accent (green) | `#00ff88` |
| Secondary accent (blue) | `#3b82f6` |
| Text primary | `#f5f5f0` |
| Text secondary | `#a3a3a3` |
| Text muted | `#525252` |
| `<em>` color | `#00ff88` |
| Border | `rgba(255,255,255,0.08)` |