import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";
import { useState } from "react";

export default function BoardCell({ row, col, boardData, handlePress }) {
  const [buttonText, setButtonText] = useState("");
  const [buttonColor, setButtonColor] = useState("#F1F1F1");

  function getButtonColor(cellValue) {
    switch (cellValue) {
      case "X":
        return "#5778fa";
      case "O":
        return "#fa5757";
      default:
        return "#F1F1F1";
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: getButtonColor(boardData[row][col]) },
      ]}
      onPress={() => handlePress(row, col)}
    >
      <Text style={styles.buttonText}>{boardData[row][col]}</Text>
    </TouchableOpacity>
  );
}
