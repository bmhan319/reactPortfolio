import React from 'react'

const Summary = () => {
  window.onscroll = scroll

  function scroll() {
    const elem = document.querySelector("#back-to-top2")
    if (elem == null) {
      return
    }
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
      elem.classList.add("show")
      elem.classList.remove("noshow")
    } else {
      elem.classList.add("noshow")
      elem.classList.remove("show")
    }
  }

  return(
    <section className="summary-section">
      <div className="summary-head-section">
        <div className="summary-work-together-container">
          <div className="work-together-title-container">
            <h2 className="work-together-title">Let's work together</h2>
          </div>
          <div className="work-together-text-container">
            <p className="work-together-text">I'm currently on the lookout for a fulltime position in Web Development.  What I can bring to the table is a positive attitude, years of experience working within a team environment, and a never ending willingness to constantly learn and improve my abilities.</p>
          </div>
        </div>
      </div>
      <div id="back-to-top2" className="back-to-top-container show">
        <a className="back-to-top-link" href="#top">
          <svg fill="#000" xmlns="http://www.w3.org/2000/svg" viewBox="0 10 129 129" width="30px" height="24px">
            <path id="Layer" d="M7.7 88.6C6.9 89.4 6.5 90.4 6.5 91.5C6.5 92.6 6.9 93.6 7.7 94.4C9.3 96 11.9 96 13.5 94.4L64.5 43.4L115.5 94.4C117.1 96 119.7 96 121.3 94.4C122.9 92.8 122.9 90.2 121.3 88.6L67.4 34.6C65.8 33 63.2 33 61.6 34.6L7.7 88.6L7.7 88.6Z" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Summary