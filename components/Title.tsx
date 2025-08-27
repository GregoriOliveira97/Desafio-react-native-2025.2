import { StyleSheet, Text, View } from "react-native";

type Props ={
    title: string;
    subtitle?:string;
}
export function Title(props:Props){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>
            {props.title}
        </Text>
        <Text style={styles.subtitle}>
            {props.subtitle}
        </Text>
    </View>

    )

}

const styles = StyleSheet.create({
    container:{
        gap: 12
    },
    title:{
        width:"100%",
        alignItems:'center',
        fontSize: 24,
        color: "#6A1B9A"
    },
    subtitle:{
        width:"100%",
        alignItems:'center',
        fontSize: 16,
        color: "#000000",
        opacity: 0.7
    }
})