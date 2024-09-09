import { View } from "react-native";
import styles from "./styles";
import BoardCell from "../BoardCell";

export default function BoardRow({ row, boardData, handlePress }) {
  return (
    <View style={styles.row}>
      <BoardCell
        row={row}
        col={0}
        boardData={boardData}
        handlePress={handlePress}
      />
      <BoardCell
        row={row}
        col={1}
        boardData={boardData}
        handlePress={handlePress}
      />
      <BoardCell
        row={row}
        col={2}
        boardData={boardData}
        handlePress={handlePress}
      />
    </View>
  );
}
