import { hobbies } from '../data/content'

function Hobbies() {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Hobbies</h2>
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby, index) => (
          <span
            key={index}
            className="bg-gray-800 text-white px-2.5 py-1 rounded-full text-xs font-medium"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
