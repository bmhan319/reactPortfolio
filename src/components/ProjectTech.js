import React from 'react';

const ProjectTech = (props) => {
  return(
    <div className="project-tech-wrapper">
      <section className="technologies-section">
        <div className="technologies-container">
          <div className="technologies-title-container">
            <h2 className={`technologies-title ${props.project.cssClass}-color`}>Technologies</h2>
          </div>
          <hr className={`tech-horizontal-line ${props.project.cssClass}-hr`}/>
          <div className="technologies-text-container">
            <ul className="technologies-text-list">
              <li className="technologies-text">{props.project.tech1}</li>
              <li className="technologies-text">{props.project.tech2}</li>
              <li className="technologies-text">{props.project.tech3}</li>
            </ul>
          </div>
        </div>

        <div className="resources-container">
          <div className="resources-title-container">
            <h2 className={`resources-title ${props.project.cssClass}-color`}>Resources</h2>
          </div>
          <hr className={`tech-horizontal-line ${props.project.cssClass}-hr`}/>
          <div className="resources-text-container">
            <ul className="resources-text-list">
              <li className={`resources-text ${props.project.cssClass}-visible`}>
                Original Site: <a className={`${props.project.cssClass}-color`} href={props.project.originalSite}>{props.project.title}</a>
              </li>
              <li className="resources-text">
                The GitHub repository is located here: <a className={`${props.project.cssClass}-color`} href={props.project.gitHub}>Github</a>
              </li>
              <li className="resources-text">
                This project is online at: <a  className={`${props.project.cssClass}-color`} href={props.project.gitPage}>GitHub Pages</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectTech