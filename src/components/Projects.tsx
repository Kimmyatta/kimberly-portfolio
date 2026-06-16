import type { Project } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section" id="projects">
      <SectionHeading
        title="Projects"
        description="Portfolio projects across GenAI, MLOps, predictive modeling, and analytics."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
