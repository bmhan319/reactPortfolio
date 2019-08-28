import React from 'react';
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
