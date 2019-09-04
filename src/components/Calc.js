import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import Footer from './Footer'
import './../css/projects.css'

class Calc extends Component {
  state = {
    title: "Mac Style Calculator",
    subtitle: "React Project",
    cssClass: "calc",
    descriptionTitle: "CALCULATOR",
    descriptionText1: "This was a class project from the UW Front-End Developer Certification course.",
    descriptionText2: "The idea was to redesign three pages of the FESC website.  I chose to do the Homepage, Meet the Team, Research -> Fields pages.  Additionally, a fourth page was added (About Us -> Energy Report) where we utilized google charts and the API from the U.S. Energy Info Administration.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Javascript",
    tech4: "",
    tech5: "",
    gitHub: "https://github.com/bmhan319/CSSGrid-Conquer-Page",
    gitPage: "https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/",
  }

  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>
        <div className="temp-container">
          <a href="https://bmhan319.github.io/reactCalc/">Go</a>
          <NavLink to="/fesc">
            <button type="button">FESC</button>
          </NavLink>
          <NavLink to="/stumptown">
            <button type="button">Stumptown</button>
          </NavLink>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Calc