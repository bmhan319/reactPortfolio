import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import Footer from './Footer'
import './../css/projects.css'

class Stumptown extends Component {
  state = {
    title: "Stumptown Coffee",
    subtitle: "Site Recreation",
    cssClass: "stumptown",
    descriptionTitle: "STUMPTOWN",
    descriptionText: "Stumptown - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.",

  }

  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>
        <div className="temp-container">
          <a href="https://bmhan319.github.io/stumptown/">Go</a>
          <NavLink to="/calc">
            <button type="button">Calculator</button>
          </NavLink>
          <NavLink to="/bonappetit">
            <button type="button">BonAppetit</button>
          </NavLink>
        </div>
         <Footer />
      </div>
    )
  }
}

export default Stumptown