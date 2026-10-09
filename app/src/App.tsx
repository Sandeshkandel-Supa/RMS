const modules = [
  { name: "Dashboard", description: "Operational overview and daily signals", icon: "◫" },
  { name: "Orders & POS", description: "Order entry, checkout and service flow", icon: "▤" },
  { name: "Kitchen", description: "KOT and kitchen display workspace", icon: "♨" },
  { name: "Menu", description: "Dishes, categories and menu sets", icon: "▧" },
  { name: "Inventory", description: "Stock items, movement and production", icon: "▦" },
  { name: "Finance", description: "Transactions, day book and reports", icon: "↗" },
  { name: "Customers", description: "Customer records and groups", icon: "♙" },
  { name: "Staff & Roles", description: "Team records and access planning", icon: "♧" },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="MIH DineOS home">
          <span className="brand-mark">D</span>
          <span><strong>MIH DineOS</strong><small>RESTAURANT OPERATIONS</small></span>
        </a>
        <div className="workspace-label">WORKSPACE</div>
        <nav aria-label="Main navigation">
          <a className="nav-item active" href="#overview"><span>◫</span> Overview</a>
          <a className="nav-item" href="#modules"><span>▦</span> Modules</a>
          <a className="nav-item" href="#setup"><span>⚙</span> Setup checklist</a>
        </nav>
        <div className="sidebar-foot">
          <span className="status-dot" />
          <div><strong>Foundation workspace</strong><small>Demo shell · no live data</small></div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div><p className="eyebrow">RESTAURANT MANAGEMENT</p><h1>Good to see you.</h1></div>
          <div className="topbar-right"><span className="env-badge">FOUNDATION BUILD</span><button className="avatar" aria-label="Workspace profile">M</button></div>
        </header>

        <section className="welcome-panel">
          <div className="welcome-copy">
            <span className="pill"><span className="status-dot" /> Phase 0 · Application foundation</span>
            <h2>Your restaurant,<br /><em>one clear view.</em></h2>
            <p>This is the isolated application shell for MIH DineOS. Navigation and module cards are scaffolding only; business data, authentication, and persistence are not connected yet.</p>
            <a className="primary-button" href="#modules">Explore workspace <span>→</span></a>
          </div>
          <div className="welcome-art" aria-hidden="true">
            <div className="art-ring ring-one" /><div className="art-ring ring-two" />
            <div className="art-card">
              <div className="art-card-head"><span>Today at a glance</span><span className="tiny-dot" /></div>
              <div className="skeleton-row"><i /><b /><i /></div>
              <div className="art-metrics"><div><small>Orders</small><strong>—</strong><span>Not connected</span></div><div><small>Sales</small><strong>—</strong><span>Not connected</span></div></div>
              <div className="art-chart"><span /><span /><span /><span /><span /><span /><span /></div>
              <div className="art-note">Illustrative layout · no live figures</div>
            </div>
            <div className="floating-icon icon-menu">▤</div><div className="floating-icon icon-stock">▦</div>
          </div>
        </section>

        <section className="modules-section" id="modules">
          <div className="section-heading"><div><p className="eyebrow">YOUR WORKSPACE</p><h2>Core modules</h2></div><span className="muted">Foundation placeholders</span></div>
          <div className="module-grid">
            {modules.map((module) => (
              <article className="module-card" key={module.name}>
                <div className="module-icon">{module.icon}</div>
                <div className="module-copy"><h3>{module.name}</h3><p>{module.description}</p></div>
                <span className="module-arrow" aria-hidden="true">↗</span>
                <span className="coming-soon">Not connected</span>
              </article>
            ))}
          </div>
        </section>

        <section className="setup-section" id="setup">
          <div><p className="eyebrow">IMPLEMENTATION CHECKLIST</p><h2>Built on verified foundations.</h2><p className="setup-lead">The reference inspection documents visible workflows, but it does not confirm production API contracts or database rules. These gates must be settled before real operations are enabled.</p></div>
          <div className="checklist">
            <div><span className="check-number">01</span><p><strong>Identity & access</strong><small>Authentication, roles, tenant isolation</small></p><span className="check-state">Pending</span></div>
            <div><span className="check-number">02</span><p><strong>Data contracts</strong><small>Schema, validation and audit boundaries</small></p><span className="check-state">Pending</span></div>
            <div><span className="check-number">03</span><p><strong>Operational rules</strong><small>Orders, kitchen, inventory and finance</small></p><span className="check-state">Pending</span></div>
          </div>
        </section>
        <footer className="footer"><span>MIH DineOS</span><span>Phase 0 foundation · Demo shell only</span></footer>
      </main>
    </div>
  );
}
