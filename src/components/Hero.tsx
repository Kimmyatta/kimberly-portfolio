import type { PortfolioData } from '../data/portfolio';

type HeroProps = {
  personal: PortfolioData['personal'];
  resume: PortfolioData['resume'];
};

export default function Hero({ personal, resume }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <h1>{personal.name}</h1>
        <p className="hero__headline">{personal.headline}</p>
        <p className="hero__summary">{personal.summary}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={resume.path} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className="button button--secondary" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
