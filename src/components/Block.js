import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import block1 from '../img/block1.png'
import block2 from '../img/block2.png'
import block3 from '../img/block3.png'

class Block extends Component {
  state = {
    title: "Block Renovations",
    cssClass: "block",
    descriptionTitle: "block renovations",
    descriptionText1: "Webpage Recreation",
    descriptionText2: "I had learned Javascript in class and on my own but had actually used it very little in the work I had done up to this point.  So fresh off of finishing the Conquer page, I decided to try re-creating this page due to the variety of JS parts I saw when I first came across this site.",
    buttonText: "Visit Site Recreation",
    image: [block1,block2,block3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    title1: "Interesting Features",
    title2: "Slideshows",
    title3: "More Slideshows",
    description1: "There were a number of parts I wanted to try.  The revolving carousel of company icons, a popup bar at the bottom of the screen and a logo animation in the footer.",
    description2: "Slideshows are a pretty common feature and so learning how to build one was on my list of things to do.",
    description3: "To take the slideshow one step further, I had to learn how to bring up a modal window with the image selected by the end user.  In addition to having the images slide from one to the other, I had to incorporate a multi-step zoom in/out function.",
    tech1: "HTML",
    tech2: "CSS / SCSS",
    tech3: "JavaScript",
    originalSite: "https://www.blockrenovation.com",
    gitHub: "https://github.com/bmhan319/BlockRenovations",
    gitPage: "https://bmhan319.github.io/BlockRenovations/",
    page2:"https://bmhan319.github.io/BlockRenovations/",
    page3: "https://bmhan319.github.io/BlockRenovations/",
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