import { contact } from '../data/content'

function Contact() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Contact me</h2>
      <p className="text-sm text-gray-700">
        {contact.text}{' '}
        <a
          href={`mailto:${contact.email}`}
          className="text-gray-900 font-medium hover:underline"
        >
          {contact.email}
        </a>
      </p>
    </section>
  )
}

export default Contact
