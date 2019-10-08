import React from 'react'
import stumptown from '../img/stumptown-tn.png'
import bonapp from '../img/bonapp-tn.png'
import block from '../img/block-tn.png'
import conquer from '../img/conquer-tn.png'
import fesc from '../img/fesc-tn.png'
import calc from '../img/calc-tn.png'
import weather from '../img/weather-tn.png'
import {NavLink} from 'react-router-dom'

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-title-container">
          <h2 className="work-title">Work Samples</h2>
          <p className="work-statement">Here are my recent projects. Want to see more?</p>
        </div>
        <div className="work-project-container">
          <div className="projects project7">
            <figure className="effect effect-weather">
              <img className="effect-img weather-img" src={weather} alt="weather app"/>
              <figcaption className="effect-caption weather-caption">
                <h2 className="effect-title weather-title">Weather App</h2>
                <p className="effect-text weather-text">Made using React</p>
                <NavLink to="/weather" className="effect-link weather-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project6">
            <figure className="effect effect-calc">
              <img className="effect-img calc-img" src={calc} alt="calculator"/>
              <figcaption className="effect-caption calc-caption">
                <h2 className="effect-title calc-title">Calculator</h2>
                <p className="effect-text calc-text">Made using React</p>
                <NavLink to="/calc" className="effect-link calc-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project5">
            <figure className="effect effect-stumptown">
              <img className="effect-img stump-img" src={stumptown} alt="Stumptown"/>
              <figcaption className="effect-caption stump-caption">
                <h2 className="effect-title stump-title">Stumptown</h2>
                <p className="effect-text stump-text">Recreating a few pages on Stumptown Site</p>
                <NavLink to="/stumptown" className="effect-link stump-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project4">
            <figure className="effect effect-bonapp">
              <img className="effect-img bonapp-img" src={bonapp} alt="Bon Appetit"/>
              <figcaption className="effect-caption bonapp-caption">
                <h2 className="effect-title bonapp-title">Bon Appetit</h2>
                <p className="effect-text bonapp-text">Recreating a few pages on the Bon Appetit Site</p>
                <NavLink to="/bonappetit" className="effect-link bonapp-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project3">
            <figure className="effect effect-block">
              <img className="effect-img block-img" src={block} alt="Block Renovations"/>
              <figcaption className="effect-caption block-caption">
                <h2 className="effect-title block-title">Block Renovations</h2>
                <p className="effect-text block-text">Recreating the homepage on the Block Renovations Site</p>
                <NavLink to="/block" className="effect-link block-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project2">
            <figure className="effect effect-conquer">
              <img className="effect-img conquer-img" src={conquer} alt="Conquer"/>
              <figcaption className="effect-caption conquer-caption">
                <h2 className="effect-title conquer-title">Conquer</h2>
                <p className="effect-text conquer-text">Recreating the homepage on the Conquer Web Template</p>
                <NavLink to="/conquer" className="effect-link conquer-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project1">
            <figure className="effect effect-fesc">
              <img className="effect-img fesc-img" src={fesc} alt="FESC"/>
              <figcaption className="effect-caption fesc-caption">
                <h2 className="effect-title fesc-title">F.E.S.C</h2>
                <p className="effect-text fesc-text">Redesigned a few pages of the FESC website</p>
                <NavLink to="/fesc"  className="effect-link fesc-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work