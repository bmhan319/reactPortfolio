import React from 'react';

const Intro = () => {
  return(
    <div className="section-top">
      <nav className="navbar">
        <div className="nav-name-container">
          <h1 className="nav-name">Brian Han <span className="nav-position">Web Developer</span></h1>
        </div>
        <ul className="nav-menu-container">
          <li className="nav-menu-item menu1"><a href="#about">About</a></li>
          <li className="nav-menu-item menu2"><a href="#skills">Skills</a></li>
          <li className="nav-menu-item menu3"><a href="#work">Work</a></li>
        </ul>
      </nav>
      <div className="title-container">
        <h1 className="title">Perfecting Pixels.<br />Crafting code.</h1>
      </div>
    </div>
  )
}

export default Intro
