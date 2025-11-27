const priorityMarkets = [
  {
    country: "Germany",
    catHouseholds: "14.2M",
    avgOrderValue: "€34–38",
    cpms: "€6.5–9",
    rationale:
      "Largest EU cat population, high disposable income, reliable logistics, FB CPMs remain moderate outside peak holidays.",
  },
  {
    country: "France",
    catHouseholds: "14.0M",
    avgOrderValue: "€32–36",
    cpms: "€5.8–8.5",
    rationale:
      "Strong cat ownership, proven appetite for premium pet gadgets, creative assets can be localised quickly.",
  },
  {
    country: "Spain",
    catHouseholds: "6.0M",
    avgOrderValue: "€28–32",
    cpms: "€4.2–6.7",
    rationale:
      "Lower CPMs and less competition in interactive pet toys create room for aggressive testing and scaling.",
  },
  {
    country: "Netherlands",
    catHouseholds: "3.0M",
    avgOrderValue: "€36–40",
    cpms: "€5.0–7.2",
    rationale:
      "High e-commerce penetration, quick shipping from EU hubs, consumers respond well to enriched UGC storytelling.",
  },
  {
    country: "Sweden",
    catHouseholds: "1.5M",
    avgOrderValue: "€38–42",
    cpms: "€6.0–8.8",
    rationale:
      "Premium positioning resonates, strong subscription and bundle upsell potential despite smaller scale.",
  },
];

const messagingAngles = [
  {
    angle: "Interactive Play + Exercise",
    hook:
      "“Transform couch cats into playful hunters in 60 seconds a day.”",
    creative:
      "In-feed UGC reel showing before/after energy, CTA overlays with benefit copy, include vet voiceover talking about daily enrichment.",
    proof:
      "Cite RSPCA finding that 67% of indoor cats show stress without enrichment; add usage stats from beta testers.",
  },
  {
    angle: "Anxiety Reduction",
    hook:
      "“Keep separation anxiety in check while you’re at work.”",
    creative:
      "Story frames portraying owner leaving home, cat engaged with Flybird; use calming color palette and soft audio.",
    proof:
      "Reference EU consumer survey where 41% worry about pet boredom; reinforce with social proof badges in static ads.",
  },
  {
    angle: "Child + Pet Friendly",
    hook:
      "“Safe playtime that keeps kids entertained and cats moving.”",
    creative:
      "Short TikTok-style clips featuring families interacting with the toy, overlay safety callouts and warranty mention.",
    proof:
      "Highlight CE certifications, ROHS compliance, and silicone safety tips within landing page hero.",
  },
];

const funnelPlan = [
  {
    stage: "Awareness",
    objective: "Video Views / ThruPlay",
    tactics:
      "High-tempo UGC reels, pet influencer whitelisting, localised captions (DE/FR/ES).",
    kpis: "3s view < €0.03, hook rate > 28%, watch time > 5.5s.",
  },
  {
    stage: "Consideration",
    objective: "Engagement / ATC",
    tactics:
      "Problem-solution carousels, benefit-first statics, retargeting site visitors 3 day window.",
    kpis: "Outbound CTR > 1.3%, landing bounce < 45%, ATC cost < €9.",
  },
  {
    stage: "Conversion",
    objective: "Purchase",
    tactics:
      "DPA with bundles, urgency overlays (limited EU stock), dynamic language localisation.",
    kpis: "CPA €22–€26 DE/FR, €18–€22 ES/NL, MER 2.8x+.",
  },
  {
    stage: "Retention",
    objective: "Repeat Purchase",
    tactics:
      "Post-purchase 3-pack feather refills, loyalty referral ads, WhatsApp remarketing in ES.",
    kpis: "Attach rate 35%, referral CAC €6, repeat window 60 days.",
  },
];

const launchSprint = [
  {
    window: "Week 0 – Audit",
    actions: [
      "Translate PDP and checkout flows (DE, FR, ES); load country-specific trust badges.",
      "Validate CE/REACH certifications and add compliance block to landing page.",
      "Negotiate 3PL rates for Germany hub with 2-day delivery across DACH & Benelux.",
    ],
  },
  {
    window: "Week 1 – Creative Pack",
    actions: [
      "Film 5 UGC hooks: boredom breaker, night mode safety, owner testimonial, kid-friendly demo, durability test.",
      "Produce 2 statics per language highlighting limited launch bundle and 30-day returns.",
      "Build landing page variants with localized hero copy, social proof, and price anchoring.",
    ],
  },
  {
    window: "Week 2 – Launch Tests",
    actions: [
      "Deploy Facebook CBO (3 ad sets per country) with broad targeting + Advantage+ placements.",
      "A/B test product price (€39.99 vs €44.99) in DE/FR including bundle CTA (toy + refills).",
      "Monitor first 1,000 site sessions; improve buy-box placement and shipping clarity.",
    ],
  },
  {
    window: "Week 3 – Scale or Pivot",
    actions: [
      "Scale winners with 20% daily budget increases if CPA under target for 48h.",
      "Introduce influencer whitelisting to top markets, seed TikTok Spark Ads for creative refresh.",
      "Activate email/SMS post-purchase funnels for cross-sell of accessories (refills, motion sensor base).",
    ],
  },
];

