import React, { useState, useEffect } from 'react'
import Square from '../../components/Square/Square'
import './Board.scss'
import Button from '../../components/Button/Button'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
import * as API from '../../services/api'

const name = 'Start Game'
const table = '/table'
const step = '/step'

const Board = () => {
  const [board, setBoard] = useState({
    width: 0,
    height: 0,
    fields: [],
    mines: []
  })
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    API.getData(`${process.env.REACT_APP_API}${table}`)
      .then(data => {
        setBoard(data)
        setLoaded(true)
      })
      .catch(error => setError(error))
  }, []);

  const handleSquareClick = (width, height) => {
    const params = new URLSearchParams([['width', width], ['height', height]])
    API.getWithParams(`${process.env.REACT_APP_API}${step}`, params).then(data => {
      setBoard(data)
    })
    .catch(error => setError(error))
  }
  
  const render10Square = (row) => {
    const tenTiles = [];
    for(var i = 0; i < 10; i++) {
      let key = (row+1)*(i+1);
      tenTiles[i] = <Square 
                      key={key} 
                      value={board.fields[row][i]} 
                      width={row} 
                      height={i}
                      handleClick={handleSquareClick}
                    />
    }
    return tenTiles
  }

  const renderBoard = () => {
    const tiles = []
    for(var i = 0; i < 10; i++) {
        tiles[i] = (
          <div className="board-row" key={i}>
            {render10Square(i)}
        </div>
        )
    }
    return tiles;
  }

  if(error) {
    return(
      <div>
        {error}
      </div>
    )
  } else if(loaded) {
    return(
      <div>
        <Button
          // handleClick={handleClick}
          name={name}
        />
        {renderBoard()}
      </div>
    )
  } else {
    return (
      <LoadingScreen />
    )
  }
}

export default Board