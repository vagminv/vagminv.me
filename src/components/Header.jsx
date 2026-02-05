import { MapPin } from 'lucide-react'
import { personalInfo } from '../data/content'

function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-1.5">
          {personalInfo.name}
        </h1>
        <p className="text-xs font-mono text-gray-600 mb-2 leading-relaxed">
          {personalInfo.role}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>
      </div>
      {personalInfo.profileImage && (
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {!personalInfo.profileImage && (
        <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl font-bold text-gray-400">
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
    </div>
  )
}

export default Header
