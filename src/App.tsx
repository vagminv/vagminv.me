import Header from './components/Header'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-header">
          <div className="app-header__main">
            <Header />
          </div>
          <div className="app-header__actions">
            <ThemeToggle />
          </div>
        </div>
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
