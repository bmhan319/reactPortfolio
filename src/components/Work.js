import React from 'react'
import stumptown from '../img/stumptown-tn.png'
import bonapp from '../img/bonapp-tn.png'
import block from '../img/block-tn.png'
import conquer from '../img/conquer.png'
import fesc from '../img/fesc.jpg'
import calc from '../img/reactCalc.png'
import {NavLink} from 'react-router-dom'

const Work = () => {
  return (
    <section id="work" class="work-section">
      <div className="work-container">
        <div className="work-title-container">
          <h2 className="work-title">Work Samples</h2>
          <p className="work-statement">Here are my recent projects. Want to see more?</p>
        </div>
        <div className="work-project-container">
          <div className="projects project1">
            <figure class="effect effect-calc">
              <img className="effect-img calc-img" src={calc} alt="calculator"/>
              <div className="colorlayer-calc"></div>
              <figcaption className="effect-caption calc-caption">
                <h2 className="effect-title calc-title">Calculator</h2>
                <p className="effect-text calc-text">Made using React</p>
                <NavLink to="/calc" className="effect-link calc-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project2">
            <figure class="effect effect-stumptown">
              <img className="effect-img stump-img" src={stumptown} alt="Stumptown"/>
              <figcaption className="effect-caption stump-caption">
                <h2 className="effect-title stump-title">Stumptown</h2>
                <p className="effect-text stump-text">Recreating a few pages on Stumptown Site</p>
                <NavLink to="/stumptown" className="effect-link stump-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project3">
            <figure class="effect effect-bonapp">
              <img className="effect-img bonapp-img" src={bonapp} alt="Bon Appetit"/>
              <figcaption className="effect-caption bonapp-caption">
                <h2 className="effect-title bonapp-title">Bon Appetit</h2>
                <p className="effect-text bonapp-text">Recreating a few pages on the Bon Appetit Site</p>
                <NavLink to="/bonappetit" className="effect-link bonapp-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project4">
            <figure class="effect effect-block">
              <img className="effect-img block-img" src={block} alt="Block Renovations"/>
              <figcaption className="effect-caption block-caption">
                <h2 className="effect-title block-title">Block Renovations</h2>
                <p className="effect-text block-text">Recreating the homepage on the Block Renovations Site</p>
                <NavLink to="/block" className="effect-link block-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project5">
            <figure class="effect effect-conquer">
              <img className="effect-img conquer-img" src={conquer} alt="Conquer"/>
              <div className="colorlayer-conquer"></div>
              <figcaption className="effect-caption conquer-caption">
                <h2 className="effect-title conquer-title">Conquer</h2>
                <p className="effect-text conquer-text">Recreating the homepage on the Conquer Web Template</p>
                <NavLink to="/conquer" className="effect-link conquer-link">Go</NavLink>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project6">
            <figure class="effect effect-fesc">
              <img className="effect-img fesc-img" src={fesc} alt="FESC"/>
              <div className="colorlayer-fesc"></div>
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