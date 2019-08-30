import React from 'react'
import resume from '../docs/resume2019.pdf'

const Footer = () => {
  return(
    <footer className="footer">
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