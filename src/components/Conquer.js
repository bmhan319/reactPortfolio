import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import conquer1 from '../img/conquer1.png'
import conquer2 from '../img/conquer2.png'
import conquer3 from '../img/conquer3.png'

class Conquer extends Component {
  state = {
    title: "Conquer Page",
    cssClass: "conquer",
    descriptionTitle: "conquer",
    descriptionText1: "Webpage Recreation",
    descriptionText2: "Upon completion of my Certification class, I wanted to try my hand at recreating a webpage to as close to pixel for pixel as possible.  I chose this web template.",
    image: [conquer1,conquer2,conquer3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    title1: "Parallax",
    title2: "Responsiveness",
    title3: "CSS-Grid",
    description1: "What initially attracted me to this page was the parallax features throughout the page. It's a style I had noticed on other sites and thought this would be a great opportunity to figure out how it's done.",
    description2: "This page also looked to be a good choice due to the page having rows containing varying numbers of columns. It was a good chance at strengthening my responsive abilities.",
    description3: "After creating this page, I remembered in class the instructors had mentioned CSS-Grid but we didn't actually learn it.  So after a little self-learning, I remade the page using the CSS-Grids principles.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Javascript",
    originalSite: "",
    gitHub: "https://github.com/bmhan319/CSSGrid-Conquer-Page",
    gitPage: "https://bmhan319.github.io/CSSGrid-Conquer-Page/",
    page2: "https://bmhan319.github.io/CSSGrid-Conquer-Page/",
    page3: "https://bmhan319.github.io/CSSGrid-Conquer-Page/",
    prev: "Block Renovations",
    next: "FESC",
    prevLink: "/block",
    nextLink: "/fesc",
  }

  render() {
    return(
      <div className="project-wrapper">
        <ProjectHeader project={this.state}/>
        <ProjectDescription project={this.state}/>    
        <ProjectWork project={this.state}/>    
        <ProjectTech project={this.state}/>
        <ProjectNav project={this.state}/>
        <Footer />
      </div>
    )
  }
}

export default Conquer