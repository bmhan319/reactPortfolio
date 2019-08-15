import React from 'react'

const Navbar = () => {
  return(
    <nav class="navbar">
      <div class="nav-title-container">
        <h1 class="nav-title">Brian Han</h1>
      </div>
      <ul class="nav-menu-container">
        <li class="nav-menu-item"><a href="#about">About</a></li>
        <li class="nav-menu-item"><a href="#skills">Skills</a></li>
        <li class="nav-menu-item"><a href="#work">Work</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;