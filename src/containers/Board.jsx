import React from 'react'
import Tile from '../components/Tile/Tile'

const Board = () => {
  const tiles = []
  for(var i = 0; i < 100; i++) {
    if(i % 10 === 0) {
      tiles[i] = <div><br/><Tile /></div>
    } else {
      tiles[i] = <Tile />
    }
    
  }

  return(
    <div>
      <Tile /><br/>
      <Tile />
    </div>
  )
}

export default Board