import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About Me</h2>
      <div className="row">
        <div className="image">
          <img src="about_profile.jpg" alt="profile" />
        </div>
        <div className="content">
          <h3>I'm Ehtisham Ali</h3>
          <span className="tag">Cloud & DevOps Enthusiast | Microsoft Certified | Web Developer </span>

          <p>
            I’m a B. Tech graduate in Cloud Technology & Information Security from Integral University, 
             driven by curiosity and a passion for innovation. I love turning ideas into<br/> impactful 
             digital experiences — from crafting sleek React.js frontends to deploying scalable applications 
             on the cloud.<br/> <br/>
            
            My journey so far has been a mix of design, development, and deployment, blending creativity with technical expertise. I’m constantly exploring new tools, learning emerging technologies, and pushing myself to build solutions that truly make a difference.
            </p>

          <div className="box-container">
            <div className="box">
              <p><span> Age : </span> 25</p>
              <p><span> Phone : </span> +971 54 470 5054</p>
            </div>
            <div className="box">
              <p><span> Email : </span> ehtishamofficial23@gmail.com</p>
              <p><span> Place : </span> Sharjah, United Arab Emirates</p>
            </div>
          </div>

          <div className="cvbtn">
            <a href="https://drive.google.com/file/d/1Bmt1cDR53PRIqIy8lJO9IoFprbt0y8pJ/view?usp=sharing" target="_blank" rel="noreferrer" className="btn"><span>Curriculum Vitae</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
