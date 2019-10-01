import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Intro = () => {
  return(
    <header className="section-header">
      <nav className="navbar">
        <div className="nav-name-container">
          <h1 className="nav-name">Brian Han <span className="nav-position">Web Developer</span></h1>
        </div>
        <ul className="nav-menu-container">
          <li className="nav-menu-item menu1"><Link className="hover" to="#about">About</Link></li>
          <li className="nav-menu-item menu2"><Link className="hover" to="#skills">Skills</Link></li>
          <li className="nav-menu-item menu3"><Link className="hover" to="#work">Work</Link></li>
        </ul>
      </nav>
      <div className="title-container">
        <h1 className="title">Perfecting Pixels.<br />Crafting code.</h1>
      </div>
    </header>
  )
}

export default Intro
