import './SprintIncubation.css';

const deliverables = [
  ['Brand', 'Positioning, purpose, narrative, visual and verbal brand guide'],
  ['Product', 'UX-UI thinking, MVP definition, website architecture'],
  ['Growth', 'Go-to-market strategy, sales framework, performance marketing logic'],
  ['Readiness', 'Launch checklist, 30-60 day execution roadmap'],
];

const sprintDays = [
  ['Days 1-2', 'Brand foundation and strategic clarity'],
  ['Day 3', 'Product thinking and MVP structure'],
  ['Day 4', 'Marketing strategy workshop'],
  ['Day 5', 'Sales strategy workshop'],
  ['Day 6', 'Performance marketing workshop'],
  ['Day 7', 'Launch readiness and execution plan'],
];

const SprintIncubation = () => (
  <main className="sprint-page">
    <section className="sprint-hero">
      <p className="sprint-kicker">SPRINT INCUBATION</p>
      <h1>Zero to one,<br />properly prepared.</h1>
      <p className="sprint-lede">A 7-day sprint to turn an idea into a launch-ready brand.</p>
      <p className="sprint-intro">An intensive, founder-led program to build the strategic, creative, and commercial foundation - fast, focused, and done right.</p>
      <p className="sprint-note">Not acceleration. Preparation.</p>
    </section>

    <section className="sprint-section">
      <p className="sprint-kicker">WHY SPRINT INCUBATION</p>
      <h2>Clarity before capital.<br />Structure before scale.</h2>
      <div className="sprint-panel">
        <p>Most brands fail not because of lack of effort, but because the foundation is weak.</p>
        <p>Sprint Incubation exists to bring clarity before capital, structure before scale, and direction before execution.</p>
        <strong>We believe in building once - and building well.</strong>
      </div>
    </section>

    <section className="sprint-section">
      <p className="sprint-kicker">WHAT WE BUILD IN 7 DAYS</p>
      <div className="deliverables-grid">
        {deliverables.map(([title, description]) => <article className="deliverable" key={title}><h3>{title}</h3><p>{description}</p></article>)}
      </div>
      <p className="sprint-note sprint-note--center">Everything essential. Nothing unnecessary.</p>
    </section>

    <section className="sprint-section">
      <p className="sprint-kicker">THE 7-DAY STRUCTURE</p>
      <div className="sprint-panel sprint-days">
        {sprintDays.map(([day, description]) => <div className="sprint-day" key={day}><strong>{day}</strong><span>{description}</span></div>)}
      </div>
      <p className="sprint-note sprint-note--center">Short. Focused. Outcome-driven.</p>
    </section>

    <section className="sprint-section sprint-belief">
      <p className="sprint-kicker">OUR BELIEF</p>
      <h2>Good brands are not rushed.<br />They are prepared.</h2>
      <p>Sprint Incubation is built on that principle.</p>
    </section>
  </main>
);

export default SprintIncubation;