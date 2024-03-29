import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'
import Home from './components/Home'
import Weather from './components/Weather'
import Calc from './components/Calc'
import Stumptown from './components/Stumptown'
import BonAppetit from './components/BonAppetit'
import Block from './components/Block'
import Conquer from './components/Conquer'
import FESC from './components/FESC'

function App() {

  return (
    <HashRouter>
    <ScrollToTop>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={Weather} />
          <Route path='/calc' component={Calc} />
          <Route path='/stumptown' component={Stumptown} />
          <Route path='/bonappetit' component={BonAppetit} />
          <Route path='/block' component={Block} />
          <Route path='/conquer' component={Conquer} />
          <Route path='/fesc' component={FESC} />
        </Switch>
      </div>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
