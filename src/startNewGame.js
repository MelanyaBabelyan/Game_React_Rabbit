import { useState } from "react"
import createMatrixWithAllCharacters from "./createMatrix"
import globalObject from "./globals"
import eventKeysFunctions from "./events"
import Image from "./defineImg"
import DisplayOfTheFinal from "./final"

function StartNewGame() {
  const optionsArray = [5, 7, 10]
  const [value, setValue] = useState(optionsArray[0])

  const [gameState, setGameState] = useState({
    gameMatrix: [],
    gameOver: false,
    gameStatus: "",
  })

  const changeValue = (event) => setValue(event.target.value)
  const gameArray = gameState.gameMatrix
  const styleObject = {
    width: gameArray.length * 80 + 100 + "px",
  }
  let [isActive, setIsActive] = useState(false)

  function newGamState() {
    setGameState({
      gameMatrix: createMatrixWithAllCharacters(value),
      gameOver: false,
      gameResult: "",
    })
    setIsActive(true)
  }

  function drawAfterMoving(direction) {
    if (gameState.gameOver === true) {
      return
    }
    const newGameState = eventKeysFunctions(gameState, direction)
    setGameState(newGameState)
  }

  return (
    <div>
      <button id="start" className="start" onClick={newGamState}>
        Start
      </button>

      <select className="select" id="select" onChange={changeValue}>
        {optionsArray.map((option) => {
          return (
            <option key={option} value={option}>
              {option}X{option}
            </option>
          )
        })}
      </select>

      <div id="newGameArea" className="newGameArea" style={styleObject}>
        {gameState.gameOver
          ? ((isActive = false),
            (
              <div>
                <DisplayOfTheFinal result={gameState.gameResult} />
                <button id="start" className="start" onClick={newGamState}>
                  PLAY AGEIN
                </button>
              </div>
            ))
          : gameArray.map((row, x) => {
              return row.map((column, y) => {
                return (
                  <div className="box" key={x.toString() + y.toString()}>
                    <Image character={column} />
                  </div>
                )
              })
            })}
        {isActive ? (
          <div id="btnEvent" className="btnEvent">
            {globalObject.directionButtons.map((direction) => {
              return (
                <button
                  id={direction}
                  className={direction}
                  key={direction}
                  onClick={() => {
                    drawAfterMoving(direction)
                  }}
                >
                  {direction}
                </button>
              )
            })}
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  )
}

export default StartNewGame
