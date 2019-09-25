import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import calc1 from '../img/calc1.png'

class Calc extends Component {
  state = {
    title: "Mac Style Calculator",
    cssClass: "calc",
    descriptionTitle: "calculator",
    descriptionText1: "Created Using React",
    descriptionText2: "After watching some React tutorials, I was looking for my first React project and saw that creating a calculator was suggested on many sites. Instead of following a calculator tutorial, I decided to see if this was something I could do on my own with the JS abilities I had developed up to that point." ,
    image: ["","",calc1],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    title1: "",
    title2: "",
    title3: "First React App",
    description1: "",
    description2: "",
    description3: "The calculator was built using CSS-Grid and made to look and have the same functionalities of the calculator found on a Mac laptop.",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "Javascript, React",
    tech4: "",
    tech5: "",
    originalSite: "",
    gitHub: "https://github.com/bmhan319/reactCalc",
    gitPage: "https://bmhan319.github.io/reactCalc/",
    page3: "https://bmhan319.github.io/reactCalc/",
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