import type { ExperienceItem } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type ExperienceProps = {
  experience: ExperienceItem[];
};

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section" id="experience">
      <SectionHeading
        title="Experience"
        description="Research, analytics, reporting, and automation experience supporting operational decisions."
      />
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.organization}-${item.role}`}>
            <div className="timeline-item__top">
              <div>
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
              </div>
              <span>{item.dates}</span>
            </div>

            {item.tools && (
              <div className="tool-row">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            )}

            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
