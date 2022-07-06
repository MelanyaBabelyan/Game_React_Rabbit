const getDirectionCoord = (gameMatrix, index, eventKey) => {
  let [x, y] = index
  let newX = x
  let newY = y
  const arraySize = gameMatrix.length - 1
  if (eventKey === "right") {
    newY = y + 1
    if (y === arraySize) {
      newY = 0
    }
  } else if (eventKey === "left") {
    newY = y - 1
    if (y === 0) {
      newY = arraySize
    }
  } else if (eventKey === "up") {
    newX = x - 1
    if (x === 0) {
      newX = arraySize
    }
  } else if (eventKey === "down") {
    newX = x + 1
    if (x === arraySize) {
      newX = 0
    }
  }
  return [newX, newY]
}

export default getDirectionCoord
