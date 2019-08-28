import React from 'react'

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
            <span className="footer-email">Email: <a href="mailto:brianhan319@gmail.com">brianhan319@gmail.com</a></span> 
            
            <a href="resume" className="footer-resume">Resume</a>
            <a href="linkedin" className="footer-linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer