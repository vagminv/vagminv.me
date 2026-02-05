import { Construction } from 'lucide-react';
import type { Project } from '../types';

function ProjectCard({ title, description, tags, githubUrl, demoUrl }: Project) {
  const linkUrl = demoUrl || githubUrl;
  const hasLink = !!linkUrl;

  const content = (
    <>
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        {!hasLink && (
          <Construction size={18} className="project-card__construction" />
        )}
      </div>
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
    </>
  );

  if (hasLink) {
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card project-card--link"
      >
        {content}
      </a>
    );
  }

  return <div className="project-card">{content}</div>;
}

export default ProjectCard
