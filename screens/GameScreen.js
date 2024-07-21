import { Text, View, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
  let initialGuess = generateRandomBetween(
    1,
    100,
    props.chosenNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === props.chosenNumber) {
      props.onGameOver();
    }
  }, [currentGuess, props.chosenNumber, props.onGameOver]);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < props.chosenNumber) ||
      (direction === "greater" && currentGuess > props.chosenNumber)
    ) {
      Alert.alert("Oops!!", "Don't lie, you know this is wrong!", [
        { text: "Retry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumb = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumb);
  }
  return (
    <View style={styles.mainContainer}>
      <Title>System's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text> Higher or Lower?</Text>
        <View>
          <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onClick={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
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
  },
});
