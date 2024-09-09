import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 60,
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "bold",
  },
});

export default styles;
