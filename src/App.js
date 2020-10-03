import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import MainCharacter from './components/character/MainCharacter';
import MainSeries from './components/series/MainSeries';
import MainEvents from './components/events/MainEvents';
import MainComic from './components/comic/MainComic';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/character' component={MainCharacter} />
        <Route exact path='/comic/:id' component={MainComic} />
        <Route exact path='/series' component={MainSeries} />
        <Route exact path='/events' component={MainEvents} />
      </Switch>
    </Router>
  );
}

export default App;
