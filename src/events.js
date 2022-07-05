import findCordinateCharacter from "./findCordinateCharacter"
import moveWolves from "./moveWolves"
import globalObject from "./globals"
import getDirectionCoord from "./getDirection"
import rabbitGoTo from "./moveRabbit"
import DisplayOfTheFinalMessage from "./message"

const eventKeysFunctions = (gameState, eventKey) => {
  const newGameState = { ...gameState }
  console.log(eventKey)

  const rabbitIndex = findCordinateCharacter(
    newGameState.gameMatrix,
    globalObject.RABBIT
  )[0]
  const [x, y] = rabbitIndex
  const [newX, newY] = getDirectionCoord(
    newGameState.gameMatrix,
    rabbitIndex,
    eventKey
  )
  rabbitGoTo(newGameState, rabbitIndex, newX, newY)

  if (newGameState.gameOver) {
    DisplayOfTheFinalMessage(newGameState)
    return newGameState
  }
  moveWolves(newGameState, rabbitIndex)
  if (newGameState.gameOver) {
    DisplayOfTheFinalMessage(newGameState)
    return newGameState
  }
  return newGameState
}

export default eventKeysFunctions
