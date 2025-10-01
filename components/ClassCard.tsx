import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props =TouchableOpacityProps&{
    nome: string
    onPress?: ()=>void
    image:ImageSourcePropType
}
export function ClassCard(props:Props){
    return(
    <TouchableOpacity style={styles.container} >
            <Image source={props.image} 
            style={{height:80, width:80, borderRadius:99}}/>
            <Text style={styles.nome}>
                {props.nome}
            </Text>        
    </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    container:{
        width:'15%',
        gap: 6,
        alignItems:'center',
        backgroundColor:"#f6f6f6",
        flexDirection:'column',
        padding:6,
        borderRadius:8,
 
    },
    nome:{
        width:"100%",
        alignItems:'center',
        fontSize: 16,
        color: "#000000"
    },
    

})