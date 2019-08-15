import React from 'react'
import web from '../img/web-programming.svg'

const Skills = () => {
  return(
    <section class="skills-section">
      <a name="skills"></a>
      <div className="skills-container">
        <div className="box box1">
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
            <h2 className="skills-title">Web Developer</h2>
            <p className="skills-text">I enjoy taking great design and bringing them into life on the computer screen.</p>
          </div>         
        </div>
        
        <div className="box box3">
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