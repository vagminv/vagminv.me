import { contact } from '../data/content'
import ResumeDownload from './ResumeDownload'

function Contact() {
  return (
    <section className="section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="section__title">Contact me</h2>
          <p className="contact-text">
            {contact.text}
          </p>
        </div>
        <div className="contact-resume">
          <ResumeDownload />
        </div>
      </div>
    </section>
  )
}

export default Contact
