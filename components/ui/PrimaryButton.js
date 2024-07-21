import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/color";
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
        android_ripple={{ color: Colors.secondaryColor_1 }}
        onPress={props.onClick}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.secondaryColor_2,
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
