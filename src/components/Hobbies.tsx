import { hobbies } from '../data/content'

function Hobbies() {
  return (
    <section className="section">
      <h2 className="section__title">Hobbies</h2>
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <span
            key={index}
            className="hobby-tag"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
