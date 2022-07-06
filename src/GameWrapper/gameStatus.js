const changeGameStatus = (gameState, status) => {
  gameState.gameOver = true
  gameState.gameResult = status

}
export default changeGameStatus
