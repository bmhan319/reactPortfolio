import React, {Component} from 'react';
import ProjectHeader from './ProjectHeader'
import ProjectDescription from './ProjectDescription'
import ProjectWork from './ProjectWork'
import ProjectTech from './ProjectTech'
import ProjectNav from './ProjectNav'
import Footer from './Footer'
import stump1 from '../img/stump1.png'
import stump2 from '../img/stump2.png'
import stump3 from '../img/stump3.png'

class Stumptown extends Component {
  state = {
    title: "Stumptown Coffee",
    cssClass: "stumptown",
    descriptionTitle: "stumptown",
    descriptionText1: "Webpage Recreation",
    descriptionText2: "I wanted to do one more site recreation page just to provide one last platform to hone my html/css skills.  I wanted an e-commerce site just to switch things up again and landed on Stumptown.",
    image: [stump1,stump2,stump3],
    alt:["conquer top page","conquer repsonsive page","conquer repsonsive page"],
    title1: "Commerce Site",
    title2: "Product Page",
    title3: "Cart",
    description1: "The homepage has an effect where the products fade in as the user scrolls them into the viewport.  The menu icons start out at the bottom of the page and scroll up and eventually stick to the top.",
    description2: 'This site was chosen b/c I noticed when surfing through their various products, that the page layout was the same with the images, text and colors changing.  I created a giant array of product objects and used that to fill in the product template with the pertinent product information.  The page itself has some cool features, like the randomly generated graphics on the non-coffee items, and the "sticky scroll" of the middle and right columns.',
    description3: 'It was never my intention to create a shopping cart but as I was trying to figure out what to do for a 3rd page, it dawned on me to give it a go.  It taught me quite a bit about using Local Storage to transfer data from one page to another.',
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    originalSite: "https://www.stumptown.com/",
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