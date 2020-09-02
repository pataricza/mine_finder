import React from 'react';
import './Square.scss'

const Tile = (props) => {
  const { value } = props
  return(
    <button className="square">
      {value === '+' ? null : value}
    </button>
  )
}

export default Tile