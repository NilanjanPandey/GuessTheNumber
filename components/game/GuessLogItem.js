import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Colors from '../../constants/color'

function GuessLogItem(props) {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{props.round}</Text>
        <Text style={styles.itemText}>System's Guess: {props.guess}</Text>
    </View>
  )
}

export default GuessLogItem

const styles =StyleSheet.create({
    listItem:{
        // borderColor:Colors.primaryColor_2,
        borderWidth:1,
        borderRadius:25,
        padding:12,
        marginVertical:8,
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%',
        elevation:4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        backgroundColor:Colors.primaryColor_1
    },
    itemText:{
        fontFamily:'open-sans',
        color:Colors.primaryColor_2
    }
});