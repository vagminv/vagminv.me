import { MapPin, Mail, Linkedin, Github, Globe } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/content'
import type { LucideProps } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Linkedin,
  Github,
  Globe
}

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
        <div className="header__social">
          {socialLinks.map((link) => {
            // Check if icon is an image path
            const isImageIcon = link.icon.startsWith('/');

            if (isImageIcon) {
              return (
                <a
                  key={link.type}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links__link social-links__link--image"
                  aria-label={link.type}
                >
                  <img src={link.icon} alt={link.type} />
                </a>
              );
            }

            const Icon = iconMap[link.icon]
            if (!Icon) return null;

            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links__link"
                aria-label={link.type}
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            )
          })}
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
