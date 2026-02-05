import type { Project } from '../types';

function ProjectCard({ title, description, tags }: Project) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <div className="project-card__tags">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="project-card__tag"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
