import type { WorkExperience } from '../types';

function ExperienceItem({ logo, company, role, date, description }: WorkExperience) {
  const isImageLogo = logo && logo.startsWith('/')

  return (
    <div className="experience-item">
      {isImageLogo ? (
        <div className="experience-item__logo experience-item__logo--image">
          <img
            src={logo}
            alt={`${company} logo`}
          />
        </div>
      ) : (
        <div className="experience-item__logo experience-item__logo--emoji">
          {logo}
        </div>
      )}
      <div className="experience-item__content">
        <div className="experience-item__header">
          <div>
            <h3 className="experience-item__company">{company}</h3>
            <p className="experience-item__role">{role}</p>
          </div>
          <span className="experience-item__date">{date}</span>
        </div>
        <ul className="experience-item__description">
          {description.map((item, index) => (
            <li key={index}>
              <span>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceItem
