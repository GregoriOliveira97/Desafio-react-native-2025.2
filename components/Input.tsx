    import { StyleSheet, TextInput } from "react-native";


    export function Input({ ...rest }: TextInput){
        return(
        <TextInput style={styles.container} {...rest}/>
        )
    }

    const styles = StyleSheet.create({
        container:{
            gap: 12,
            backgroundColor:"#f2f2f2",
            paddingHorizontal:16,
            borderRadius:8,
            height: 48,
            width: "100%",
            borderWidth: 1,
            borderColor: "#6A1B9A"
        }

    })