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
      <p className="services-kicker">SERVICES</p>
      <h1>Two ways to<br />work with Incubr</h1>
      <p className="services-intro">Both run as sprints, with one team covering validation, development, manufacturing, branding, quality and launch.</p>
    </section>

    <section className="service-paths" aria-label="Ways to work with Incubr">
      {servicePaths.map((path, index) => (
        <article className={`service-path ${index === 0 ? 'service-path--muted' : ''}`} key={path.title}>
          <p className="service-eyebrow">{path.eyebrow}</p>
          <h2>{path.title}</h2>
          <p className="service-description">{path.description}</p>
          <div className="service-steps">
            {path.steps.map(([label, detail]) => <div className="service-step" key={label}><strong>{label}</strong><span>{detail}</span></div>)}
          </div>
        </article>
      ))}
    </section>

    <section className="market-section">
      <p className="services-kicker">WHY INDIA, WHY NOW</p>
      <h2>The world's fourth-largest economy is lowering the cost of entry</h2>
      <p className="market-intro">Tax cuts, a growing middle class and digital payment rails make 2026 a strong window for consumer brands.</p>
      <div className="market-grid">
        {marketSignals.map(([stat, label, detail]) => <article className="market-signal" key={label}><p className="market-stat">{stat}</p><h3>{label}</h3><p>{detail}</p></article>)}
      </div>
    </section>

    <section className="founder-section">
      <p className="services-kicker">FOUNDER</p>
      <h2>Led by an operator<br />who has done it before</h2>
      <div className="founder-copy">
        <img className="founder-image" src={founderImage} alt="Gopal Batra" />
        <div><p className="founder-name">Gopal Batra</p><p className="founder-role">Founder, Incubr Tech Pvt Ltd</p><p className="founder-quote">A brand builder and country operator who has spent his career on the hardest stretch for any brand: the first mile in a new market.</p></div>
      </div>
    </section>
  </main>
);

export default Services;
