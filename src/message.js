const DisplayOfTheFinalMessage = (props) => {
  console.log(props)

  if (props.result === "win") {
    return (
      <div className="message">
        Congratulations! You Won!
        <img src="./img/Screenshot_3.png" alt="" />
      </div>
    )
  }
  if (props.result === "gameOver") {
    return (
      <div className="message">
        Game over
        <img src="./img/final.jpg" alt="" />
      </div>
    )
  }
}

export default DisplayOfTheFinalMessage
