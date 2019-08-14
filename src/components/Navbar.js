import React, {Component} from 'react'

class Navbar extends Component {
  render() {
    return(
      <nav class="navbar">
        <div class="nav-title-container">
          <h1 class="nav-title">Brian Han</h1>
        </div>
        <ul class="nav-menu-container">
          <li class="nav-menu-item"><a href="#">About</a></li>
          <li class="nav-menu-item"><a href="#">Skills</a></li>
          <li class="nav-menu-item"><a href="#">Work</a></li>
          <li class="nav-menu-item"><a href="#">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;