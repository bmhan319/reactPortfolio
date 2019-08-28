import React from 'react'
import stumptown from '../img/stumptown.png'
import bonapp from '../img/bonapp.png'
import block from '../img/block.png'
import conquer from '../img/conquer.png'
import fesc from '../img/fesc.jpg'
import calc from '../img/reactCalc.png'

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
              <figcaption className="effect-caption calc-caption">
                <h2 className="effect-title calc-title">Calculator</h2>
                <p className="effect-text calc-text">Made using React</p>
                <a className="effect-link calc-link" href="https://bmhan319.github.io/reactCalc/">Go</a>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project2">
            <figure class="effect effect-stumptown">
              <img className="effect-img stump-img" src={stumptown} alt="Stumptown"/>
              <figcaption className="effect-caption stump-caption">
                <h2 className="effect-title stump-title">Stumptown</h2>
                <p className="effect-text stump-text">Recreating a few pages on Stumptown Site</p>
                <a className="effect-link stump-link" href="https://bmhan319.github.io/stumptown/">Go</a>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project3">
            <figure class="effect effect-bonapp">
              <img className="effect-img bonapp-img" src={bonapp} alt="Bon Appetit"/>
              <figcaption className="effect-caption bonapp-caption">
                <h2 className="effect-title bonapp-title">Bon Appetit</h2>
                <p className="effect-text bonapp-text">Recreating a few pages on the Bon Appetit Site</p>
                <a className="effect-link bonapp-link" href="https://bmhan319.github.io/bon-appetit/index.html">Go</a>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project4">
            <figure class="effect effect-block">
              <img className="effect-img block-img" src={block} alt="Block Renovations"/>
              <figcaption className="effect-caption block-caption">
                <h2 className="effect-title block-title">Block Renovations</h2>
                <p className="effect-text block-text">Recreating the homepage on the Block Renovations Site</p>
                <a className="effect-link block-link" href="https://bmhan319.github.io/BlockRenovations/">Go</a>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project5">
            <figure class="effect effect-conquer">
              <img className="effect-img conquer-img" src={conquer} alt="Conquer"/>
              <figcaption className="effect-caption conquer-caption">
                <h2 className="effect-title conquer-title">Conquer</h2>
                <p className="effect-text conquer-text">Recreating the homepage on the Conquer Web Template</p>
                <a className="effect-link conquer-link" href="https://bmhan319.github.io/CSSGrid-Conquer-Page/">Go</a>
              </figcaption>			
            </figure>
          </div>
          <div className="projects project6">
            <figure class="effect effect-fesc">
              <img className="effect-img fesc-img" src={fesc} alt="FESC"/>
              <figcaption className="effect-caption fesc-caption">
                <h2 className="effect-title fesc-title">F.E.S.C</h2>
                <p className="effect-text fesc-text">Redesigned a few pages of the FESC website</p>
                <a className="effect-link fesc-link" href="https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/">Go</a>
              </figcaption>			
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work