import '../css/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        EUNJIN<span>.</span>
      </a>

      <nav>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <span className="nav-status">DEVELOPER PORTFOLIO</span>
    </header>
  )
}

export default Navbar