import { education } from '../data/content'

function Education() {
  const isImageLogo = education.logo && education.logo.startsWith('/')

  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Education</h2>
      <div className="flex gap-3">
        {isImageLogo ? (
          <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-white border border-gray-200">
            <img
              src={education.logo}
              alt={`${education.institution} logo`}
              className="w-full h-full object-contain p-1"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
            {education.logo}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-0.5">
            <h3 className="font-semibold text-sm text-gray-900">{education.institution}</h3>
            <span className="text-xs text-gray-500">{education.date}</span>
          </div>
          <p className="text-xs text-gray-600 mb-0.5">{education.degree}</p>
          <p className="text-xs text-gray-600 mb-2">GPA: {education.gpa}</p>
          <div className="text-xs text-gray-700 leading-relaxed">
            <span className="font-medium">Relevant Coursework: </span>
            <span>{education.coursework.join(', ')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
