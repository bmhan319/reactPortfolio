import React from 'react';

const ProjectWork = (props) => {
  return(
    <div className="project-work-wrapper">
      <section className="project-section">
        <div className="project-img-container">
          <img src={props.project.image[0]} alt={props.project.alt[0]} className="project-img"/>
        </div>
      </section>
      <section className="project-section2">
        <div className="project-section2-top"></div>
        <div className="project-section2-bottom"></div>
        <div className="project-section2-content-container">
          <div className="project-img-container2">
            <img src={props.project.image[1]}  alt={props.project.alt[1]} className="project-img"/>
          </div>
          <div className="project-img-container3">
            <img src={props.project.image[2]}  alt={props.project.alt[2]} className="project-img"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectWork