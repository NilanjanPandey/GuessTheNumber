import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../constants/color";
import Title from "../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/ui/PrimaryButton";
import ButtonContainer from "../components/ui/ButtonContainer";
function GameOverScreen(props) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{props.rounds}</Text> rounds to
        guess the number <Text style={styles.highlightText}>{props.chosenNumber}</Text>
      </Text>
      <ButtonContainer>
        <View style={styles.buttonContainer}>
        <PrimaryButton onClick={props.onStartNewGame}>
          <Ionicons name="home-outline" size={24} color="black" />
        </PrimaryButton>
        </View>
        
      </ButtonContainer>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 100,
    backgroundColor: Colors.primaryColor_1,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    // flex:1,
    borderRadius: 8,
    //Andriod Shadow.
    elevation: 5,
    //iOS Shadow.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.secondaryColor_3,
    margin: 36,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    marginVertical:24
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.secondaryColor_3,
  },
  buttonContainer:{
    flex:1,
    padding:16,
    marginBottom:16
  }
});
