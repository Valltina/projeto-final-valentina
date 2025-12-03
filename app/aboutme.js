import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import perfil from "../assets/perfil.jpeg";



export default function AboutMe() {
    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.container} 
        >
            <View style={styles.main}>
                
                <View style={styles.caixafoto} >
              
               
                <View style={styles.photoContainer}>
     </View>
                  <Image source={perfil} style={styles.profileImage} />
                    </View>
                </View>
                 
                
                <Text style={styles.tituloTopo}>
                    Avaliação DDM 2°Info
                </Text>
                

               
                
                <View style={styles.boxesContainer}>
                    
                    <View style={[styles.Caixa,  { borderLeftColor:"#750307ff" }]}>
                        <Text style={styles.TituloCaixa}>
                            <FontAwesome name="user-circle" size={20}  color='' />   Sobre mim
                        </Text>
                        <Text style={styles.TextoCaixa}>
                           Oi! Eu sou a Valentina e sou a criadora do "Sétimo Frame".
Atualmente, estou no 2º ano do Ensino Médio com Técnico em Informática e esse projeto é um pedacinho de tudo que aprendi até agora.
Aqui eu juntei todos os conhecimentos de desenvolvimento que adquiri nas aulas de DDM e Informática e complementei com muitas pesquisas por conta própria.
                        </Text>
                    </View>
 
                    <View style={[styles.Caixa, { borderLeftColor:"#92070cff" }]}>
                        <Text style={styles.TituloCaixa}>
                            <FontAwesome name="code" size={20} color='' />   Desenvolvimento
                        </Text>
                        <Text style={styles.TextoCaixa}>
                           Este aplicativo foi desenvolvido como parte de um estudo sobre a Película 35mm e as tecnologias de desenvolvimento mobile (React Native/Expo)
                        </Text>
                    </View>

                    <View style={[styles.Caixa, { borderLeftColor:"#c4070dff" }]}>
                        <Text style={styles.TituloCaixa}>
                            <FontAwesome name="film" size={20} color='' />   Aplicativo
                        </Text>
                        <Text style={styles.TextoCaixa}>
                            Criar o "Sétimo Frame" foi uma jornada de aprendizado incrível para aplicar na prática as minhas habilidades e prestar uma homenagem à magia da película 35mm.
                        </Text>
                    </View>

                </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor:'#f8edd4ff',
    },
    container: {
        flexGrow: 1, 
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1, 
        justifyContent: "flex-start", 
        maxWidth: 960,
        width: '100%', 
    },  

    caixafoto: { 
        alignItems: 'center',
        height: 120, 
        backgroundColor: '#530202ff',
        marginTop: -25,
        marginLeft: -77,
        width: '150%',
    },
     marginLeft: -0,
        width: '100%',
    
    photoContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 6,
        borderColor:'#530202ff',
    },
    
  
    tituloTopo: {
        fontSize: 28,
        color: '#8b080fff',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 20,
        width: '100%',
        fontFamily: 'Epilogue_700Bold',
    },
    

    boxesContainer: {
        width: '100%',
        paddingBottom: 20, 
    },
    Caixa: {
        backgroundColor: '#fffafaff',
        borderRadius: 10,
        width: '100%',
        padding: 15,
        elevation: 5,
        shadowColor: "#d35555ff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 15,
        borderLeftWidth: 8,
        borderLeftColor:''
    },
    TituloCaixa: {
        fontSize: 20,
        color: '#8b080fff',
        marginBottom: 8,
        fontWeight: '600',
        fontFamily: 'Epilogue_500Medium'
    },
    TextoCaixa: {
        fontSize: 15, 
        color: '#666',
        marginBottom: 5,
        fontFamily: 'Epilogue_400Regular'
    },
});