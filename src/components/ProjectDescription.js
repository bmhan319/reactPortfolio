import React from "react"

const ProjectDescription = (props) => {
  return(
    <section className="description-section">
      <div className="description-container">
        <div className="description-title-container">
          <h2 className={`description-title ${props.project.cssClass}-color`}>{props.project.descriptionTitle}</h2>
        </div>
        <div className="description-text-container">
          <p className="description-subtitle">{props.project.descriptionText1}</p>
          <hr className={`horizontal-line ${props.project.cssClass}-hr`}/>
          <p className="description-text">{props.project.descriptionText2}</p>
          <form action="https://www.w3docs.com/">
            <button className={`visit-button ${props.project.cssClass}-bg`} type="submit">Visit Site Recreation</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProjectDescription