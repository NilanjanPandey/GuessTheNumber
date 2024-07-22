import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/color";
import ButtonContainer from "../components/ui/ButtonContainer";
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
    props.onNumberLoad(chosenNumber);
  }

  return (
    <View style={styles.titleContainer}>
      <Title>Number Guess</Title>
      <Card>
        <InstructionText style={styles.margin10}>Enter a number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={userInput}
          onChangeText={userInputHandler}
        />
        <ButtonContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={confirmBtnHandler}>Confirm</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onClick={resetBtnHandler}>Reset</PrimaryButton>
          </View>
        </ButtonContainer>
      </Card>
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
    color: Colors.secondaryColor_3,
  },
  buttonContainer: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 100,
    marginHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  margin10:{
    marginTop:10
  }
});
