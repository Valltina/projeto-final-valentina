import { StyleSheet, Text, View, Image } from "react-native";
import saltburn from "../assets/saltburn.jpg";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <View style={styles.Caixa}>
            <Image source={saltburn} style={styles.fotofilme} />
                <Text style={styles.TextoCaixa}>
                  Este aplicativo </Text>
              </View>

              <View style={styles.Caixa}>
            <Image source={saltburn} style={styles.fotofilme} />
                <Text style={styles.TextoCaixa}>
                  Este aplicativo </Text>
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
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    flexDirection:'row',
    flexWrap:"wrap",
    paddingVertical:20,
    
  },
   Caixa: {
    backgroundColor: '#ffffff',
    padding: 10,  elevation: 5,
    borderRadius: 20,
    width: '40%',
  
    
  },

  TextoCaixa: {
    color: '#ffffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Epilogue_400Regular'
  },
  TituloCaixa: {
    color: '#ffffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  
  fotofilme: {
    height: 70,
    width: 70,
    borderRadius: 8,

  },


});
