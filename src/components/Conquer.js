import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import Footer from './Footer'
import './../css/projects.css'

class Conquer extends Component {
  state = {
    title: "Conquer Page",
    subtitle: "Site Recreation",
    cssClass: "conquer",
    descriptionTitle: "CONQUER",
    descriptionText: "Conquer - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.",

  }

  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>
        <div className="temp-container">
          <a href="https://bmhan319.github.io/CSSGrid-Conquer-Page/">Go</a>
          <NavLink to="/block">
            <button type="button">Block</button>
          </NavLink>
          <NavLink to="/fesc">
            <button type="button">FESC</button>
          </NavLink>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Conquer