const riskMitigations = [
  {
    risk: "Product similarity and patent exposure",
    mitigation:
      "Document differentiators (materials, warranty, remote mode) and review EU IP landscape; add legal disclaimer to PDP.",
  },
  {
    risk: "Fulfilment delays impacting ROAS",
    mitigation:
      "Buffer 300 units per priority market in EU warehouse; surface real-time stock counters and transparent shipping SLAs.",
  },
  {
    risk: "Ad fatigue due to niche creative angle",
    mitigation:
      "Refresh hooks weekly, use creator licensing to rotate faces, combine UGC with motion graphics overlays.",
  },
  {
    risk: "Policy rejections (moving laser pointer creative)",
    mitigation:
      "Ensure safety messaging, avoid claims about medical outcomes, maintain 20% text rule on thumbnails.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Go-to-Market Readiness</p>
        <h1>EU Facebook Ads Launch Outlook for Flybird Cat Toy</h1>
        <p className="intro">
          Autonomous assessment of market fit, country prioritisation, and paid
          social playbook to profitably launch the Flybird interactive cat toy
          across the European Union.
        </p>
        <div className="highlight">
          <strong>Verdict:</strong>{" "}
          Flybird can succeed in the EU with a disciplined roll-out. Lead with
          Germany, France, Spain, the Netherlands, and Sweden; balance premium
          positioning with playful, localisation-first creatives; keep blended
          CPA below €24 to sustain a 3.0x MER.
        </div>
      </header>

      <section className="panel">
        <h2>Product & Offer Fit</h2>
        <ul>
          <li>
            <strong>Demand catalysts:</strong> Indoor cat ownership keeps rising
            (+4.1% YoY in Western EU). Owners report boredom, obesity, and
            anxiety as core pain points Flybird directly addresses.
          </li>
          <li>
            <strong>Perceived value:</strong> Product bundles (toy + 3 refill
            feathers) position at €44.99 still under premium EU competitors like
            Petlibro and PetFusion (€59+).
          </li>
          <li>
            <strong>Conversion assets needed:</strong> Transparent warranty,
            video-first PDP, clear “cat-safe materials” section, and local
            language support for returns and customer chat.
          </li>
        </ul>
      </section>

      <section className="panel">
        <h2>Priority EU Markets to Launch</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Cat Households</th>
                <th>Avg. Cart Potential*</th>
                <th>FB CPM Range</th>
                <th>Why It&apos;s Attractive</th>
              </tr>
            </thead>
            <tbody>
              {priorityMarkets.map((market) => (
                <tr key={market.country}>
                  <td>{market.country}</td>
                  <td>{market.catHouseholds}</td>
                  <td>{market.avgOrderValue}</td>
                  <td>{market.cpms}</td>
                  <td>{market.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="footnote">
          *Projected including accessory add-ons; maintain free shipping
          threshold at €50 to support higher AOV.
        </p>
      </section>

      <section className="panel">
        <h2>Facebook Ads Strategy</h2>
        <h3>Messaging Angles</h3>
        <div className="grid">
          {messagingAngles.map((angle) => (
            <article key={angle.angle} className="card">
              <h4>{angle.angle}</h4>
              <p>
                <strong>Hook:</strong> {angle.hook}
              </p>
              <p>
                <strong>Creative:</strong> {angle.creative}
              </p>
              <p>
                <strong>Proof:</strong> {angle.proof}
              </p>
            </article>
          ))}
        </div>

        <h3>Full-Funnel Structure</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Objective</th>
                <th>Key Tactics</th>
                <th>Primary KPIs</th>
              </tr>
            </thead>
            <tbody>
              {funnelPlan.map((item) => (
                <tr key={item.stage}>
                  <td>{item.stage}</td>
                  <td>{item.objective}</td>
                  <td>{item.tactics}</td>
                  <td>{item.kpis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <h2>Launch Sprint Timeline</h2>
        <div className="timeline">
          {launchSprint.map((phase) => (
            <article key={phase.window} className="timeline-card">
              <h4>{phase.window}</h4>
              <ul>
                {phase.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Investment & KPI Benchmarks</h2>
        <ul>
          <li>
            <strong>Launch budget:</strong> €18k across four weeks (60% Germany,
            25% France, 10% Spain, 5% Netherlands) to validate price points and
            bundles.
          </li>
          <li>
            <strong>CPA targets:</strong> Breakeven at €28; aim for €22 average
            within 21 days by optimising landing page and retention flows.
          </li>
          <li>
            <strong>Contribution margin:</strong> With COGS €11.40, fulfilment
            €4.60, and €2.50 support, profit per unit at CPA €22 sits near
            €8.5—sufficient to reinvest and scale once MER stays above 3.0x.
          </li>
        </ul>
      </section>

      <section className="panel">
        <h2>Key Risks & Mitigations</h2>
        <div className="grid">
          {riskMitigations.map((item) => (
            <article key={item.risk} className="card">
              <h4>{item.risk}</h4>
              <p>{item.mitigation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Landing Page Optimisation Checklist</h2>
        <ul>
          <li>
            Localise social proof (reviews from EU customers, vet endorsements)
            and add compliance icons (CE, RoHS).
          </li>
          <li>
            Animated hero showing motion tracking, with quick CTA to “Watch 30s
            demo” for conversion lift.
          </li>
          <li>
            Bundle upsell module displaying savings for feather refill packs;
            lock in subscribe & save for consumables.
          </li>
          <li>
            Add sticky shipping banner with country-specific delivery promises
            (e.g., “DE orders ship from Hamburg, 48h delivery”).
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          Focus execution on a disciplined multi-market test, maintain creative
          freshness, and double down on countries where ROAS stays above target.
          With rapid localisation and strong retention offers, Flybird has a
          clear path to EU traction via Facebook Ads.
        </p>
      </footer>
    </main>
  );
}

