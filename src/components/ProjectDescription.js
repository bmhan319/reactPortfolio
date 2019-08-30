import React from "react"

const ProjectDescription = (props) => {
  return(
    <section className="description-section">
      <div className="description-container">
        <div className="description-title-container">
          <h2 className={`description-title ${props.project.cssClass}-color`}>{props.project.descriptionTitle}</h2>
        </div>
        <div className="description-text-container">
          <p className="description-text">{props.project.descriptionText}</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription