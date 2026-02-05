function ExperienceItem({ logo, company, role, date, description }) {
  const isImageLogo = logo && logo.startsWith('/')

  return (
    <div className="flex gap-3">
      {isImageLogo ? (
        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-white border border-gray-200">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-full h-full object-contain p-1"
          />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
          {logo}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-0.5">
          <div>
            <h3 className="font-semibold text-sm text-gray-900">{company}</h3>
            <p className="text-xs text-gray-600">{role}</p>
          </div>
          <span className="text-xs text-gray-500 ml-4 whitespace-nowrap">{date}</span>
        </div>
        <ul className="mt-1.5 space-y-0.5">
          {description.map((item, index) => (
            <li key={index} className="text-xs text-gray-700 flex leading-relaxed">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceItem
