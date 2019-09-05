import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import './../css/projects.css'
import conquer1 from '../img/conquer1.png'
import conquer2 from '../img/conquer2.png'
import conquer3 from '../img/conquer3.png'

class Conquer extends Component {
  state = {
    title: "Conquer Page",
    subtitle: "Site Recreation",
    cssClass: "conquer",
    descriptionTitle: "CONQUER",
    descriptionText1: "This project was a Webpage recreation",
    descriptionText2: "Upon completion of my Certification class, I wanted to see if I would be able to receate another webpage pixel for pixel.  What attracted me to this page was the parallax features throughout the page and to see if this was something I would be able to recreate. I used CSS-Grids for this since we had gone over its existence in class but not actually learned about.",
    image: [conquer1,conquer2,conquer3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Javascript",
    gitHub: "https://github.com/bmhan319/CSSGrid-Conquer-Page",
    gitPage: "https://bmhan319.github.io/CSSGrid-Conquer-Page/",
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