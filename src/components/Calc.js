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
    descriptionText: "Calculator - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.",

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