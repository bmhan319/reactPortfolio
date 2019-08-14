import React from 'react'

const About = () => {
  return (
    <section class="about-container">
      <div className="about-image-container">
        <img src="https://picsum.photos/1920/1080" alt="Brian Han" className="about-image"/>
      </div>
      <div className="about-text-container">
        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Harum ipsa commodi blanditiis quidem qui dolorem, asperiores ipsum, magnam obcaecati voluptatum 
        accusamus sed reiciendis amet fugiat provident, laudantium officia vel error. Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Harum ipsa commodi blanditiis quidem qui dolorem, asperiores 
        ipsum, magnam obcaecati voluptatum accusamus sed reiciendis amet fugiat provident, laudantium 
        officia vel error.</p>
      </div>
      <button type="button" className="about-contact">Contact</button>
    </section>
  )
}

export default About