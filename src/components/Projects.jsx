import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

function Projects() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
