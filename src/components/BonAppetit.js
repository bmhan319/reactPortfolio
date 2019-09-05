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
    title: "Bon Appetit Page",
    subtitle: "Site Recreation",
    cssClass: "bonapp",
    descriptionTitle: "BON APPETIT",
    descriptionText: "Bon Appetit - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore ullam consequatur rem exercitationem odit nihil officia, unde provident nam sint fuga eius. Autem assumenda ut sapiente aperiam nihil non.",
    descriptionText1: "This project was a Webpage recreation",
    descriptionText2: "The Bon Apetit videos are ones that I watch fairly regularly on Youtube and so I decided to checkout their site.  While the build of this site seemed pretty straight forward on the homepage, the article page had some things that I had not done and was interested in trying to tackle.  There was a hidden popup menu bar that came up on scroll as well the effects of the hamburger menu when upon expanding.  But it was the Healthyish page that really caught my eye.  I was really curious on how to create a 2-column carousel that wrapped back to the beginning and thought it would be something that would be a challenge to myself.",
    image: [bonapp1,bonapp2,bonapp3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
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