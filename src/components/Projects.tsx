import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

function Projects() {
  return (
    <section className="section">
      <h2 className="section__title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
