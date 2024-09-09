import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    margin: 20,
    fontWeight: "bold",
  },
  gameStatus: {
    fontSize: 20,
    margin: 20,
  },
  resetButton: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
  },
});

export default styles;
