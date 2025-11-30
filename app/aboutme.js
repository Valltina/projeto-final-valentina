import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import oppenheimer from "../assets/oppenheimer.png";



export default function AboutMe() {
    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.container} 
        >
            <View style={styles.main}>
                
               
                <View style={styles.photoContainer}>
    
                  <Image source={oppenheimer} style={styles.profileImagePlaceholder} />
                    </View>
                </View>
                
                
                <Text style={styles.tituloTopo}>
                    Valentina
                </Text>
                <Text style={styles.textoTopo}>
                    Avaliação DDM 2°Info
                </Text>

               
                
                <View style={styles.boxesContainer}>
                    
                    <View style={[styles.Caixa, , { borderLeftColor:"#750307ff" }]}>
                        <Text style={styles.TituloCaixa}>
                            <FontAwesome name="code" size={20} color='' /> O Projeto
                        </Text>
                        <Text style={styles.TextoCaixa}>
                            Esta aplicação foi desenvolvida como parte de um estudo sobre a Película 35mm e as tecnologias de desenvolvimento mobile (React Native/Expo).
                        </Text>
                    </View>

                    <View style={[styles.Caixa, { borderLeftColor:"#92070cff" }]}>
                        <Text style={styles.TituloCaixa}>
                            <FontAwesome name="envelope" size={20} color='' /> Contato
                        </Text>
                        <Text style={styles.TextoCaixa}>
                            Para sugestões, feedback ou dúvidas, você pode entrar em contato através do e-mail:
                        </Text>
                        <Text style={styles.LinkTexto}>
                            [seu.email@exemplo.com]
                        </Text>
                    </View>

                    <View style={[styles.Caixa, { borderLeftColor:"#c4070dff" }]}>
                        <Text style={styles.TituloCaixa}>
                            <FontAwesome name="tag" size={20} color='' /> Versão
                        </Text>
                        <Text style={styles.TextoCaixa}>
                            Versão 1.0.0
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
    
    photoContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    profileImagePlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#e64646ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderColor:'#bb4c4cff',
    },
    
  
    tituloTopo: {
        fontSize: 28,
        color: '#8b080fff',
        textAlign: 'center',
        marginBottom: 3,
        width: '100%',
        fontWeight: 'bold', 
    },
    textoTopo: {
        fontSize: 18,
        borderColor:'#bb4c4cff',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10 ,
        padding: 3,
        width: '100%',
        color:'#bb4c4cff',
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
    },
    TextoCaixa: {
        fontSize: 15, 
        color: '#666',
        marginBottom: 5,
    },
    LinkTexto: {
        fontSize: 15,
        color:' #d35555ff',
        fontWeight: 'bold',
    }
});