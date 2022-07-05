import globalObject from "./globals"
function createMatrixWithAllCharacters(gameBoardSize) {
  const matrix = CreateMatrix(gameBoardSize)
  defineAtributes(matrix, gameBoardSize)
  console.log(matrix)
  return matrix
}

function CreateMatrix(value) {
  let arr = []
  for (let i = 0; i < value; i++) {
    arr[i] = []
    for (let j = 0; j < value; j++) {
      arr[i][j] = globalObject.FREE_CELL
    }
  }
  return arr
}

function defineAtributes(matrix, value) {
  const wolfCount = Math.ceil((60 * value) / 100)
  const fenceCount = Math.round((40 * value) / 100)
  DefineCharacter(matrix, 1, globalObject.RABBIT)
  DefineCharacter(matrix, 1, globalObject.HOME)
  DefineCharacter(matrix, wolfCount, globalObject.WOLF)
  DefineCharacter(matrix, fenceCount, globalObject.FENCE)
}

function DefineCharacter(matrix, count, character) {
  for (let i = 1; i <= count; i++) {
    DefineRandomPosition(matrix, character)
  }
}

function DefineRandomPosition(matrix, character) {
  const x = Math.floor(Math.random() * matrix.length)
  const y = Math.floor(Math.random() * matrix.length)
  if (matrix[x][y] === globalObject.FREE_CELL) {
    matrix[x][y] = character
  } else {
    DefineRandomPosition(matrix, character)
  }
}
export default createMatrixWithAllCharacters
