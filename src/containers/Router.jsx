import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Board from '../components/Board/Board';
import StartingScreen from '../components/StartingScreen/StartingScreen';

const Router = () => {
  return( 
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/start" />
        </Route>
          <Route path="/start">
            <StartingScreen />
          </Route>
          <Route path="/game">
            <Board />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router