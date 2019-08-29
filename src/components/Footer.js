import React from 'react'
import resume from '../docs/resume2019.pdf'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-head-section">
        <div className="footer-work-together-container">
          <div className="work-together-title-container">
            <h2 className="work-together-title">Let's work together</h2>
          </div>
          <div className="work-together-text-container">
            <p className="work-together-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique, debitis sunt accusamus reprehenderit illo accusantium doloribus error culpa repudiandae voluptatem expedita maxime nesciunt vel commodi quae obcaecati dolore! Nihil.</p>
          </div>
        </div>
      </div>
      <div className="footer-tail-section">
        <div className="footer-row">
          <div className="footer-col1">
            <p className="footer-name">Brian Han <span className="footer-position">Web Developer</span></p>
          </div>
          <div className="footer-col2">
            <div className="footer-email">Email: <a className="hover footer-email-link" href="mailto:brianhan319@gmail.com">brianhan319@gmail.com</a></div> 
            <div className="footer-resume-container"><a href={resume} className="hover footer-resume">Resum{String.fromCharCode(233)}</a></div>
            <div className="footer-linkedin-container"><a href="linkedin" className="hover footer-linkedin">LinkedIn</a></div>
            <div className="footer-git-container"><a href="https://github.com/bmhan319/" className="hover footer-git">GitHub</a></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer