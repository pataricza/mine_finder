import React from 'react';
import './Square.scss'

const Tile = (props) => {
  const { value, handleClick, width, height } = props
  return(
    <button className="square" onClick={() => handleClick(width, height)}>
      {value === '+' ? null : value}
    </button>
  )
}

export default Tile