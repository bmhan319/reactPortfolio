import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import weather1 from '../img/weather1.png'
import weather2 from '../img/weather2.png'
import weather3 from '../img/weather3.png'

class Weather extends Component {

  state = {
    title: "Weather",
    cssClass: "weather",
    descriptionTitle: "weather app",
    descriptionText1: "Created Using React",
    descriptionText2: "Another app that always came up as a good one to build was a weather app.  This was my 3rd React project after the Calculator and this Portfolio." ,
    buttonText: "Visit Weather App",
    image: [weather1,weather2,weather3],
    alt:["weather app","weather app","weather app"],
    title1: "",
    title2: "",
    title3: "",
    description1: "I had to make multiple API calls with each entry submission as well as figure out how to hide the API Key.",
    description2: "The styling on this app was done using SCSS.  Created a a day/night skin to show up depending on what time of the day it was at the requested city .",
    description3: "There is a lot of room on this app to keep expanding and updating features.  I do have some ideas in mind such as custom day/night skins for every country or looking up multiple cities.",
    tech1: "HTML",
    tech2: "CSS / SCSS",
    tech3: "Javascript, React",
    tech4: "",
    tech5: "",
    originalSite: "",
    gitHub: "https://github.com/bmhan319/reactWeatherApp/",
    gitPage: "https://bmhan319.github.io/reactWeatherApp/",
    page2: "https://bmhan319.github.io/reactWeatherApp/",
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