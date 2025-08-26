import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props ={
    title: string
    onPress?: ()=>void
}
export function Button(props:Props){
    return(
    <TouchableOpacity style={styles.container} >
        <Text style={styles.title}>
            {props.title}
        </Text>
    </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    container:{
        gap: 12,
        backgroundColor:"#221515",
        padding:6,
        borderRadius:8,
 
    },
    title:{
        width:"100%",
        alignItems:'center',
        fontSize: 18,
        color: "#ffffff"
    }

})