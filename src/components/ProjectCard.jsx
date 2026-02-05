function ProjectCard({ title, description, tags }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-sm text-gray-900 mb-1.5">{title}</h3>
      <p className="text-xs text-gray-600 mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-[10px] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
