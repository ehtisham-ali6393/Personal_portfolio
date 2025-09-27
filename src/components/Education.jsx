import React from 'react'

export default function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">My <span>Education</span></h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src="images/education/Integral.jpg" alt="Integral University" />
          </div>
          <div className="content">
            <h3>Bachelor of Technology</h3>
            <p>Faculty of Computer Science, Integral University | Lucknow, U.P. , India.</p>
            <h4>2022 - 2025 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="images/education/diploma.jpeg" alt="Diploma" />
          </div>
          <div className="content">
            <h3>Diploma in Engineering</h3>
            <p>Faculty of Electronics and Communication | Integral University | Lucknow, U.P. , India.</p>
            <h4>2019 - 2022 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="images/education/school.jpeg" alt="St. Fidelis College" />
          </div>
          <div className="content">
            <h3>High School & Intermediate</h3>
            <p>St. Fidelis College | Lucknow, U.P. , India.</p>
            <h4>2017 & 2019 | Completed</h4>
          </div>
        </div>

      </div>
    </section>
  )
}
