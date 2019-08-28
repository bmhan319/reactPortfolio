import React from 'react';
import Intro from './Intro'
import About from './About'
import Skills from './Skills'
import Work from './Work'
import Footer from './Footer'

const Home = () => {
  return(
    <div className="home-container">
      <Intro />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default Home