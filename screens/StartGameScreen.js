import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    fontSize: 30,
    width: 50,
    borderBottomColor: "#063970",
    borderBottomWidth: 1,
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: "#abdbe3",
    borderRadius: 8,
    //Andriod Shadow.
    elevation: 10,
    //iOS Shadow.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
