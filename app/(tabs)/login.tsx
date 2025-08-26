import Navbar from '@/components/Navbar';
import { Title } from '@/components/Title';
import { width } from '@/constants/Dimensions';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return(
    <>
      <SafeAreaView style={styles.containerSafe}>
        <Navbar/>
        <ScrollView style={styles.containerScrooll} >
              <Title title='⚔️ Bem-vindo, Aventureiro!' subtitle='Gerencie seus personagens, equipamentos, poderes e conquiste novos territórios em suas campanhas.'/>
        </ScrollView>
      </SafeAreaView>

    </>
  ) 
}

const styles = StyleSheet.create( {
   containerSafe:{
    flex: 1,
    backgroundColor:"#F5F5DC"
  },
  containerScrooll:{
    flex: 1,
    backgroundColor:"#F5F5DC",
    padding: width*0.05
  },


})