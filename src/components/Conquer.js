import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import Footer from './Footer'
import './../css/projects.css'
import conquer1 from '../img/conquer1.png'
import conquer2 from '../img/conquer2.png'
import conquer3 from '../img/conquer3.png'
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

class Conquer extends Component {
  state = {
    title: "Conquer Page",
    subtitle: "Site Recreation",
    cssClass: "conquer",
    descriptionTitle: "CONQUER",
    descriptionText1: "This project was a Webpage Recreation",
    descriptionText2: "Upon completion of my Certification class, I wanted to see if I would be able to receate another webpage pixel for pixel.  What attracted me to this page was the parallax features throughout the page and to see if this was something I would be able to recreate. I used CSS-Grids for this since we had gone over its existence in class but not actually learned about.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Javascript",
    gitHub: "https://github.com/bmhan319/CSSGrid-Conquer-Page",
    gitPage: "https://bmhan319.github.io/CSSGrid-Conquer-Page/",
    prev: "Block Renovations",
    next: "FESC"
  }

  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>        
        <section className="project-section">
          <div className="project-img-container">
            <img src={conquer1} alt="fesc homepage" className="project-img"/>
          </div>
        </section>
        <section className="project-section2">
          <div className="project-section2-top"></div>
          <div className="project-section2-bottom"></div>
          <div className="project-section2-content-container">
            <div className="project-img-container2">
              <img src={conquer2} alt="fesc fields page" className="project-img"/>
            </div>
            <div className="project-img-container3">
              <img src={conquer3} alt="fesc team page" className="project-img"/>
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
              <NavLink to="/block" className="hover">
                <span>
                  <img src={leftArrow} alt="left arrow" className="arrow"/>
                </span>
                {this.state.prev}
              </NavLink>
            </div>
            <div className="navigate-next">
              <NavLink to="/fesc" className="hover">
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

export default Conquer