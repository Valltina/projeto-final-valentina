import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import saltburn from "../assets/saltburn.jpg";



export default function Page() {
  return (
    <ScrollView style={styles.scrollView}
    contentContainerStyle={styles.container}>

      <View style={styles.main}>

    <Text style={styles.tituloTopo}>
        Frame Revelado <Fontisto name="film" size={24} color="" />
    </Text>
    <Text style={styles.textoTopo}>
        Explore as melhores obras e suas películas originais.
    </Text>


        <View style={styles.Caixa}>
    <Image source={saltburn} style={styles.fotofilme} />
    
        <Text style={styles.TituloFilme}>
            Saltburn
        </Text>
            <Text style={styles.TextoPelicula}>
                <FontAwesome6 name="clapperboard" size={10} color="" /> 
                Tipo de Película: 35mm
            </Text>
        </View>


        <View style={styles.Caixa}>
    <Image source={saltburn} style={styles.fotofilme} />
    
        <Text style={styles.TituloFilme}>
            Oppenheimer
        </Text>
            <Text style={styles.TextoPelicula}>
                <FontAwesome6 name="clapperboard" size={10} color="" />
                 Tipo de Película:  65mm e IMAX 65mm 
            </Text>
        </View>


        <View style={styles.Caixa}>
    <Image source={saltburn} style={styles.fotofilme} />
    
        <Text style={styles.TituloFilme}>
            Central do Brasil
        </Text>
            <Text style={styles.TextoPelicula}>
                <FontAwesome6 name="clapperboard" size={10} color="" />
                 Tipo de Película: 35mm
            </Text>
        </View>


        <View style={styles.Caixa}>
    <Image source={saltburn} style={styles.fotofilme} />
    
        <Text style={styles.TituloFilme}>
           Fallen Angels
        </Text>
            <Text style={styles.TextoPelicula}>
                <FontAwesome6 name="clapperboard" size={10} color="" /> 
                Tipo de Película: 35mm
            </Text>
        </View>


        <View style={styles.Caixa}>
    <Image source={saltburn} style={styles.fotofilme} />
    
        <Text style={styles.TituloFilme}>
            Moonrise Kingdom
        </Text>
            <Text style={styles.TextoPelicula}>
                <FontAwesome6 name="clapperboard" size={10} color="" /> 
                Tipo de Película: 16mm
            </Text>
        </View>


        
        <View style={styles.Caixa}>
    <Image source={saltburn} style={styles.fotofilme} />
    
        <Text style={styles.TituloFilme}>
            Little Women
        </Text>
            <Text style={styles.TextoPelicula}>
                <FontAwesome6 name="clapperboard" size={10} color="" /> 
                Tipo de Película: 35mm
            </Text>
        </View>


        
        </View> 
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f8edd4ff",
  },

  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8edd4ff",
    
  },
  main: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: 'row',
        flexWrap: "wrap",
        gap: 20,
    },  
  
   tituloTopo: {
    fontSize: 28,
    color: '#8b080fff',
    textAlign: 'center',
    marginBottom: 3,
    marginTop: 25,
    width: '100%',
    fontFamily:'Epilogue_700Bold',
},

  textoTopo: {
    fontSize: 18,
    color: '#bb4c4cff',
    textAlign: 'center',
    marginBottom: 20,
    padding: 3,
    fontFamily: 'Epilogue_400Regular'
},

   Caixa: {
        backgroundColor: '#ffffff',
        borderRadius: 15, 
        width: '45%', 
        padding: 9,
        elevation: 8,
    },

    fotofilme: {
        width: '100%',
        height: 100, 
         borderRadius: 10,
    },
    

    TituloFilme: {
        fontSize: 17,
        color: '#000000ff',
        marginBottom: 3,
        marginTop: 5,
        fontFamily:'Epilogue_600SemiBold',
    },

    TextoPelicula: {
        fontSize: 12,
        color: '#666',
        fontFamily: 'Epilogue_400Regular',
    },

});
