import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import MainCharacter from './components/character/MainCharacter';
import MainSeries from './components/series/MainSeries';
import MainEvents from './components/events/MainEvents';
import MainComic from './components/comic/MainComic';
import MainRanking from './components/ranking/MainRanking';
import ChooseCharacter from './components/game/ChooseCharacter';
import RoundsGame from './components/game/RoundsGame';
import Winner from './components/game/Winner';
import Error from './components/home/Error';
import ProtectedRoute from './components/route/ProtectedRoute';
import { loadCharacter } from './redux/actions/api-actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      const loadingCharacter = () => {
          dispatch(loadCharacter());
      };
      loadingCharacter();
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedRoute exact path='/choose'component={ChooseCharacter} />
        <ProtectedRoute path='/choose/rounds' component={RoundsGame} />
        <ProtectedRoute path='/choose/winner' component={Winner} />
        <Route exact path='/ranking' component={MainRanking} />
        <Route exact path='/character' component={MainCharacter} />
        <Route exact path='/comic/:id' component={MainComic} />
        <Route exact path='/series/:id' component={MainSeries} />
        <Route exact path='/events/:id' component={MainEvents} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
