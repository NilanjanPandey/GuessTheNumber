import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";
function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    // borderColor:'white',
    // padding:10,
    padding: deviceWidth < 380 ? 12 : 24,
    // borderRadius:8,
    alignItems: "center",
    justifyContent: "center",
    // margin:10,
    margin: deviceWidth < 380 ? 12 : 24,
  },
  numberText: {
    color: Colors.secondaryColor_3,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: "bold",
    // fontFamily:'open-sans-bold'
  },
});
