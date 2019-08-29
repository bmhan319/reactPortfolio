import React from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import '../css/stumptown.css'

const Stumptown= () => {
  return(
    <div className ="stumptown-page-container">
      <div className="temp-container">
        <NavLink to="/#work">Home</NavLink>
        <a href="https://bmhan319.github.io/stumptown/">Go</a>
        <NavLink to="/calc">
          <button type="button">Calculator</button>
        </NavLink>
        <NavLink to="/bonappetit">
          <button type="button">BonAppetit</button>
        </NavLink>
      </div>
      <header className="stumptown-header-outer-container">
        <div className="stumptown-header-inner-container">
          <h1 className="stumptown-title">Stumptown Coffee</h1>
          <p className="stumptown-subtitle">Site Recreation</p>
          <button className="stumptown-visit">VISIT THE MOCK SITE</button>
        </div>
      </header>
    </div>
  )
}

export default Stumptown