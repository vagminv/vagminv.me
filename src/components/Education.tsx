import { education } from '../data/content'

function Education() {
  const isImageLogo = education.logo && education.logo.startsWith('/')

  return (
    <section className="section">
      <h2 className="section__title">Education</h2>
      <div className="experience-item">
        {isImageLogo ? (
          <div className="experience-item__logo experience-item__logo--image">
            <img
              src={education.logo}
              alt={`${education.institution} logo`}
            />
          </div>
        ) : (
          <div className="experience-item__logo experience-item__logo--emoji">
            {education.logo}
          </div>
        )}
        <div className="experience-item__content">
          <div className="experience-item__header">
            <h3 className="experience-item__company">{education.institution}</h3>
            <span className="experience-item__date">{education.date}</span>
          </div>
          <p className="experience-item__role">{education.degree}</p>
          <p className="experience-item__role">GPA: {education.gpa}</p>
          <div className="experience-item__coursework">
            <span className="experience-item__coursework-label">Relevant Coursework: </span>
            <span>{education.coursework.join(', ')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
