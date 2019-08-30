import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import Footer from './Footer'
import './../css/projects.css'

class Block extends Component {
  state = {
    title: "Block Renovations",
    subtitle: "Site Recreation",
    cssClass: "block",
    descriptionTitle: "BLOCK RENOVATIONS",
    descriptionText: "Block - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.",

  }
  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>
        <div className="temp-container">
          <a href="https://bmhan319.github.io/BlockRenovations/">Go</a>
          <NavLink to="/bonappetit">
            <button type="button">BonAppetit</button>
          </NavLink>
          <NavLink to="/conquer">
            <button type="button">Conquer</button>
          </NavLink>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Block