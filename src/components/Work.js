import React from 'react'

const Work = () => {
  return (
    <section class="work-section">
      <a name="work"></a>
      <div className="work-title-container">
        <h2 className="work-title">My Recent Work</h2>
        <p className="work-statement">Here are my recent projects. Want to see more? <a href="#">Email me</a>.</p>
      </div>
      <div className="work-project-container">
        <div className="projects project1">
          <a href="#"><img src="https://picsum.photos/id/231/500" alt="Project1" className="project-image project1-image"/></a>
        </div>
        <div className="projects project2">
          <a href="#"><img src="https://picsum.photos/id/232/500" alt="Project2" className="project-image project2-image"/></a>
        </div>
        <div className="projects project3">
          <a href="#"><img src="https://picsum.photos/id/233/500" alt="Project3" className="project-image project3-image"/></a>
        </div>
        <div className="projects project4">
          <a href="#"><img src="https://picsum.photos/id/234/500" alt="Project4" className="project-image project4-image"/></a>
        </div>
        <div className="projects project5">
          <a href="#"><img src="https://picsum.photos/id/235/500" alt="Project5" className="project-image project5-image"/></a>
        </div>
        <div className="projects project6">
          <a href="#"><img src="https://picsum.photos/id/236/500" alt="Project6" className="project-image project6-image"/></a>
        </div>
      </div>
    </section>
  )
}

export default Work