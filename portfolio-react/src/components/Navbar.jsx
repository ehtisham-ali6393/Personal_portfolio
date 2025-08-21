import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      // close mobile nav on scroll
      setMenuOpen(false)

      const sections = Array.from(document.querySelectorAll('section'))
      const top = window.scrollY
      sections.forEach((section) => {
        const height = section.offsetHeight
        const offset = section.offsetTop - 200
        const id = section.getAttribute('id')
        if (top > offset && top < offset + height) {
          setActiveId(id)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close when clicking a nav link (mobile)
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header>
      <div><img src="logo-nav.png" alt="Ehtisham_profile" className='logo' /></div>
      
      <div
        id="menu"
        className={`fas fa-bars ${menuOpen ? 'fa-times' : ''}`}
        onClick={() => setMenuOpen((s) => !s)}
        role="button"
        aria-label="toggle menu"
      ></div>

      <nav className={`navbar ${menuOpen ? 'nav-toggle' : ''}`}>
        <ul>
          <li><a className={activeId === 'home' ? 'active' : ''} href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a className={activeId === 'about' ? 'active' : ''} href="#about" onClick={handleNavClick}>About</a></li>
          <li><a className={activeId === 'skills' ? 'active' : ''} href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a className={activeId === 'experience' ? 'active' : ''} href="#experience" onClick={handleNavClick}>Experience</a></li>
          <li><a className={activeId === 'education' ? 'active' : ''} href="#education" onClick={handleNavClick}>Education</a></li>
          <li><a className={activeId === 'projects' ? 'active' : ''} href="#projects" onClick={handleNavClick}>Projects</a></li>
        </ul>
      </nav>
    </header>
  )
}
