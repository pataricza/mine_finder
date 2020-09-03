import React from 'react'
import * as API from '../services/api'
import { useState } from 'react';
import { useEffect } from 'react';
import Board from '../components/Board/Board';
import StartingScreen from '../components/StartingScreen/StartingScreen';
// import { Redirect } from 'react-router-dom';

const running = '/running'

const Router = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    API.getData(`${process.env.REACT_APP_API}${running}`)
    .then(data => setIsRunning(data))
    .catch(error => setError(error.message))
  })

  if(error) {
    return(
      <div>
        {error}
      </div>
    )
  } else if(isRunning) {
    return(
      <Board />
    )
  } else {
    return(
      <StartingScreen />
    )
  }
}

export default Router