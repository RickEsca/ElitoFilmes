import { ImageBackground, Text, View } from "react-native";
import { StyleSheet} from 'react-native';


const CardFilme = ({imagem,tit,desc,clas})=>{
    return(
        <ImageBackground
            style={estilo.img_filme}
            source={imagem}
            borderRadius={10}
            resizeMode="cover"
        >
            <Text style={estilo.filme_titulo}>{tit}</Text>
            <View>
                <Text style={estilo.filme_desc}>{desc}</Text>
                <Text style={estilo.filme_clas}>{clas}</Text>
            </View>

        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    img_filme:{
        width: 380,
        height: 550,
        backgroundColor: '#ddd',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 20
               
    },
    filme_titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#221C35",
        color: "#FFF",
    },
    filme_desc:{
        fontSize: 18,
        padding:1,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        textAlign: "center"
    },
    filme_clas:{
        fontSize: 25,
        backgroundColor:"#ff0000",
        color: "#FFF",
        textAlign: "center"
    },
    
  });
  
  export default CardFilme;