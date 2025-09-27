import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects/>
        <Contact />
        <Footer />
      </main>
    </>
  )
}
