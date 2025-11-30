import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function Page() {
    
  const router = useRouter();
    const onStartInteractive = () => {
        router.push('/Adivinha35mm');
    };

    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.container}
        >
            <View style={styles.main}>
                
          
                <Text style={styles.tituloTopo}>
                    Película 35mm <FontAwesome5 name="film" size={24} color="" />
                </Text>
                <Text style={styles.textoTopo}>
                    Tudo sobre a base analógica do cinema clássico.
                </Text>

                

                <View style={[styles.Caixa, { borderLeftColor:"#630407ff" }] }>
                    <Text style={styles.TituloCaixa}>
                       <FontAwesome6 name="film" size={20} color="" />  O que é 35mm? 
                    </Text>
                    
                    <Text style={styles.TextoCaixa}>
                        Formato físico padrão do cinema clássico, onde a imagem é registrada quimicamente no rolo de filme.
                    </Text>
                </View>



                <View style={[styles.Caixa, { borderLeftColor:"#8a060aff" }]}>
                    <Text style={styles.TituloCaixa}>
                       <FontAwesome6 name="star" size={20} color="" />  Legado e Estética
                    </Text>
                    
                    <Text style={styles.TextoCaixa}>
                        Padrão profissional por mais de 100 anos, ainda escolhida por grandes diretores pela sua textura única.
                    </Text>
                </View>



                
                <View style={[styles.Caixa, { borderLeftColor:"#b4060cff" }]}>
                    <Text style={styles.TituloCaixa}>
                       <FontAwesome6 name="camera-retro" size={20} color="" />  Detalhes Técnicos
                    </Text>
                    <Text style={styles.TextoCaixa}>
                        Projetado a 24 FPS (Quadros por Segundo) e utiliza perfurações laterais para o transporte da película.
                    </Text>
                </View>

               


                <View style={[styles.Caixa,  { borderLeftColor:"#ce050cff" }]}>
                    <Text style={styles.TituloCaixa}>
                       <FontAwesome6 name="arrows-left-right" size={20} color="" /> Analógico vs Digital
                    </Text>
                    <Text style={styles.TextoCaixa}>
                        A diferença chave é o "grão" orgânico do 35mm contra a nitidez extrema e precisão de cor do digital.
                    </Text>
                </View>
                
               
                <TouchableOpacity 
                    style={styles.labButton} 
                    onPress={onStartInteractive}
                >
                    <Text style={styles.labButtonText}>
                        <Fontisto name="film" size={22} color="" /> Iniciar Quiz 
                    </Text>
                </TouchableOpacity>

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
        justifyContent: "flex-start", 
        maxWidth: 960,
        width: '100%', 
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
        marginTop: 10 ,
        padding: 3,
        width: '100%',
        fontFamily: 'Epilogue_400Regular' 
    },

    Caixa: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%',
        padding: 15,
        elevation: 5,
        shadowColor: "#d35555ff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 20, 
        borderLeftWidth: 8,
        borderLeftColor: '#8b080fff'
    },
    
    TituloCaixa: {
        fontSize: 20,
        color: '#8b080fff',
        marginBottom: 3,
        fontFamily:'Epilogue_600SemiBold', 
    },
    
    TextoCaixa: {
        fontSize: 15, 
        color: '#666',
         fontFamily: 'Epilogue_400Regular', 
    },

    labButton: {
        backgroundColor: '#aa2b0cff',
        padding: 15,
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 20,
        width: '85%',
alignSelf: 'center',
        elevation: 8,
        shadowColor: '#9c3107ff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
       
    },
    labButtonText: {
        color: '#ffeddeff',
        fontSize: 19,
        textAlign: 'center',
        fontFamily:'Epilogue_700Bold',
    },
});