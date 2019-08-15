import React from 'react'
import language from '../img/web-programming.svg'
import web from '../img/domain.svg'
import tools from '../img/tools.svg'

const Skills = () => {
  return(
    <section class="skills-section">
      <a name="skills"></a>
      <div className="skills-container">
        <div className="box box1">
          <div className="skills-icon-container">
            <img className="skills-icon" src={language} alt="web icon" />
          </div>
          <div className="skills-language-container">
            <h3 className="skills-language">Languages</h3>
            <ul className="skills-language-list">
              <li className="skills-language-list-item">HTML</li>
              <li className="skills-language-list-item">CSS</li>
              <li className="skills-language-list-item">Javascript</li>
            </ul>
          </div>
        </div>

        <div className="box box2">
          <div className="skills-icon-container">
            <img className="skills-icon" src={web} alt="web icon" />
          </div>
          <div className="skills-title-container">
            <h3 className="skills-title">Web Developer</h3>
            <p className="skills-text">I enjoy taking great design and bringing them to life on the computer screen.</p>
          </div>         
        </div>
        
        <div className="box box3">
          <div className="skills-icon-container">
            <img className="skills-icon" src={tools} alt="web icon" />
          </div>
          <div className="skills-language-container">
            <h3 className="skills-language">Dev Tools</h3>
            <ul className="skills-language-list">
              <li className="skills-language-list-item">React</li>
              <li className="skills-language-list-item">Git</li>
              <li className="skills-language-list-item">Unix</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills