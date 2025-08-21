import React from "react";

const ProjectCard = ({ project,techStack, img, highlights, links }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={img} alt={`${project} img`} className="project-img" />
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <h3>🎨 {project}</h3>
          <h4>{techStack}</h4>

          {/* Highlights */}
          <ul>
            {highlights && highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* Buttons for Documents */}
          {links && (
            <div className="card-buttons">
              {links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects Made</h2>

      <div className="project-container">

        <ProjectCard
          project="Palette Fusion "
          img="images/project/palette-fusion.png"
          techStack="HTML ● CSS ● JavaScript"
          highlights={[
            <> Generate stunning color palettes instantly with smart algorithms.</>,
            <> Responsive & interactive UI.</>,
            <> Save, copy & share palettes for effortless collaboration.</>,
            <> Optimized for performance across devices and browsers.</>
          ]}
          links={[
            { label: "View 🌐", url: "https://ehtisham-ali6393.github.io/Palette-Fusion/" },
            { label: "Code </>", url: "https://github.com/ehtisham-ali6393/Palette-Fusion?tab=readme-ov-file" }
          ]}
        />

        <ProjectCard
          project="Palette Fusion "
          img="images/project/palette-fusion.png"
          techStack="HTML ● CSS ● JavaScript"
          highlights={[
            <> Generate stunning color palettes instantly with smart algorithms.</>,
            <> Responsive & interactive UI.</>,
            <> Save, copy & share palettes for effortless collaboration.</>,
            <> Optimized for performance across devices and browsers.</>
          ]}
          links={[
            { label: "View 🌐", url: "https://ehtisham-ali6393.github.io/Palette-Fusion/" },
            { label: "Code </>", url: "https://github.com/ehtisham-ali6393/Palette-Fusion?tab=readme-ov-file" }
          ]}
        />

        <ProjectCard
          project="Palette Fusion "
          img="images/project/palette-fusion.png"
          techStack="HTML ● CSS ● JavaScript"
          highlights={[
            <> Generate stunning color palettes instantly with smart algorithms.</>,
            <> Responsive & interactive UI.</>,
            <> Save, copy & share palettes for effortless collaboration.</>,
            <> Optimized for performance across devices and browsers.</>
          ]}
          links={[
            { label: "View 🌐", url: "https://ehtisham-ali6393.github.io/Palette-Fusion/" },
            { label: "Code </>", url: "https://github.com/ehtisham-ali6393/Palette-Fusion?tab=readme-ov-file" }
          ]}
        />

      </div>
    </section>
  );
};

export default Projects;
