import React from 'react';
import './Square.scss'

const Tile = (props) => {
  const { value, handleClick, width, height } = props
  const className = `square ${value === '+' ? "" : value === 'M' ? "red" : "white"}`
  return(
    <button className={className} onClick={() => handleClick(width, height)}>
      {value === '+' ? null : value}
    </button>
  )
}

export default Tile