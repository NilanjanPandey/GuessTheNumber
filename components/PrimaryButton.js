import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // style={styles.buttonInnerContainer}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.iOSElevation]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "1e81b5" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "#1e81b0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  iOSElevation: {
    opacity: 0.75,
  },
});
