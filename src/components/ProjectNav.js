import React from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

const ProjectNav = (props) => {
  return(
    <div className="project-nav-wrapper">
      <section className="navigate-section">
        <div className="navigate-row1">
          <div className="navigate-prev">
            <NavLink to={props.project.prevLink}>
              <span className="arrow-container">
                <img src={leftArrow} alt="left arrow" className="arrow"/>
              </span>
              <span className="nav-project-container hover">{props.project.prev}</span>
            </NavLink>
          </div>
          <div className="navigate-next">
            <NavLink to={props.project.nextLink}>
              <span className="nav-project-container hover">{props.project.next}</span>
              <span>
                <img src={rightArrow} alt="right arrow" className="arrow"/>
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectNav