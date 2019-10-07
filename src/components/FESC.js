import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import fescHome from '../img/fescHomepage.png'
import fescFields from '../img/fescFields.png'
import fescReport from '../img/fescReport.png'



class FESC extends Component {
  state = {
    title: "Florida Energy Systems Consortium",
    subtitle: "Site Redesign",
    cssClass: "fesc",
    descriptionTitle: "FESC",
    descriptionText1: "Final Class Project",
    descriptionText2: "The goal of the assignment was to redesign three pages of the FESC website to give it a fresher feel.  I chose to do the Homepage, Meet the Team, Research -> Fields pages.",
    buttonText: "Visit Redesigned Site",
    image: [fescHome,fescFields,fescReport],
    alt:["fesc home page","fesc fields page","fesc team page"],
    title1: "Navigation",
    title2: "The Look",
    title3: "API and Google Charts",
    description1: "The original site was just so jam packed with links and information that it was very hard to find the information you were looking for.  I re-worked the nav menus and links to make it easier for the user to get to the page they were interested in.",
    description2: "A goal of mine in re-working the site was to make it more pleasing to the eye.  I softened up the body by using containers with rounded corners, big colorful icons and kept the base colors to ones we normally represent with clean energy.",
    description3: "Additionally, we were tasked with making a fourth page (About us --> Energy Report) that incorporated the use of the US Energy Info Admin api and using Google charts to represent the data.",
    tech1: "HTML",
    tech2: "CSS / SCSS",
    tech3: "JavaScript",
    originalSite: "http://floridaenergy.ufl.edu/",
    gitHub: "https://github.com/bmhan319/FloridaEnergySystemsConsortium-redesign",
    gitPage: "https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/",
    page2:"https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/research.html",
    page3: "https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/energy-report.html",
    prev: "Conquer",
    next: "Weather",
    prevLink: "/conquer",
    nextLink: "/weather",
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