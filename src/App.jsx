import './App.css'
import Navbar from './components/jsx/Navbar'
import Hero from './components/jsx/sections/Hero'
import About from './components/jsx/sections/About'
import Skills from './components/jsx/sections/Skills'
import Projects from './components/jsx/sections/Projects'
import Contact from './components/jsx/sections/Contact'
import Footer from './components/jsx/sections/Footer'

function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App