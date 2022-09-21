import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.tittle]}>An error ocurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
