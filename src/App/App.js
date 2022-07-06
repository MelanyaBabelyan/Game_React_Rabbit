import "./App.css"
import { useState } from "react"
import GameWrapper from "../GameWrapper/GameWrapper"
import * as Styled from "./styleApp"
const App = () => {
  const [gameBoardNumber, setGamboardNumber] = useState([])
  const clickButton = () => {
    setGamboardNumber([...gameBoardNumber, gameBoardNumber.length + 1])
  }
  return (
    <Styled.App>
      {gameBoardNumber.map((number) => {
        return <GameWrapper key={number} />
      })}
      <Styled.Button onClick={clickButton}>New Board</Styled.Button>
    </Styled.App>
  )
}

export default App
