import React from 'react';

const ProjectWork = (props) => {
  return(
    <div className="project-work-wrapper">
      <section className={`project-section project-${props.project.cssClass}-noshow`}>
        <div className="project-section-wrapper">
          <div className="project-img-container">
            <img src={props.project.image[0]} alt={props.project.alt[0]} className="project-img"/>
          </div>
          <div className="project-img-description-container">
            <h3 className="project-img-description-header">{props.project.title1}</h3>
            <p className="project-img-description">{props.project.description1} <a className="project-page-link" href={props.project.gitPage} target="_blank" rel="noopener noreferrer">ViewPage</a></p>
          </div>
        </div>
      </section>
      <section className={`project-section project-${props.project.cssClass}-noshow`}>
        <div className="project-section-wrapper">
          <div className="project-img-container">
            <img src={props.project.image[1]}  alt={props.project.alt[1]} className="project-img"/>
          </div>
          <div className="project-img-description-container">
            <h3 className="project-img-description-header">{props.project.title2}</h3>
            <p className="project-img-description">{props.project.description2} <a className="project-page-link" href={props.project.page2} target="_blank" rel="noopener noreferrer">ViewPage</a></p>
          </div>
        </div>
      </section>
      <section className={`project-section project-last-section`}>
        <div className="project-section-wrapper">
          <div className="project-img-container">
            <img src={props.project.image[2]}  alt={props.project.alt[2]} className="project-img"/>
          </div>
          <div className="project-img-description-container">
            <h3 className="project-img-description-header">{props.project.title3}</h3>
            <p className="project-img-description">{props.project.description3} <a className="project-page-link" href={props.project.page3} target="_blank" rel="noopener noreferrer">ViewPage</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectWork