import React from 'react';
//import {NavLink} from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './../css/fesc.css'

const FESC= () => {
  return(
    <div className="fesc-page-container">
      <div className="temp-container">
        <a href="https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/">Go</a>
        <NavLink to="/conquer">
          <button type="button">Conquer</button>
        </NavLink>
        <NavLink to="/calc">
          <button type="button">Calculator</button>
        </NavLink>
      </div>
      <header className="fesc-header-section">
        <div className="home-container">
          <NavLink to="/#work">
            <svg className="home-icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-7 0 40 40">
              <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
            </svg>
          </NavLink>
        </div>
        <div className="fesc-header-inner-container">
          <h1 className="fesc-title">Florida Energy Systems Consortium</h1>
          <p className="fesc-subtitle">Site Redesign</p>
        </div>
      </header>
      <section className="description-section">

      </section>
    </div>
  )
}

export default FESC