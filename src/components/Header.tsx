import { MapPin } from 'lucide-react'
import { personalInfo } from '../data/content'

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__name">
          {personalInfo.name}
        </h1>
        <p className="header__role mono">
          {personalInfo.role}
        </p>
        <div className="header__location">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>
      </div>
      {personalInfo.profileImage && (
        <div className="header__image">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
          />
        </div>
      )}
      {!personalInfo.profileImage && (
        <div className="header__image header__image--placeholder">
          <span>
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
    </div>
  )
}

export default Header
