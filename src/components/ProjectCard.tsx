import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

function isPlaceholderLink(href?: string) {
  return !href || href === '#';
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <div>
          <h3>{project.title}</h3>
          <span className="badge">{project.category}</span>
        </div>
        <div className="project-card__links">
          {!isPlaceholderLink(project.github) && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {!isPlaceholderLink(project.demo) && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
              Demo
            </a>
          )}
        </div>
      </div>

      {project.image && (
        <img
          src={project.image}
          alt=""
          className="project-image"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      )}

      <div className="project-card__body">
        <p>
          <strong>Problem:</strong> {project.problem}
        </p>
        <div>
          <strong>What I built:</strong>
          <ul>
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <p>
          <strong>Impact:</strong> {project.impact}
        </p>
      </div>

      <div className="project-tools">
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </article>
  );
}
