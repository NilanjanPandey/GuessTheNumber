import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/color";
function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

export default Card;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 10,
    marginTop: deviceWidth < 380 ? 18 : 36,
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
