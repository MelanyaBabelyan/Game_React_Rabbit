import globalObject from "../GameWrapper/globals"

const findTheStepNearTheRabbit = (gameState, index) => {
  const array = gameState.gameMatrix
  const isLegitim=(cell) =>{
    const legitimCells = [globalObject.FREE_CELL, globalObject.RABBIT]

    return legitimCells.includes(
      array[cell[globalObject.X]][cell[globalObject.Y]]
    )
  }

  const _isInRange = (cell) => {
    return isInRange(array, cell)
  }
  return getNearCellsOf(index).filter(_isInRange).filter(isLegitim)
}

const getNearCellsOf = (index) => {
  const [x, y] = index
  return [
    [x - 1, y],
    [x, y + 1],
    [x + 1, y],
    [x, y - 1],
  ]
}
const isInRange = (array, [x, y]) => {
  if (x != array.length && x >= 0 && y != array.length && y >= 0) {
    return true
  }
}

export default findTheStepNearTheRabbit
