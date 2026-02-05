import Header from './components/Header'
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
      <ThemeToggle />
      <div className="app-content">
        <Header />
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
