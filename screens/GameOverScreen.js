import React from "react";
import { View, Text,StyleSheet } from "react-native";
import Colors from "../constants/color";
function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text>Game Over!</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container:{
    padding: 24,
    marginTop: 100,
    backgroundColor: Colors.primaryColor_1,
    marginHorizontal: 20,
    alignItems: "center",
    borderRadius: 8,
    //Andriod Shadow.
    elevation: 5,
    //iOS Shadow.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    }
});
