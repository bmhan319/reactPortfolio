import React from 'react';

const ProjectTech = (props) => {
  window.onscroll = scroll

  function scroll() {
    const elem = document.querySelector("#back-to-top")
    if (elem == null) {
      return
    }
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 400)) {
      elem.classList.add("show")
      elem.classList.remove("noshow")
    } else {
      elem.classList.add("noshow")
      elem.classList.remove("show")
    }
  }

  return(
    <div className="project-tech-wrapper">
      <section className="technologies-section">
        <div className="technologies-container">
          <div className="technologies-title-container">
            <h2 className={`technologies-title ${props.project.cssClass}-color`}>Technologies</h2>
          </div>
          <hr className={`tech-horizontal-line ${props.project.cssClass}-hr`}/>
          <div className="technologies-text-container">
            <ul className="technologies-text-list">
              <li className="technologies-text">{props.project.tech1}</li>
              <li className="technologies-text">{props.project.tech2}</li>
              <li className="technologies-text">{props.project.tech3}</li>
            </ul>
          </div>
        </div>

        <div className="resources-container">
          <div className="resources-title-container">
            <h2 className={`resources-title ${props.project.cssClass}-color`}>Resources</h2>
          </div>
          <hr className={`tech-horizontal-line ${props.project.cssClass}-hr`}/>
          <div className="resources-text-container">
            <ul className="resources-text-list">
              <li className={`resources-text ${props.project.cssClass}-visible`}>
                Original Site: <a className={`${props.project.cssClass}-color`} href={props.project.originalSite}>{props.project.title}</a>
              </li>
              <li className="resources-text">
                The GitHub repository is located here: <a className={`${props.project.cssClass}-color`} href={props.project.gitHub}>Github</a>
              </li>
              <li className="resources-text">
                This project is online at: <a  className={`${props.project.cssClass}-color`} href={props.project.gitPage}>GitHub Pages</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="back-to-top" className="back-to-top-container noshow">
          <a className="back-to-top-link" href="#top">
            <svg fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 129 129" width="30px" height="24px">
              <path id="Layer" d="M7.7 88.6C6.9 89.4 6.5 90.4 6.5 91.5C6.5 92.6 6.9 93.6 7.7 94.4C9.3 96 11.9 96 13.5 94.4L64.5 43.4L115.5 94.4C117.1 96 119.7 96 121.3 94.4C122.9 92.8 122.9 90.2 121.3 88.6L67.4 34.6C65.8 33 63.2 33 61.6 34.6L7.7 88.6L7.7 88.6Z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default ProjectTech