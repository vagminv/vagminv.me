import { about } from '../data/content'

function About() {
  return (
    <section className="section">
      <blockquote className="quote">
        <p className="quote__text">{about[0]}</p>
        <cite className="quote__author">— Erwin Schrödinger</cite>
      </blockquote>
    </section>
  )
}

export default About
