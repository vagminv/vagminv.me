import { about } from '../data/content'

function About() {
  return (
    <section className="section">
      <h2 className="section__title">About</h2>
      <div className="section__content">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
