import React from "react";
import { Text, View,StyleSheet } from "react-native";
import Colors from "../../constants/color";
function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles =StyleSheet.create({
    container:{
        // borderWidth:1,
        // borderColor:'white',
        padding:10,
        // borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    },
    numberText:{
        color: Colors.secondaryColor_3,
        fontSize:35,
        fontFamily:'open-sans-bold'
    }
});
