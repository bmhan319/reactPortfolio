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
    descriptionText2: "This was my 3rd React project after the Calculator and this Portfolio.  Just like the calculator, this always seemed to be recommended as a project to build in React...so I built it." ,
    buttonText: "Visit Weather App",
    image: ["",weather2,weather3],
    alt:["weather app","weather app","weather app"],
    title1: "",
    title2: "API",
    title3: "Styling",
    description1: "",
    description2: "This app required making multiple API calls with each entry submission to get the various types of data I wanted displayed on the app. In addition, I had to figure out how to hide the API Key from being seen within the code.",
    description3: "Depending on the time of day at the selected city, a day or night themed image would show up a the bg image.",
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