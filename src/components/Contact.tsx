import { contact } from '../data/content'
import ResumeDownload from './ResumeDownload'

function Contact() {
  return (
    <section className="section">
      <h2 className="section__title">Contact me</h2>
      <p className="contact-text">
        {contact.text}{' '}
        <a
          href={`mailto:${contact.email}`}
          className="contact-link"
        >
          {contact.email}
        </a>
      </p>
      <div className="contact-resume">
        <ResumeDownload />
      </div>
    </section>
  )
}

export default Contact
