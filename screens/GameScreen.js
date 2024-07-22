import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../constants/color";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonContainer from "../components/ui/ButtonContainer";
import GuessLogItem from "../components/game/GuessLogItem";
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
  let initialGuess = generateRandomBetween(1, 100, props.chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === props.chosenNumber) {
      props.onGameOver(guessRounds.length);
    }
  }, [currentGuess, props.chosenNumber, props.onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
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
    setGuessRounds((previousGuess) => [newRndNumb, ...previousGuess]);
  }

  let guessRoundsLength = guessRounds.length;
  return (
    <View style={styles.mainContainer}>
      <Title>System's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText> Lower or Higher?</InstructionText>
        <ButtonContainer>
          <View style={styles.buttonSelf}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove-circle-outline" size={20} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonSelf}>
            <PrimaryButton onClick={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add-circle-outline" size={20} />
            </PrimaryButton>
          </View>
        </ButtonContainer>
      </Card>
      <View style={styles.flatListContainer}>
        {/* {guessRounds.map(guessRound=><Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              round={guessRoundsLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    padding: 15,
    marginTop: 100,
    backgroundColor: Colors.primaryColor_2,
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
  buttonSelf: {
    flex: 1,
    marginVertical: 10,
  },
  flatListContainer:{
    // flex:1,
    padding:16
  }
});
