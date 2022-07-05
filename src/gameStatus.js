function changeGameStatus(gameState, status) {
  gameState.gameOver = true
  gameState.gameResult = status
  console.log(status)
}
export default changeGameStatus
