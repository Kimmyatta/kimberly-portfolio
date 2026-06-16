import type { PortfolioData } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type AboutProps = {
  personal: PortfolioData['personal'];
};

export default function About({ personal }: AboutProps) {
  return (
    <section className="section about-layout" id="about">
      <SectionHeading title="About" />
      <div className="about-copy">
        <p>{personal.about}</p>
        <dl>
          <div>
            <dt>Location</dt>
            <dd>{personal.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>AI Applications, Data Science, and Machine Learning</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
