import { StyleSheet, TextInput, TextInputProps } from "react-native";


export function Input({...rest}:TextInputProps){
    return(
    <TextInput style={styles.container} {...rest}/>

    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        borderRadius:8,
        paddingLeft:8,
        fontSize:14
    }
})