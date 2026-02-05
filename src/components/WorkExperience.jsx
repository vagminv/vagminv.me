import ExperienceItem from './ExperienceItem'
import { workExperience } from '../data/content'

function WorkExperience() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Work Experience</h2>
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <ExperienceItem
            key={index}
            logo={job.logo}
            company={job.company}
            role={job.role}
            date={job.date}
            description={job.description}
          />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
