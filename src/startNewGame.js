import { useState } from "react"
import createMatrixWithAllCharacters from "./createMatrix"
import globalObject from "./globals"
import eventKeysFunctions from "./events"
import Image from "./defineImg"
import DisplayOfTheFinalMessage from "./message"

const StartNewGame = () => {
  const [boardSize, SetboardSize] = useState(globalObject.optionsArray[0])

  console.log(typeof boardSize)
  const [gameState, setGameState] = useState({
    gameMatrix: [],
    gameOver: false,
    gameStatus: "",
  })

  const changeBoardSize = (event) => SetboardSize(parseInt(event.target.value))

  const gameArray = gameState.gameMatrix
  const styleObject = {
    width: gameArray.length * 80 + 100 + "px",
  }

  const newGamState = () => {
    setGameState({
      gameMatrix: createMatrixWithAllCharacters(boardSize),
      gameOver: false,
      gameResult: "",
    })
  }

  const onMove = (direction) => {
    if (gameState.gameOver === true) {
      return
    }
    const newGameState = eventKeysFunctions(gameState, direction)
    setGameState(newGameState)
  }

  const isGameInProcess = gameState.gameOver === false && gameArray.length > 0

  return (
    <div>
      <button className="start" onClick={newGamState}>
        Start
      </button>
      <OptionsDropDown onChange={changeBoardSize} />
      <div id="newGameArea" className="newGameArea" style={styleObject}>
        {isGameInProcess && <GameBoard gameArray={gameArray} />}
        {isGameInProcess && <ControlButtons onMove={onMove} />}
        {gameState.gameOver && gameArray.length > 0 && (
          <NewGameButton
            gameResult={gameState.gameResult}
            onNewGame={newGamState}
          />
        )}
      </div>
    </div>
  )
}

const OptionsDropDown = ({ onChange }) => {
  return (
    <select className="select" onChange={onChange}>
      {globalObject.optionsArray.map((option) => {
        return (
          <option key={option} value={option}>
            {option}X{option}
          </option>
        )
      })}
    </select>
  )
}

const GameBoard = ({ gameArray }) => {
  return gameArray.map((row, x) => {
    return row.map((column, y) => {
      return (
        <div className="box" key={x.toString() + y.toString()}>
          <Image character={column} />
        </div>
      )
    })
  })
}

const ControlButtons = ({ onMove }) => {
  return (
    <div id="btnEvent" className="btnEvent">
      {globalObject.directionButtons.map((direction) => {
        return (
          <button
            className={direction}
            key={direction}
            onClick={() => onMove(direction)}
          >
            {direction}
          </button>
        )
      })}
    </div>
  )
}

const NewGameButton = ({ gameResult, onNewGame }) => {
  return (
    <div>
      <DisplayOfTheFinalMessage result={gameResult} />
      <button id="start" className="start" onClick={onNewGame}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default StartNewGame
