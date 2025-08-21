import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Home() {
  const typedRef = useRef()

  useEffect(() => {
    const options = {
      strings: ['Ehtisham Ali!'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 2500
    }
    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="home" id="home">
      <div className="content">
        <h2>Hi There,<br /> I'm <span className="typing-text" ref={typedRef}></span></h2>
        <a href="#contact" className="btn"><span>Contact Me </span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socialmedia">
          <ul className="socmed-icon">
            <li><a className="linkedin" href="https://linkedin.com/in/ehtisham-ali-4a19831a0" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
            <li><a className="github" href="https://github.com/ehtisham-ali6393" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a className="twitter" href="https://twitter.com/Ehtisha73084186" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a className="instagram" href="https://www.instagram.com/ehtisham.ali007/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img src="home_profile.png" alt="Ehtisham_profile" />
      </div>
    </section>
  )
}
