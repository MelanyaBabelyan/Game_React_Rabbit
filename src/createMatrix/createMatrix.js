import globalObject from "../GameWrapper/globals"

const createMatrixWithAllCharacters = (gameBoardSize) => {
  const matrix = CreateMatrix(gameBoardSize)
  defineAtributes(matrix, gameBoardSize)
  return matrix
}

const CreateMatrix = (gameBoardSize) => {
  let arr = []
  for (let i = 0; i < gameBoardSize; i++) {
    arr[i] = []
    for (let j = 0; j < gameBoardSize; j++) {
      arr[i][j] = globalObject.FREE_CELL
    }
  }
  return arr
}

const defineAtributes = (matrix, gameBoardSize) => {
  const wolfCount = Math.ceil((60 * gameBoardSize) / 100)
  const fenceCount = Math.round((40 * gameBoardSize) / 100)
  DefineCharacter(matrix, 1, globalObject.RABBIT)
  DefineCharacter(matrix, 1, globalObject.HOME)
  DefineCharacter(matrix, wolfCount, globalObject.WOLF)
  DefineCharacter(matrix, fenceCount, globalObject.FENCE)
}

const DefineCharacter = (matrix, count, character) => {
  for (let i = 1; i <= count; i++) {
    DefineRandomPosition(matrix, character)
  }
}

const DefineRandomPosition = (matrix, character) => {
  const x = Math.floor(Math.random() * matrix.length)
  const y = Math.floor(Math.random() * matrix.length)
  if (matrix[x][y] === globalObject.FREE_CELL) {
    matrix[x][y] = character
  } else {
    DefineRandomPosition(matrix, character)
  }
}

export default createMatrixWithAllCharacters
