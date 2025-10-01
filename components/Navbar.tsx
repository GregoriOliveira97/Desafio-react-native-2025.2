import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import { Button } from "./Button";

type Props =TouchableOpacityProps & {
       
    }
 
export default function Navbar({...rest}:Props){
    const navigation=useNavigation()
    return(
        <View style={styles.navbar}>
            <Image source={require("../assets/images/skillo-logo.png")} style={{width:80, height:80}} />
            <View style={{gap:8, alignItems:'center'}}>
                <Text style={styles.text}> Skillo Mentality</Text>
                <Text style={styles.text}> RPG Manager</Text>
            </View>
            <Button title="Login" activeOpacity={0.8} onPress={()=>navigation.navigate('login')}/>
        </View>
    )
}

const styles= StyleSheet.create({
    navbar:{
        width:"100%",
        flexDirection: 'row',
        alignItems:'center',
        padding:4,
        justifyContent: 'space-between',
        backgroundColor: "#6A1B9A",
    },
    text:{
        color:"#ffffff",
        fontSize:20,
        fontWeight:500

    }
})