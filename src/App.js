import "./App.css"
import { useState } from "react"
import StartNewGame from "./startNewGame"

const App = () => {
  const [gameBoardNumber, setGamboardNumber] = useState([])
  function clickButton() {
    setGamboardNumber([...gameBoardNumber, gameBoardNumber.length + 1])
  }
  return (
    <div className="App">
      {gameBoardNumber.map((number) => {
        return <StartNewGame key={number} />
      })}
      <button id="newBoardButton" onClick={clickButton}>
        New Board
      </button>
    </div>
  )
}

export default App
