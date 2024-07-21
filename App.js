import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import Colors from "./constants/color";

export default function App() {
  const [hasNumberLoad, setHasNumberlLoad] = useState();
  const [gameOver, setGameIsOver] = useState(true)
  function getNumberHandler(userInput) {
    setHasNumberlLoad(userInput);
    setGameIsOver(false)
  }
  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onNumberLoad={getNumberHandler} />;
  if (hasNumberLoad) {
    screen = <GameScreen onGameOver ={gameOverHandler} chosenNumber={hasNumberLoad} />;
  }
  if(gameOver && hasNumberLoad){
    screen =<GameOverScreen/>
  }



  return (
    <LinearGradient
      colors={[Colors.primaryColor_1, Colors.primaryColor_2]}
      style={styles.appContainer}
    >
      <ImageBackground
        source={require("../GuessTheNumber/assets/background.png")}
        resizeMode="cover"
        style={styles.appContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
