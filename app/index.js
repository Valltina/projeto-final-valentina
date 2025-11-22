import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import logo from "../assets/Cine.png";
import { GoogleFonts } from './_layout';
import { useState } from "react";

export default function Page() {
  const [curiosidades, setCuriosidades] = useState([
    { time: 1, message: "Texto 1" },
    { time: 2, message: "Texto 2" },
    { time: 3, message: "Texto 3" },
    { time: 4, message: "Texto 4" },
    { time: 5, message: "Texto 5" },
    { time: 6, message: "22" },
    { time: 7, message: "a" },
    { time: 8, message: "b" },
    { time: 9, message: "a" },
    { time: 10, message: "a" },
    { time: 11, message: "a" },
    { time: 12, message: "a" },
    { time: 13, message: "a" },
    { time: 14, message: "a" },
    { time: 15, message: "a" },
    { time: 16, message: "a" },
    { time: 17, message: "a" },
    { time: 18, message: "a" },
    { time: 19, message: "a" },
    { time: 20, message: "a" },
    { time: 21, message: "O custo de um longa-metragem pode ter milhões de dólares só em película e revelação." },
    { time: 22, message: "a" },
    { time: 23, message: "a" },
    { time: 24, message: "a" },

  ])

  const getMessage = () => {
    let horaAtual = new Date().getHours();
    const filtrados = curiosidades.filter(item => item.time === horaAtual);
    if (filtrados.length === 0)
      return 'Nenhuma dicazinha'

    return filtrados[0].message
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={logo} style={styles.logo} />

      </View>
      <View style={styles.Caixa}>
        <Text style={styles.TituloCaixa}>
          Bem-vindo(a)</Text>
        <Text style={styles.TextoCaixa}>
          Este aplicativo foi desenvolvido para fins pedagógicos como um trabalho escolar sobre o
          universo do cinema. Explore informações detalhadas e curiosidades sobre filmes e o papel
          histórico das películas 35mm.</Text>
      </View>


      <View>
        <View>
           <Text style={styles.Curiosidade}>Você sabia? <MaterialCommunityIcons name="lightbulb-on-10" size={24} color="" /></Text>
        
        </View>
       

<View style={styles.Centralizar}>
        <View style={styles.Caixa2}>
          <Text style={styles.TextoCaixa2}>{getMessage()}
          </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8edd4ff",
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
    backgroundColor: '#fffaf0ff',
    padding: 20,
    borderRadius: 25,
    width: '90%',
    marginTop: '50',
    borderWidth: 1,
    borderColor: '#d4b273ff',

  },

  TextoCaixa: {
    color: '#9c2323ff',
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Epilogue_400Regular'
  },
  TituloCaixa: {
    color: '#9c2323ff',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Epilogue_500Medium'
  },
  Curiosidade: {
    color: '#9c2323ff',
    fontSize: 28,
    textAlign: 'center',
    padding: 25,
    fontFamily: 'Epilogue_700Bold',
    marginTop: 25,
  },
  Caixa2: {
    backgroundColor: '#9c2323ff',
    padding: 10,
    marginTop: -15,
    borderRadius: 20,
    width: '90%',
   display: 'flex',
   alignItems: 'center'
  },
  TextoCaixa2: {
    color: '#ffffffff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Epilogue_500Medium'
  },
  Centralizar: {
    display:'flex',
    alignItems:'center'
  }
});
