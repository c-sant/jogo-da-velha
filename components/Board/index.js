import { View } from "react-native";
import BoardRow from "../BoardRow";

export default function Board({ boardData, handlePress }) {
  return (
    <View>
      <BoardRow row={0} boardData={boardData} handlePress={handlePress} />
      <BoardRow row={1} boardData={boardData} handlePress={handlePress} />
      <BoardRow row={2} boardData={boardData} handlePress={handlePress} />
    </View>
  );
}
