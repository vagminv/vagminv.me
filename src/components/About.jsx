import { about } from '../data/content'

function About() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4">About</h2>
      <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
