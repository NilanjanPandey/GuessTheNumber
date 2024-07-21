import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/color";
function StartGameScreen(props) {
  const [userInput, setUserInput] = useState("");

  function userInputHandler(val) {
    setUserInput(val);
  }
  function resetBtnHandler() {
    setUserInput("");
  }
  function confirmBtnHandler() {
    const chosenNumber = parseInt(userInput);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid Input", "Please Enter Number between 1 to 99", [
        { text: "Cancel", style: "destructive", onPress: resetBtnHandler },
      ]);
      return;
    }
    props.onNumberLoad(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        value={userInput}
        onChangeText={userInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onClick={confirmBtnHandler}>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onClick={resetBtnHandler}>Reset</PrimaryButton>
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
    borderBottomColor: Colors.primaryColor_2,
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
    backgroundColor: Colors.primaryColor_1,
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
