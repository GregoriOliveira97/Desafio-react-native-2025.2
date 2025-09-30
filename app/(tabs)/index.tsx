import { ClassCard } from '@/components/ClassCard';
import { ItemCard } from '@/components/ItemCard';
import Navbar from '@/components/Navbar';
import { Title } from '@/components/Title';
import { width } from '@/constants/Dimensions';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return(
    <>
      <SafeAreaView style={styles.containerSafe}>
        <Navbar/>
        <ScrollView style={styles.containerScroll} >
          <View style={{paddingTop:12}}>
            <Title title='⚔️ Bem-vindo, Aventureiro!' subtitle='Gerencie seus personagens, equipamentos, poderes e conquiste novos territórios em suas campanhas.'/>
          </View>
          <View style={{gap:24}}>
            <Text style={{paddingTop:12, fontSize:18, fontWeight:600}}>
            Algumas opções pra você:
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.charScrollContent}>
              <ItemCard name="Lyra Tempestade" level={15} classe='Mago' />
              <ItemCard name="Kael Sombraulunar" level={10} classe='Guerreiro'/>
              <ItemCard name="Rurik" level={18} classe='Assassino' />
            </ScrollView>
          </View>
          <View style={{gap:12}}>
            <Text style={{paddingTop:12, fontSize:18, fontWeight:600}}>
            Escolha sua classe favorita:
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.charScrollContent}>
              <ClassCard nome="Mago"  />
              <ClassCard nome="Bruxo"  />
              <ClassCard nome="Paladino"  />
              <ClassCard nome="Guerreiro"  />
              <ClassCard nome="Assassino"  />
              <ClassCard nome="Patrulheiro"  />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>

    </>
  ) 
}

const styles = StyleSheet.create( {
   containerSafe:{
    flex: 1,
    backgroundColor:"#F5F5DC",
  },
  containerScroll:{
    flex: 1,
    flexDirection:'column',
    gap: 12,
    backgroundColor:"#F5F5DC",
    padding: width*0.05,
  },
   charScrollContent: {
    gap: 12,
    paddingBottom:24
  },


})