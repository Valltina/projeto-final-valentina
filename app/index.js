import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../assets/Cine.png";
import { GoogleFonts } from './_layout';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
         <Image source={logo} style={styles.logo} />

      </View>
      <View style={styles.Caixa}>
        <Text style={styles.TituloCaixa}>
          Bem vindo(a)</Text>
          <Text style={styles.TextoCaixa}>
          Este aplicativo foi desenvolvido para fins pedagógicos como um trabalho escolar sobre o
           universo do cinema. Explore informações detalhadas e curiosidades sobre filmes e o papel 
           histórico das películas 35mm.</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8edd4ff" ,
    flexDirection: 'column',
    paddingTop: 40,
  },

  main: {
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: 'center',
  },
 
   logo: {
    height: 128,
    width: 128,
  },

  Caixa: {
    backgroundColor: '#e7c077ff', 
    padding: 20, 
    borderRadius: 25, 
    width: '90%',
    marginTop: '50',
    borderWidth: 2,
    borderColor: '#cc9837ff',
   
  },
  
  TextoCaixa: {
    color: '#ffffffff', 
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'DelaGothicOne_400Regular'
  },
  TituloCaixa: {
    color: '#ffffffff',
    fontSize: 30,
    textAlign: 'center', 
  },
});
