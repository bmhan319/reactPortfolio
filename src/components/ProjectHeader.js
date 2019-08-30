import React from "react"
import { NavHashLink as NavLink } from 'react-router-hash-link';

const ProjectHeader = (props) => {
  return(
    <header className={`project-header-section ${props.project.cssClass}-bgcolor`}>
      <div className="homepage-container">
        <NavLink to="/#work">
          <svg className="home-icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-7 0 40 40">
            <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
          </svg>
        </NavLink>
      </div>
      <div className="project-header-inner-container">
        <h1 className="project-title">{props.project.title}</h1>
        <p className="project-subtitle">{props.project.subtitle}</p>
      </div>
    </header>
  )
}

export default ProjectHeader
