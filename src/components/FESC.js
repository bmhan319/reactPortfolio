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
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'



class FESC extends Component {
  state = {
    title: "Florida Energy Systems Consortium",
    subtitle: "Site Redesign",
    cssClass: "fesc",
    descriptionTitle: "FESC",
    descriptionText1: "This was a class project from the UW Front-End Developer Certification course.",
    descriptionText2: "The idea was to redesign three pages of the FESC website.  I chose to do the Homepage, Meet the Team, Research -> Fields pages.  Additionally, a fourth page was added (About Us -> Energy Report) where we utilized google charts and the API from the U.S. Energy Info Administration.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Sass",
    tech4: "API",
    tech5: "JS",
    gitHub: "https://github.com/bmhan319/FloridaEnergySystemsConsortium-redesign",
    gitPage: "https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/",
    prev: "Conquer",
    next: "Calculator"
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
              <h2 className={`technologies-title ${this.state.cssClass}-color`}>Technologies</h2>
            </div>
            <hr className={`tech-horizontal-line ${this.state.cssClass}-hr`}/>
            <div className="technologies-text-container">
              <ul className="technologies-text-list">
                <li className="technologies-text">{this.state.tech1}</li>
                <li className="technologies-text">{this.state.tech2}</li>
                <li className="technologies-text">{this.state.tech3}</li>
                <li className="technologies-text">{this.state.tech4}</li>
                <li className="technologies-text">{this.state.tech5}</li>
              </ul>
            </div>
          </div>

          <div className="resources-container">
            <div className="resources-title-container">
              <h2 className={`resources-title ${this.state.cssClass}-color`}>Resources</h2>
            </div>
            <hr className={`tech-horizontal-line ${this.state.cssClass}-hr`}/>
            <div className="resources-text-container">
              <ul className="resources-text-list">
                <li className="resources-text">
                  The GitHub repository is located here: <a className={`${this.state.cssClass}-color`} href={this.state.gitHub}>Github</a>
                </li>
                <li className="resources-text">
                  This project is online at: <a  className={`${this.state.cssClass}-color`} href={this.state.gitPage}>GitHub Pages</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="navigate-section">
          <div className="navigate-row1">
            <div className="navigate-prev">
              <NavLink to="/conquer" className="hover">
                <span>
                  <img src={leftArrow} alt="left arrow" className="arrow"/>
                </span>
                {this.state.prev}
              </NavLink>
            </div>
            <div className="navigate-next">
              <NavLink to="/calc" className="hover">
                {this.state.next}
                <span>
                  <img src={rightArrow} alt="right arrow" className="arrow"/>
                </span>
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