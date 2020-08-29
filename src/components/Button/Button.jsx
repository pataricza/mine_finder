import React from 'react';
import './Button.scss'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.name}</button>
  )
}

export default Button