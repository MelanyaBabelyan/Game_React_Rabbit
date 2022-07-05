const findCordinateCharacter = (array, character) => {
  const findeMtrix = function (accumulator, row, x) {
    row.forEach((cell, y) => {
      if (cell === character) {
        accumulator.push([x, y])
      }
    })
    return accumulator
  }
  return array.reduce(findeMtrix, [])
}

export default findCordinateCharacter
