import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import Footer from './Footer'
import './../css/projects.css'
import fescHome from '../img/fescHomepage.png'
import fescFields from '../img/fescFields.png'
import fescTeam from '../img/fescTeam.png'



class FESC extends Component {
  state = {
    title: "Florida Energy Systems Consortium",
    subtitle: "Site Redesign",
    cssClass: "fesc",
    descriptionTitle: "FESC",
    descriptionText: "FESC - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.",
  
  }

  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>
        <section className="project-section">
          <div className="project-img-container">
            <img src={fescHome} alt="fesc homepage" className="project-img"/>
          </div>
        </section>
        <section className="project-section2">
          <div className="project-section2-top"></div>
          <div className="project-section2-bottom"></div>
          <div className="project-section2-content-container">
            <div className="project-img-container2">
              <img src={fescFields} alt="fesc fields page" className="project-img"/>
            </div>
            <div className="project-img-container3">
              <img src={fescTeam} alt="fesc team page" className="project-img"/>
            </div>
          </div>
        </section>
        <section className="technologies-section">
          <div className="technologies-container">
            <div className="technologies-title-container">
              <h2 className="technologies-title">Technologies</h2>
            </div>
            <div className="technologies-text-container">
              <p className="technologies-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.
              </p>
              <a href="https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/">Go</a>
            </div>
          </div>
        </section>
        <section className="navigate-section">
          <div className="navigate-row1">
            <div className="navigate-prev">
              <NavLink to="/conquer">
                Conquer
              </NavLink>
            </div>
            <div className="navigate-next">
              <NavLink to="/calc">
                Calculator
              </NavLink>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default FESC