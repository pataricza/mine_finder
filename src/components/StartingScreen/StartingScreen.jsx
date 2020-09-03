import React from 'react'
import Button from '../Button/Button'
import * as API from '../../services/api'

const name = 'Start Game'
const start = '/start'

const StartingScreen = () => {

  const handleClick = () => {
    const params = new URLSearchParams([['width', 10], ['height', 10]])
    API.getWithParams(`${process.env.REACT_APP_API}${start}`, params)
  }

  return(
    <Button
        handleClick={handleClick}
        name={name}
    />
  )
}

export default StartingScreen