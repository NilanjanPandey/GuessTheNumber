import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import Colors from "./constants/color";

export default function App() {
  const [hasNumberLoad, setHasNumberlLoad] = useState();
  const [gameOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontIsLoaded] = useFonts({
    'open-sans': require('./constants/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./constants/fonts/OpenSans-Bold.ttf')
  });
  if(!fontIsLoaded){
    // return <AppLoading/>;
  }
  function getNumberHandler(userInput) {
    setHasNumberlLoad(userInput);
    setGameIsOver(false)
  }
  function gameOverHandler(numberOfRounds){
    
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler(){
    setHasNumberlLoad(null)
    setGameIsOver(true)
    setGuessRounds(0)
  }
  let screen = <StartGameScreen onNumberLoad={getNumberHandler} />;
  if (hasNumberLoad) {
    screen = <GameScreen onGameOver ={gameOverHandler} chosenNumber={hasNumberLoad} />;
  }
  if(gameOver && hasNumberLoad){
    screen =<GameOverScreen rounds={guessRounds} chosenNumber={hasNumberLoad} onStartNewGame={startNewGameHandler}/>
  }



  return (
    <LinearGradient
      colors={[Colors.primaryColor_2, Colors.primaryColor_1]}
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
