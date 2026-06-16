import type { EducationItem } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type EducationProps = {
  education: EducationItem[];
};

export default function Education({ education }: EducationProps) {
  return (
    <section className="section" id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={`${item.school}-${item.degree}`}>
            <h3>{item.school}</h3>
            <p>{item.degree}</p>
            {item.dates && <span>{item.dates}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
