import { useState } from "react";
import '../styles/App.css'
import Board from "./Board";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  console.log("history=" + history);

  function handlePlay(nextSquares) {
    console.log("currentMove=" + currentMove);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log("nexthistoy=" + nextHistory);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    console.log("next move=" + nextMove);
    setCurrentMove(nextMove);
  }

  /*
  *  moves is an array, element:button
for map method: (exemple)
    const numbers = [1, 2, 3, 4];
    const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]

so move start from 0!!!!
*/
  const moves = history.map((squares, move) => {
    console.log("move=" + move);
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    );
  });

  return (
<div>
      <div className={"title"}>
          <h1>Welcome to Tic-Tac-Toe game</h1>
      </div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
</div>
  );
}

export default App;

