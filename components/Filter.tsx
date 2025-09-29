import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { FilterStatus } from "./types/FilterStatus";

    type Props =TouchableOpacityProps & {
        status: FilterStatus
        isActive: boolean,
        color?:string
        fontSize?:number
        link?: string
    }
    export function Filter({status, isActive,  fontSize=12, ...rest }: Props){
        return(
        <TouchableOpacity style={[styles.container, {opacity: isActive? 1:0.5}]} {...rest} >
            <Text style={styles.title}>
                {status===FilterStatus.ASSASSINO }
            </Text>
        </TouchableOpacity>
        )
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            width:'100%',
            gap: 12,
            padding:6,
            borderRadius:8
    
        },
        title:{
            color:"black",
            fontSize:12,
            fontWeight:600
        }

    })