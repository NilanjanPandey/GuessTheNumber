import React from "react";
import { View, StyleSheet } from "react-native";

function ButtonContainer(props) {
  return <View style={styles.container}>{props.children}</View>;
}

export default ButtonContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
