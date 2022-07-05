function minStepcordinate(rabbitIndex, wolfIndex) {
  const [x1, y1] = rabbitIndex
  const [x2, y2] = wolfIndex
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

export default minStepcordinate
