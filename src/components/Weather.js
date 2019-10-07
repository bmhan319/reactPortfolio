import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import weather1 from '../img/weather1.jpg'

class Weather extends Component {

  state = {
    title: "Weather",
    cssClass: "weather",
    descriptionTitle: "weather app",
    descriptionText1: "Created Using React",
    descriptionText2: "This was my 3rd React project after the Calculator and this Portfolio." ,
    buttonText: "Visit Weather App",
    image: [weather1,weather1,weather1],
    alt:["weather app","weather app","weather app"],
    title1: "",
    title2: "",
    title3: "Weather App",
    description1: "I styled the app using SCSS.",
    description2: "Gave it a day, night skin",
    description3: "I had to make multiple API calls with each entry submission as well as figure out how to hide the API Key",
    tech1: "HTML",
    tech2: "CSS / SCSS",
    tech3: "Javascript, React",
    tech4: "",
    tech5: "",
    originalSite: "",
    gitHub: "https://github.com/bmhan319/reactWeatherApp/",
    gitPage: "https://bmhan319.github.io/reactWeatherApp/",
    page3: "https://bmhan319.github.io/reactWeatherApp/",
    prev: "FESC",
    next: "Calc",
    prevLink: "/fesc",
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

export default Weather