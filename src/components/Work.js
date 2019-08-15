import React from 'react'
import stumptown from '../img/stumptown.png'
import bonapp from '../img/bonapp.png'
import block from '../img/block.png'
import conquer from '../img/conquer.png'
import fesc from '../img/fesc.jpg'

const Work = () => {
  return (
    <section class="work-section">
      <a name="work"></a>
      <div className="work-title-container">
        <h2 className="work-title">My Recent Work</h2>
        <p className="work-statement">Here are my recent projects. Want to see more? <a href="mailto:brianhan319@gmail.com">Email me</a>.</p>
      </div>
      <div className="work-project-container">
        <div className="projects project1">
          <a href="https://bmhan319.github.io/stumptown/"><img src={stumptown} alt="Stumptown" className="project-image project1-image"/></a>
        </div>
        <div className="projects project2">
          <a href="https://bmhan319.github.io/bon-appetit/index.html"><img src={bonapp} alt="Bon Appetit" className="project-image project2-image"/></a>
        </div>
        <div className="projects project3">
          <a href="https://bmhan319.github.io/BlockRenovations/"><img src={block} alt="Block Renovations" className="project-image project3-image"/></a>
        </div>
        <div className="projects project4">
          <a href="https://bmhan319.github.io/CSSGrid-Conquer-Page/"><img src={conquer} alt="Conquer Page Template" className="project-image project4-image"/></a>
        </div>
        <div className="projects project5">
          <a href="https://bmhan319.github.io/FloridaEnergySystemsConsortium-redesign/"><img src={fesc} alt="FESC Redesign" className="project-image project5-image"/></a>
        </div>
        <div className="projects project6">
          <a href="#"><img src="https://picsum.photos/id/236/500" alt="Project6" className="project-image project6-image"/></a>
        </div>
      </div>
    </section>
  )
}

export default Work