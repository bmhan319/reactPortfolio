import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import './../css/projects.css'
import './../css/projects.css'
import bonapp1 from '../img/bonapp1.png'
import bonapp2 from '../img/bonapp2.png'
import bonapp3 from '../img/bonapp3.png'

class BonAppetit extends Component {
  state = {
    title: "Bon Appetit",
    cssClass: "bonapp",
    descriptionTitle: "bon appetit",
    descriptionText1: "Website Recreation",
    descriptionText2: "After successfully recreating a couple of web pages, I thought I would try doing multiple pages.  The Bon Apetit videos are ones that I watch fairly regularly on Youtube and so I decided to checkout their site.",
    image: [bonapp1,bonapp2,bonapp3],
    alt:["conquer top page","conquer responsive page","conquer responsive page"],
    title1: "Content Site",
    title2: "Nav Menu",
    title3: "Healythish",
    description1: "Just to mix things up, I picked this site since they mostly deliver information in an article format and the layout was more appealing than a news site.",
    description2: "What was interesting to me on this was in recreating the nav menu that slid down and faded into view.",
    description3: 'This page is what got caught my curiosity on this site.  The page is split in half vertically and on clicking the "next" button, I had to figure out how one column would go up while the other down to deliver the next set of slides.  Eventually, the slides circle back to the first slide.  I had a carousel on the Block Renovation site and used a library for it but did it myself on this site.',
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    originalSite: "https://www.bonappetit.com/",
    gitHub: "https://github.com/bmhan319/bon-appetit",
    gitPage: "https://bmhan319.github.io/bon-appetit/",
    prev: "Stumptown",
    next: "Block",
    prevLink: "/stumptown",
    nextLink: "/block",
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

export default BonAppetit