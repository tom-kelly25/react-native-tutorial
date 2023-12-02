import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello test tom!</Text>
      </View>
      <View style={styles.body}>
        <Text> Lorem ipsum dolor sit amet.</Text>
        <Text> Lorem ipsum dolor sit amet.</Text>
        <Text> Lorem ipsum dolor sit amet.</Text>
        <Text> Lorem ipsum dolor sit amet.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "white",
    padding: 20,
  },
});
