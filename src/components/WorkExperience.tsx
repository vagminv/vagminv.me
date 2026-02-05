import ExperienceItem from './ExperienceItem'
import { workExperience } from '../data/content'

function WorkExperience() {
  return (
    <section className="section">
      <h2 className="section__title">Work Experience</h2>
      <div className="experience-list">
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
