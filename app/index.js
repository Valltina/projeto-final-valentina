import { StyleSheet, Text, View, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import logo from "../assets/Cine.png";
import { GoogleFonts } from './_layout';
import { useState } from "react";

export default function Page() {
  const [curiosidades, setCuriosidades] = useState([
    { time: 1, message: "O 35 mm é o formato de película mais utilizado na história do cinema." },
    { time: 2, message: "Um rolo de 35 mm (300m) filma cerca de 11 minutos de metragem." },
    { time: 3, message: "O formato IMAX usa película de 70 mm que corre na horizontal." },
    { time: 4, message: "A película de 70 mm IMAX tem resolução superior ao digital 8K." },
    { time: 5, message: "O Oppenheimer utilizou a maior bobina IMAX já feita, pesando 270 kg." },
    { time: 6, message: "O formato Super 8 é usado para simular filmes caseiros ou flashbacks." },
    { time: 7, message: "Muitas séries clássicas usavam 16 mm por ser mais barato." },
    { time: 8, message: "O Ultra Panavision 70 mm de Os Oito Odiados é ultralargo e raro (2.76:1)." },
    { time: 9, message: "A primeira película (nitrato) era extremamente inflamável." },
    { time: 10, message: "Hoje, a película é feita principalmente de acetato ou poliéster, que são seguros." },
    { time: 11, message: "A imagem é formada por cristais de haleto de prata na emulsão." },
    { time: 12, message: "O famoso grão da película é a aparência desses cristais de prata revelados." },
    { time: 13, message: "A cor é registrada em três camadas de emulsão (uma para cada cor primária)." },
    { time: 14, message: "A Kodak ainda é a principal fornecedora de película para o cinema mundial." },
    { time: 15, message: "A primeira película perfurada foi inventada por Thomas Edison e Dickson." },
    { time: 16, message: "Os irmãos Lumière criaram o Cinematógrafo em 1895." },
    { time: 17, message: "No cinema mudo, a velocidade do filme era alterada manualmente, sem padrão." },
    { time: 18, message: "O padrão de 24 quadros por segundo veio com o cinema falado (pelo som)." },
    { time: 19, message: "As perfurações laterais são cruciais para o transporte do filme pela câmera." },
    { time: 20, message: "aA maioria dos filmes de antes de 1930 se perdeu pela degradação do nitrato."},
    { time: 21, message: "O custo de um longa-metragem pode ter milhões de dólares só em película e revelação." },
    { time: 22, message: "A revelação exige processos químicos complexos em câmaras escuras." },
    { time: 23, message: "Cópias de exibição em película se danificam a cada projeção." },
    { time: 24, message: "Hoje, a película é escaneada em alta resolução para a edição digital moderna." },

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
    width: '95%',
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
