import React from 'react'


const experience = [
  {
    img: 'images/experience/digital-ipsum.png',
    position: 'Web Design & Development Intern',
    company: 'Digital Ipsum Pvt. Ltd.',
    durtion: "Jul' 24 - Sep' 24",
    desc: 'At Digital Ipsum, I built and optimized responsive React.js components to ensure seamless cross-device performance and enhanced UI/UX accessibility, improving user engagement. I worked closely with senior developers to deliver client-focused projects on time and leveraged Git with Agile methodologies to maintain efficient version control and streamline workflows.',
    certificate: 'https://drive.google.com/file/d/1wLVueK3jS2mYdhLXdGqC-Zzk0x58uLKF/view?usp=sharing',
    LOR: 'https://drive.google.com/file/d/17jX99Oj_24Fj1UVX4RQ9VqHb5D_nc2Lt/view?usp=sharing'
  },
  
  {
    img: 'images/experience/gdsc.png',
    position: 'Digital Engagement Co-organizer',
    company: 'Google Developer Student Club @Integra University',
    durtion: "Aug' 24 - Apr' 25",
    desc: 'Led digital engagement at GDSC, managing social media and campaigns that increased online reach by 40%+ and boosted event participation across workshops and hackathons.',
    certificate: '',
    LOR: ''
  },

  {
    img: 'images/experience/iul.jpg',
    position: 'Academic Research',
    company: 'Integra University',
    durtion: "Feb' 25 - May' 25",
    desc: 'Botnet Attack Detection using Machine Learning – Completed a final-year thesis and research project developing ML models for botnet detection. Integrated algorithms like Random Forest and SVM to build an efficient detection framework. The project highlights my ability to combine research, technical implementation, and academic writing to address real cybersecurity challenges.',
    certificate: 'https://drive.google.com/file/d/1CmzKiYj8HjudJlyxXfycuC-XY65WN6a4/view?usp=sharing',
    LOR: 'https://drive.google.com/file/d/1ikDkAnmWnyhrMqpVH1Cea4wtsnzYgD2R/view?usp=sharing'
  }
]

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="heading"> Experiences & Achievements</h2>
      <div className="box-container">
        {experience.map((experience, idx) => (
          <div className="box" key={idx}>
            <img src={experience.img} alt={experience.position} />
            <div className="content">
              <div className="tag">
                <h3>{experience.position}</h3>
              </div>
              <div className="desc">
                <h1>{experience.company}</h1>
                <h3>{experience.durtion}</h3>
                <p>{experience.desc}</p>
                <div className="btns">
                  {experience.certificate && (<a href={experience.certificate} className="btn" target="_blank" rel="noreferrer">Certificate</a>)}
                  {experience.LOR && (<a href={experience.LOR} className="btn" target="_blank" rel="noreferrer">Letter</a>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
