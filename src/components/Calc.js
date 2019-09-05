import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import './../css/projects.css'
import block1 from '../img/block1.png'
import block2 from '../img/block2.png'
import block3 from '../img/block3.png'

class Calc extends Component {
  state = {
    title: "Mac Style Calculator",
    subtitle: "React Project",
    cssClass: "calc",
    descriptionTitle: "CALCULATOR",
    descriptionText1: "This was a class project from the UW Front-End Developer Certification course.",
    descriptionText2: "The idea was to redesign three pages of the FESC website.  I chose to do the Homepage, Meet the Team, Research -> Fields pages.  Additionally, a fourth page was added (About Us -> Energy Report) where we utilized google charts and the API from the U.S. Energy Info Administration.",
    image: [block1,block2,block3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Javascript",
    tech4: "",
    tech5: "",
    gitHub: "https://github.com/bmhan319/reactCalc",
    gitPage: "https://bmhan319.github.io/reactCalc/",
    prev: "FESC",
    next: "Stumptown",
    prevLink: "/fesc",
    nextLink: "/stumptown",
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

export default Calc