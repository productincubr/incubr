import './Services.css';
import founderImage from '../assets/image.png';

const servicePaths = [
  {
    eyebrow: 'FOR GLOBAL BRANDS',
    title: 'India market entry',
    description: 'A partner on the ground from first insight to first sale in India.',
    steps: [
      ['Validate', 'Market validation, channel research, competitive positioning'],
      ['Localize', 'Product localization, CMO and strategic sourcing, quality and compliance'],
      ['Launch', 'Brand and packaging adaptation, go-to-market and sales, market enablement'],
    ],
  },
  {
    eyebrow: 'FOR FOUNDERS AND NEW PRODUCTS',
    title: 'Sprint incubation',
    description: 'A one-stop sprint that takes a product idea to market-ready.',
    steps: [
      ['Validate', 'Product validation, category validation, marketplace research'],
      ['Build', 'Competitive positioning, product development, CMO management'],
      ['Launch ready', 'Bespoke brand and packaging, quality assurance, go-to-market'],
    ],
  },
];

const marketSignals = [
  ['#4', 'Largest economy', 'Nominal GDP of about $4.19 trillion in 2025, ahead of Japan.'],
  ['5%', 'GST on packaged foods', 'GST 2.0 cut sauces, pasta, chocolates, coffee and more to 5%.'],
  ['₹12L', 'Tax-free income', 'From FY26, incomes up to ₹12 lakh pay no income tax.'],
  ['24.5B', 'UPI payments a month', 'A record monthly volume, up 22% year on year.'],
];

const Services = () => (
  <main className="services-page">
    <section className="services-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <p className="services-kicker">SERVICES / 01</p>
        <h1>Make the<br /><em>first move</em><br />count.</h1>
        <p className="services-intro">Two focused ways to take a consumer brand from first insight to first sale in India.</p>
        <a className="hero-link" href="#ways-to-work">Explore the pathways <span aria-hidden="true">↘</span></a>
      </div>
      <div className="hero-orbit" aria-hidden="true"><span>IDEA</span><span>BUILD</span><span>LAUNCH</span><i /></div>
    </section>

    <section className="service-paths" id="ways-to-work" aria-label="Ways to work with Incubr">
      <div className="section-heading"><p className="services-kicker">THE INCUBR METHOD / 02</p><h2>Pick your starting point.<br /><span>We build from there.</span></h2></div>
      {servicePaths.map((path, index) => (
        <article className={`service-path service-path--${index + 1}`} key={path.title}>
          <div className="service-path-top"><span className="path-number">0{index + 1}</span><p className="service-eyebrow">{path.eyebrow}</p></div>
          <h3>{path.title}</h3>
          <p className="service-description">{path.description}</p>
          <div className="service-steps">
            {path.steps.map(([label, detail], stepIndex) => <div className="service-step" key={label}><span className="step-index">0{stepIndex + 1}</span><strong>{label}</strong><span>{detail}</span></div>)}
          </div>
          <div className="path-arrow" aria-hidden="true">↗</div>
        </article>
      ))}
    </section>

    <section className="market-section">
      <div><p className="services-kicker">WHY INDIA, WHY NOW / 03</p><h2>The world's fourth-largest economy is lowering the cost of entry</h2></div>
      <p className="market-intro">Tax cuts, a growing middle class and digital payment rails make 2026 a strong window for consumer brands.</p>
      <div className="market-grid">
        {marketSignals.map(([stat, label, detail], index) => <article className="market-signal" key={label}><span className="signal-index">0{index + 1}</span><p className="market-stat">{stat}</p><h3>{label}</h3><p>{detail}</p></article>)}
      </div>
    </section>

    <section className="founder-section">
      <div className="founder-heading"><p className="services-kicker">THE OPERATOR / 04</p><h2>Led by an operator<br />who has done it before</h2></div>
      <div className="founder-copy">
        <img className="founder-image" src={founderImage} alt="Gopal Batra" />
        <div><p className="founder-name">Gopal Batra</p><p className="founder-role">Founder, Incubr Tech Pvt Ltd</p><p className="founder-quote">A brand builder and country operator who has spent his career on the hardest stretch for any brand: the first mile in a new market.</p></div>
      </div>
    </section>
  </main>
);

export default Services;
