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

class Block extends Component {
  state = {
    title: "Block Renovations",
    subtitle: "Site Recreation",
    cssClass: "block",
    descriptionTitle: "BLOCK RENOVATIONS",
    descriptionText1: "This project was a Webpage recreation",
    descriptionText2: "I chose this site to recreate b/c it had some interesting features to it that I wanted to see if I would be able to recreate.  There was a sliding carousel of reviews, a photo slideshow as well an animation of the block logo at the footer.",
    image: [block1,block2,block3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    gitHub: "https://github.com/bmhan319/BlockRenovations",
    gitPage: "https://bmhan319.github.io/BlockRenovations/",
    prev: "Bon Appetit",
    next: "Conquer",
    prevLink: "/bonappetit",
    nextLink: "/conquer",
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

export default Block