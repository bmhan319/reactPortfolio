import React from 'react'
import brian from '../img/brian.jpg'

const About = () => {
  return (
    <section class="about-section">
      <a name="about"></a>
      <div className="about-container">
        <div className="about-image-container">
          <img src={brian} alt="Brian Han" className="about-image"/>
        </div>
        <div className="about-text-container">
          <p className="about-text">Brian Han is a former Project Manager coming from the world of Feature Film 
            Post Production.  Looking to make a career change, he discovered a passion for Web Development and 
            is pursuing his goals of making a career out of it.</p>
        </div>
        <button type="button" className="about-contact">Contact</button>
      </div>
    </section>
  )
}

export default About