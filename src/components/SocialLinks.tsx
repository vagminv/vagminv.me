import { Mail, Linkedin, Github, Globe } from 'lucide-react'
import { socialLinks } from '../data/content'
import type { LucideProps } from 'lucide-react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Linkedin,
  Github,
  Globe
}

function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
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
  )
}

export default SocialLinks
