import { Mail, Linkedin, Github, Globe } from 'lucide-react'
import { socialLinks } from '../data/content'

const iconMap = {
  Mail,
  Linkedin,
  Github,
  Globe
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <a
            key={link.type}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label={link.type}
          >
            <Icon size={18} className="text-gray-700" strokeWidth={1.5} />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
