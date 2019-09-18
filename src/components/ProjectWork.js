import React from 'react';

const ProjectWork = (props) => {
  return(
    <div className="project-work-wrapper">
      <section className="project-section">
        <div className="project-section-wrapper">
          <div className="project-img-container">
            <img src={props.project.image[0]} alt={props.project.alt[0]} className="project-img"/>
          </div>
          <div className="project-img-description-container">
            <h3 className="project-img-description-header">Title</h3>
            <p className="project-img-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam nulla voluptatum labore nihil temporibus sequi, ipsum eos corrupti quidem voluptatibus culpa amet sit rerum beatae? Quo possimus inventore blanditiis.</p>
          </div>
        </div>
      </section>
      <section className="project-section">
        <div className="project-section-wrapper">
          <div className="project-img-container">
            <img src={props.project.image[1]}  alt={props.project.alt[1]} className="project-img"/>
          </div>
          <div className="project-img-description-container">
            <h3 className="project-img-description-header">Title</h3>
            <p className="project-img-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam nulla voluptatum labore nihil temporibus sequi, ipsum eos corrupti quidem voluptatibus culpa amet sit rerum beatae? Quo possimus inventore blanditiis.</p>
          </div>
        </div>
      </section>
      <section className="project-section project-last-section">
        <div className="project-section-wrapper">
          <div className="project-img-container">
            <img src={props.project.image[2]}  alt={props.project.alt[2]} className="project-img"/>
          </div>
          <div className="project-img-description-container">
            <h3 className="project-img-description-header">Title</h3>
            <p className="project-img-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium numquam nulla voluptatum labore nihil temporibus sequi, ipsum eos corrupti quidem voluptatibus culpa amet sit rerum beatae? Quo possimus inventore blanditiis.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectWork