import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/color";
function InstructionText(props) {
  return <Text style={[styles.instructionText,props.style]}>{props.children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primaryColor_2,
    fontWeight: "bold",
    // fontFamily:'open-sans',

    fontSize:17
  },
});
