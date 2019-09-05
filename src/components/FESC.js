import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
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
    descriptionText1: "This was a class project from the UW Front-End Developer Certification course.",
    descriptionText2: "The idea was to redesign three pages of the FESC website.  I chose to do the Homepage, Meet the Team, Research -> Fields pages.  Additionally, a fourth page was added (About Us -> Energy Report) where we utilized google charts and the API from the U.S. Energy Info Administration.",
    image: [fescHome,fescFields,fescTeam],
    alt:["fesc home page","fesc fields page","fesc team page"],
    tech1: "HTML",
    tech2: "CSS with Sass",
    tech3: "JavaScript",
    gitHub: "https://github.com/bmhan319/FloridaEnergySystemsConsortium-redesign",
    gitPage: "https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/",
    prev: "Conquer",
    next: "Calculator",
    prevLink: "/conquer",
    nextLink: "/calc",
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

export default FESC