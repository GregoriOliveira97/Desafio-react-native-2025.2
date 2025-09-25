import Navbar from '@/components/Navbar';
import { Title } from '@/components/Title';
import { width } from '@/constants/Dimensions';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ContatoScreen() {
  return(
    <>
      <SafeAreaView style={styles.containerSafe}>
        <Navbar/>
        <View style={{width:"100%",paddingVertical:8, justifyContent:'center', alignItems:'center'}}>
            <Title title='📞Contato' fontSize={24}/>
        </View>
        <View style={styles.containerContato}>
            <View style={[styles.contato,{alignItems:'center'}]} >
                <Title title='🏰Guilda dos Desenvolvedores' fontSize={20}/>
                <View style={{gap:12, paddingStart:16,alignSelf:'flex-start'}}>
                    <Text>Email: suporte@questmanager.com</Text>
                    <Text>Discord: discord.com/QuestManager</Text>
                    <Text>WhatsApp: (32)1234-5678</Text>
                </View>
            </View>
            <View style={styles.contato} >
              <Title title='🔗 Redes Sociais' fontSize={20}/>
              <View style={{gap:12, paddingStart:16,alignSelf:'flex-start'}}>
                    <Text>Instagram: @skillo_mentality</Text>
                    <Text>Twitter: @SkilloMentality</Text>
                    <Text>Facebook: Skillo Mentality</Text>
                </View>
            </View>
        </View>
      </SafeAreaView>

    </>
  ) 
}

const styles = StyleSheet.create( {
   containerSafe:{
    flex: 1,
    flexDirection:"column",
    width:"100%",
    backgroundColor:"#F5F5DC",
    alignContent:"center",
    justifyContent:"center",
    textAlign: "center"
  },
  containerContato:{
    flex:1,
    padding: width*0.02,
    gap: 8,
     alignContent:"center",
    justifyContent:"center",
    textAlign: "center",

  },
  contato:{
    flex: 1,
    backgroundColor:"#f2f2f2",
    borderRadius:8,
    borderWidth: 1,
    gap:36,
    borderColor:"#6A1B9A",
  },


})