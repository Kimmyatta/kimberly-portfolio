import type { SkillGroup } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type SkillsProps = {
  skills: SkillGroup[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Skills"
        description="A focused mix of modeling, GenAI, analytics, and production workflow tools."
      />
      <div className="skill-grid">
        {skills.map((group) => (
          <article className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
