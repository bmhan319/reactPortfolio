import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import './../css/projects.css'
import stump1 from '../img/stump1.png'
import stump2 from '../img/stump2.png'
import stump3 from '../img/stump3.png'

class Stumptown extends Component {
  state = {
    title: "Stumptown Coffee",
    subtitle: "Site Recreation",
    cssClass: "stumptown",
    descriptionTitle: "STUMPTOWN",
    descriptionText1: "This project was a Webpage recreation",
    descriptionText2: "I was searching the internet looking for an interesting site when I checked out the Stumptown site.  I noticed that every product page followed the same general template.  Also, the page had some interesting features to them. I wanted to see if I would be able to create a product page template and have it fill in the appropriate data, images and colors depending on the chosen product.  Over the course of recreating the site, I also got curious as to how data would move into a shopping cart and explored some of the processes behind that.",
    image: [stump1,stump2,stump3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    gitHub: "https://github.com/bmhan319/stumptown",
    gitPage: "https://bmhan319.github.io/stumptown/",
    prev: "Calculator",
    next: "Bon Appetit",
    prevLink: "/calc",
    nextLink: "/bonappetit",
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

export default Stumptown