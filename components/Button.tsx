    import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

    type Props =TouchableOpacityProps & {
        title: string
        backgroundColor?:string
        color?:string
        fontSize?:number
    }
    export function Button({ title, fontSize=18,backgroundColor = "#221515", color = "#fff", ...rest }: Props){
        return(
        <TouchableOpacity style={[styles.container, { backgroundColor }]} activeOpacity={rest.activeOpacity} onPress={rest.onPress}>
            <Text style={[styles.title, {color},{fontSize}]}>
                {title}
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
            color: "#ffffff",
            textAlign:'center'
        }

    })