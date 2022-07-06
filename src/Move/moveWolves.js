import globalObject from "../GameWrapper/globals"
import findTheStepNearTheRabbit from "./findCordinateNearRabbit"
import findCordinateCharacter from "./findCordinateCharacter"
import changeGameStatus from "../GameWrapper/gameStatus"
import distance from "./distance"

const moveWolves = (gameState, rabbitIndex) => {
  const array = gameState.gameMatrix
  const wolfsIndex = findCordinateCharacter(
    gameState.gameMatrix,
    globalObject.WOLF
  )

  const moveWolf = (wolf) => {
    if (gameState.gameOver) {
      changeGameStatus(gameState, "gameOver")
      return
    }
    const steps = findTheStepNearTheRabbit(gameState, wolf)
    if (steps.length > 0) {
      steps.forEach((step) => {
        if (array[step[0]][step[1]] === globalObject.RABBIT) {
          changeGameStatus(gameState, "gameOver")
          return
        }
      })
      const distances = steps.map((step) => distance(rabbitIndex, step))
      const index = distances.indexOf(Math.min(...distances))
      const nearPoint = steps[index]
      if (nearPoint === globalObject.RABBIT) {
        changeGameStatus(gameState, "gameOver")
        return
      }
      array[nearPoint[globalObject.X]][nearPoint[globalObject.Y]] =
        globalObject.WOLF
      array[wolf[globalObject.X]][wolf[globalObject.Y]] = globalObject.FREE_CELL
    }
  }

  wolfsIndex.forEach(moveWolf)
}

export default moveWolves
