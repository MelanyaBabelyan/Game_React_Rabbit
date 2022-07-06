import globalObject from "../GameWrapper/globals"
import changeGameStatus from "../GameWrapper/gameStatus"

const rabbitGoTo = (gameState, rabbitIndex, x, y) => {
  const [i, j] = rabbitIndex
  const matrix = gameState.gameMatrix

  if (matrix[x][y] === globalObject.FREE_CELL) {
    matrix[x][y] = globalObject.RABBIT
    matrix[i][j] = globalObject.FREE_CELL
  }

  if (matrix[x][y] === globalObject.HOME) {
    changeGameStatus(gameState, "win")
    return
  }

  if (matrix[x][y] === globalObject.WOLF) {
    changeGameStatus(gameState, "gameOver")
    return
  }
  return gameState
}

export default rabbitGoTo
