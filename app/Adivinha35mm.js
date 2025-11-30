import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useState } from 'react'; 
import carro35 from "../assets/carro35.jpg"; 
import taxidigi from "../assets/taxidigi.jpg";
import rio35 from "../assets/rio35.jpg";
import riodigi from "../assets/riodigi.jpg";
import sinuca35 from "../assets/sinuca35.png"; 
import sinucadigi from "../assets/sinucadigi.jpg";
import picnic35 from "../assets/picnic35.jpg";
import picnicdigi from "../assets/picnicdigi.jpg";


const OpcaoQuiz = ({ imagem, ehCorreta, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.opcaoBotao}
            onPress={() => onPress(ehCorreta)}
        >
            <Image
                source={imagem}
                style={styles.opcaoImagem}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
};



export default function QuizManual() {

    const [pontuacao, setPontuacao] = useState(0);
    
    const handleResposta = (ehCorreta) => {
        if (ehCorreta) {
            setPontuacao(pontuacao + 1);
            Alert.alert("Parabéns! ", "Você acertou!");
        } else {
            Alert.alert("Errado! ", "Não foi dessa vez.");
        }
    };



    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            <View style={styles.main}>

                <Text style={styles.tituloTopo}>
                    Adivinhe a Película
                </Text>
                <Text style={styles.textoTopo}>
                    Sua pontuação: {pontuacao}
                </Text>
                
                

                <View style={styles.caixaPergunta}>
                    <Text style={styles.perguntaTexto}>
                     Qual destas imagens é analógica?
                    </Text>
                    
                    <View style={styles.opcoesContainer}>
                        <OpcaoQuiz 
                            imagem={carro35} 
                            ehCorreta={true}
                            onPress={handleResposta}
                        />
                        <OpcaoQuiz 
                            imagem={taxidigi} 
                            ehCorreta={false}
                            onPress={handleResposta}
                        />
                    </View>
                </View>


                
                <View style={styles.caixaPergunta}>
                    <Text style={styles.perguntaTexto}>
                        Qual destas imagens é digital?
                    </Text>
                    
                    <View style={styles.opcoesContainer}>
                        <OpcaoQuiz 
                            imagem={rio35} 
                            ehCorreta={false}
                            onPress={handleResposta}
                        />
                        <OpcaoQuiz 
                            imagem={riodigi} 
                            ehCorreta={true}
                            onPress={handleResposta}
                        />
                    </View>
                </View>



                <View style={styles.caixaPergunta}>
                    <Text style={styles.perguntaTexto}>
                        Qual destas imagens é analógica?
                    </Text>
                    
                    <View style={styles.opcoesContainer}>
                        <OpcaoQuiz 
                            imagem={sinucadigi} 
                            ehCorreta={false}
                            onPress={handleResposta}
                        />
                        <OpcaoQuiz 
                            imagem={sinuca35} 
                            ehCorreta={true}
                            onPress={handleResposta}
                        />
                    </View>
                </View>



                <View style={styles.caixaPergunta}>
                    <Text style={styles.perguntaTexto}>
                     Qual destas imagens é digital?
                    </Text>
                    
                    <View style={styles.opcoesContainer}>
                        <OpcaoQuiz 
                            imagem={picnic35} 
                            ehCorreta={true}
                            onPress={handleResposta}
                        />
                        <OpcaoQuiz 
                            imagem={picnicdigi} 
                            ehCorreta={false}
                            onPress={handleResposta}
                        />
                    </View>
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
        alignItems: "center",
        padding: 24,
    },
    main: {
        flex: 1,
        width: '100%',
    },

    tituloTopo: {
        fontSize: 28,
        color: '#8b080fff',
        textAlign: 'center',
        marginBottom: 3,
        marginTop: 25,
        fontFamily:'Epilogue_700Bold',
    },

    textoTopo: {
        fontSize: 18,
        color: '#bb4c4cff',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'Epilogue_500Medium'
    },
    
  
    caixaPergunta: {
        backgroundColor: '#ffffff',
        borderRadius: 15, 
        padding: 15,
        elevation: 8,
        shadowColor: "#c26713ff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 20, 
        width: '100%',
    },

    perguntaTexto: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 20,
        color: '#b95909ff',
       fontFamily: "Epilogue_600SemiBold",
    },

    opcoesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    opcaoBotao: {
        width: '45%',
        aspectRatio: 1,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 0,
    },
    
    opcaoImagem: {
        width: '100%',
        height: '100%',
    },
    
});