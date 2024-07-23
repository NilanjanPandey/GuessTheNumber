import { Text,StyleSheet,Platform } from "react-native";
function Title(props){
return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:32,
        // fontFamily:'open-sans-bold',
        fontWeight:'bold',
        color:Platform.OS==='ios'?'white':'white',
        // borderWidth:1,
        padding:12,
        // borderColor: Platform.OS==='ios'?'green':'#063970',
        maxWidth:'80%',
        // width:300
      }
});