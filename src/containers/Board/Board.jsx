import React, { useState, useEffect } from 'react'
import Square from '../../components/Square/Square'
import './Board.scss'
import Button from '../../components/Button/Button'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
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

  let s = board.fields[1];
  if(s) {
    console.log(s[1])
  }
  
  const render10Square = (row) => {
    const tenTiles = [];
    for(var i = 0; i < 10; i++) {
      let key = (row+1)*(i+1);
      tenTiles[i] = <Square key={key} value={board.fields[row][i]}/>
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
  

  const handleClick = () => {
    console.log("lofaszka")
    alert('valami lofasz')
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
          handleClick={handleClick}
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