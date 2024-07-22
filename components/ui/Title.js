import { Text,StyleSheet } from "react-native";
function Title(props){
return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:32,
        fontFamily:'open-sans-bold',
        color:'white',
        // borderWidth:1,
        padding:12,
        borderColor:'#063970'
      }
});