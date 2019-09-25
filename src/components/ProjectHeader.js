import React from "react"
import { NavHashLink as NavLink } from 'react-router-hash-link';

const ProjectHeader = (props) => {
  return(
    <header id="top" className={`project-header-section ${props.project.cssClass}-image bg-image`}>
      <div className="homepage-container">
        <NavLink to="/#work">
          <svg className="home-icon" fill="transparent" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <path stroke="#fff" strokeWidth="4" d="M16 2L2.667 12v20H11V20.333h10V32h8.333V12z"/>
          </svg>
        </NavLink>
      </div>
      <div className="project-header-inner-container">
        <h1 className="project-title">{props.project.title}</h1>
      </div>
    </header>
  )
}

export default ProjectHeader
