import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Board from "./components/Board";
import styles from "./styles";

export default function App() {
  const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function cellsAreEqual(cell1, cell2, cell3) {
    return cell1 !== "" && cell1 === cell2 && cell2 === cell3;
  }

  function checkWinner(newBoard) {
    const winningCases = [
      // vitória horizontal
      [newBoard[0][0], newBoard[0][1], newBoard[0][2]],
      [newBoard[1][0], newBoard[1][1], newBoard[1][2]],
      [newBoard[2][0], newBoard[2][1], newBoard[2][2]],
      // vitória vertical
      [newBoard[0][0], newBoard[1][0], newBoard[2][0]],
      [newBoard[0][1], newBoard[1][1], newBoard[2][1]],
      [newBoard[0][2], newBoard[1][2], newBoard[2][2]],
      // vitória diagonal
      [newBoard[0][0], newBoard[1][1], newBoard[2][2]],
      [newBoard[0][2], newBoard[1][1], newBoard[2][0]],
    ];

    for (let winningCase of winningCases) {
      if (cellsAreEqual(winningCase[0], winningCase[1], winningCase[2])) {
        setWinner(winningCase[0]);
        return;
      }
    }

    // checa se todas as células do tabuleiro foram preenchidas
    if (newBoard.flat().every((cell) => cell !== "")) {
      setWinner("tie");
    }
  }

  function resetGame() {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  }

  function handlePress(row, col) {
    if (board[row][col] === "" && !winner) {
      let newBoard = board.map((row) => [...row]);
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      checkWinner(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      console.log(winner);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>

      <Board boardData={board} handlePress={handlePress} />

      {winner ? (
        winner == "tie" ? (
          <Text style={styles.gameStatus}>EMPATOU!</Text>
        ) : (
          <Text style={styles.gameStatus}>{winner} VENCEU!</Text>
        )
      ) : (
        <Text style={styles.gameStatus}>É A VEZ DE {currentPlayer}</Text>
      )}

      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text>Recomeçar</Text>
      </TouchableOpacity>
    </View>
  );
}
