import { Button } from '@/components/Button';
import { Input } from '@/components/LoginInput';
import { Title } from '@/components/Title';
import { width } from '@/constants/Dimensions';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return(
    <>
      <SafeAreaView style={styles.containerSafe}>
        <View style={styles.containerScroll} >
          <View style={{alignItems:'center'}}>
            <Title title='RPG Manager' subtitle='Entre na sua aventura!'/>
          </View>
          <View >
            <Text style={styles.text}>Usuário:</Text>
            <Input placeholder='Coloque seu usuario'/>
            <Text style={styles.text}>Senha:</Text>
            <Input placeholder='Coloque seu usuario'/>
          </View>
          <View>
            <Button title='Entrar'/>
          </View>
          <View>
            <Button title='Crie sua conta aqui' backgroundColor='#ffffff' fontSize={14} color='#6A1B9A'/>
          </View>
        </View>
      </SafeAreaView>

    </>
  ) 
}

const styles = StyleSheet.create( {
   containerSafe:{
    flex:1,
    backgroundColor:"#F5F5DC",
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:24,
    paddingTop: 24,
  },
  containerScroll:{
    width:'80%',
    height:'80%',
    justifyContent:'space-between',
    backgroundColor:"#ffffff",
    borderWidth:1,
    borderColor:"#6A1B9A",
    padding: width*0.05,
    borderRadius:12

  },
  text:{
    fontSize:16,
    fontWeight:600
  }


})