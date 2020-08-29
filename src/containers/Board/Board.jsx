import React, { useState, useEffect } from 'react'
import Tile from '../../components/Tile/Tile'
import './Board.scss'
import Button from '../../components/Button/Button'
import * as API from '../../services/api'

const name = 'Start Game'
const table = '/table'

const Board = () => {
  const [board, setBoard] = useState({
    width: 0,
    height: 0,
    fields: [],
    mines: []
  })

  useEffect(() => {
    API.getData(`${process.env.REACT_APP_API}${table}`)
    .then(data => setBoard(data))
  }, [])

  console.log(board)

  const render10Square = () => {
    const tenTiles = [];
    for(var i = 0; i < 10; i++) {
      tenTiles[i] = <Tile />
    }
    return tenTiles
  }

  const tiles = []
  for(var i = 0; i < 10; i++) {
      tiles[i] = (
        <div className="board-row">
          {render10Square()}
      </div>
      )
  }

  const handleClick = () => {
    console.log("lofaszka")
    alert('valami lofasz')
  }

  return(
    <div>
      <Button
        handleClick={handleClick}
        name={name}
      />
      {tiles}
    </div>
  )
}

export default Board