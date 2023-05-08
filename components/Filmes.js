
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardFilme from './CardFilme';

export default function Adidas() {
  const filmes = [
    {
      id:"1",
      imagem: require("../assets/filmes/trf.jpg"),
      tit: "Terrifier 2",
      desc: "Filme slasher de terror",
      clas: "Terror",
    },
    {
      id:"2",
      imagem: require("../assets/filmes/rio.jpg"),
      tit: "Rio 2",
      desc:  "Descrição: Filme de paraguaio, piriquito, arara azu e tudo mais",
      clas: "Trafico",
    },
    {
      id:"3",
      imagem: require("../assets/filmes/lrx.jpg"),
      tit: "Lorax",
      desc:  "Descrição: A bomba do lorax me encarando .-.",
      clas: "Desmatamento",
    },
    {
      id:"4",
      imagem: require("../assets/filmes/tot.jpg"),
      tit: "Meu amigo totoro",
      desc:  "Descrição: Daniel muito feliz!!",
      clas: "Animação",
    }
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={filmes}
          renderItem={({item})=>
            <CardFilme 
                imagem={item.imagem}
                tit={item.tit}
                desc={item.desc}
                clas={item.clas}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}
