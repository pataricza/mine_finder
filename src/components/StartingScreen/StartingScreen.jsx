import React from 'react'
import Button from '../Button/Button'
import * as API from '../../services/api'
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

const name = 'Start Game'
const start = '/start'
const running = '/running'

const StartingScreen = (props) => {
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    API.getData(`${process.env.REACT_APP_API}${running}`)
      .then(data => setIsRunning(data))
      .catch(error => setError(error.message))
  })

  const handleClick = () => {
    const params = new URLSearchParams([['width', 10], ['height', 10]])
    API.getWithParams(`${process.env.REACT_APP_API}${start}`, params)
    props.history.push('/game')
  }


  if(error) {
    return(
      <div>
        {error}
      </div>
    )
  } else if(isRunning) {
    return(
      <Redirect to="/game"/>
    )
  } else {
    return(
      <Button
          handleClick={handleClick}
          name={name}
      />
    )
  }
}

export default withRouter(StartingScreen)