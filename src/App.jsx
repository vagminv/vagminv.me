import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-12">
        <Header />
        <SocialLinks />
        <About />
        <Education />
        <WorkExperience />
        <Projects />
        <Hobbies />
        <Contact />
      </div>
    </div>
  )
}

export default App
