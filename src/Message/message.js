import * as Styled from "./styleMessage"
import { Message, MessageImg } from "./styleMessage"

const DisplayOfTheFinalMessage = (props) => {
  if (props.result === "win") {
    return (
      <Message>
        Congratulations! You Won!
        <MessageImg src="./img/rabbit__.png" alt="" />
      </Message>
    )
  }
  if (props.result === "gameOver") {
    return (
      <Message>
        Game over
        <MessageImg src="./img/final.jpg" alt="" />
      </Message>
    )
  }
}

export default DisplayOfTheFinalMessage
