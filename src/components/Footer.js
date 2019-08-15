import React from 'react'
import wave from '../img/gray_divide2.png'

const Footer = () => {
  return(
    <footer className="footer">
      <div class="footer-wave">
        <img src={wave} alt="wave bg" />
      </div>
      <div className="footer-container">
        <h4>Social</h4>
        <ul>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </div>
      <div className="footer-bottom-container">
        <p class="footer-copyright">&#169; 2019 Brian Han</p>
      </div>
    </footer>
  )
}

export default Footer