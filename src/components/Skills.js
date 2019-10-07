import React from 'react'
import language from '../img/web-programming.svg'
import web from '../img/domain.svg'
import tools from '../img/tools.svg'

const Skills = () => {
  return(
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="box box1">
          <div className="skills-icon-container">
            <img className="skills-icon" src={language} alt="web icon" />
          </div>
          <div className="skills-list-container">
            <h3 className="skills-title">Languages</h3>
            <ul className="skills-list">
              <li className="skills-list-item">HTML</li>
              <li className="skills-list-item">CSS</li>
              <li className="skills-list-item">Javascript</li>
            </ul>
          </div>
        </div>

        <div className="box box2">
          <div className="skills-icon-container">
            <img className="skills-icon" src={web} alt="web icon" />
          </div>
          <div className="skills-list-container">
            <h3 className="skills-title">Web Developer</h3>
            <ul className="skills-list">
              <li className="skills-list-item">Collaboration</li>
              <li className="skills-list-item">Problem Solving</li>
              <li className="skills-list-item">Quick Thinking</li>
            </ul>
          </div>         
        </div>
        
        <div className="box box3">
          <div className="skills-icon-container">
            <img className="skills-icon" src={tools} alt="web icon" />
          </div>
          <div className="skills-list-container">
            <h3 className="skills-title">Dev Tools</h3>
            <ul className="skills-list">
              <li className="skills-list-item">Sass</li>
              <li className="skills-list-item">React</li>
              <li className="skills-list-item">Git</li>
              <li className="skills-list-item">Unix</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills