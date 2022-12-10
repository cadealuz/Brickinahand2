import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons'

import Shoes from '../../component/Shoes';
import Menu from '../../component/Menu';

export default function Home() {
  const navigation = useNavigation();

 return (
   <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>BRICK IN A HAND</Text>

          <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
            <MaterialIcons
            name="filter-list"
            size={24}
            color="#000"
            />
          </TouchableOpacity>
        </View>
    </View>

    <View style={styles.line} />

    <ScrollView>
      <Image
          source={require('../../assets/Banner-LEGO-site-2022.png')}
          //BANNER BY ANA VILAÇA
          style={styles.image}
        />

        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Shoes img={require('../../assets/1.jpg')} cost="140,90€" onClick={()=> navigation.navigate('Detail')}>
            Harry Potter LEGO
          </Shoes>
          <Shoes img={require('../../assets/2.jpg')} cost="180,90€" onClick={()=> navigation.navigate('Detail1')}>
            Spider Man
          </Shoes>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Shoes img={require('../../assets/3.jpg')} cost="560,90€" onClick={()=> alert ('CLICOU')}>
            Ninjago
          </Shoes>
          <Shoes img={require('../../assets/4.jpg')} cost="290,90€" onClick={()=> alert ('CLICOU')}>
            Super Mario
          </Shoes>
        </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Shoes img={require('../../assets/5.jpg')} cost="290,90€" onClick={()=> alert ('CLICOU')}>
            Mustang LEGO
          </Shoes>
          <Shoes img={require('../../assets/6.jpg')} cost="290,90€" onClick={()=> alert ('CLICOU')}>
            Venon
          </Shoes>
        </View>

        <View style={styles.line} />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Text style={{fontSize: 20, marginTop: 20}}>
            BEM VINDOS AO BRICK IN A HAND 
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Text style={styles.paragraph}>
            Nossos produtos são inspirados pelas pessoas que estão à nossa volta,
            com suas belezas e qualidades. Produtos de bom gosto especialmente para você.
            Descubra our story e aproveite as promoções. 
          </Text>
        </View>

        <Image
          source={require('../../assets/banner2.png')}
          style={styles.image}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Text style={{margin: 30, fontSize: 15, textAlign: 'center',}}>
            Rua Eusébio 10 {'\n'}
            Centro, Cidade das Águas {'\n'}
            Aberto de Segunda a Sexta das 10:00 ás 21:00 {'\n'}
          </Text>
        </View>

        <Image
          source={require('../../assets/banner3.png')}
          style={styles.image}
        />

    </ScrollView>

    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
        <Menu onClick={()=> navigation.navigate('Home')}>
            <Feather
            name='home'
            size={24}
            />
            <Text>{"\n"}Home</Text>
        </Menu>

        <Menu onClick={()=> navigation.navigate('Categories')}>
            <Feather
            name='list'
            size={24}
            />
            <Text>{"\n"} Categorias</Text>
        </Menu>

        <Menu onClick={()=> navigation.navigate('About')}>
            <FontAwesome
            name='building-o'
            size={24}
            />
            <Text>{"\n"}Sobre a loja</Text>
        </Menu>

          <Menu onClick={()=> navigation.navigate('Card')}>
            <AntDesign
            name='creditcard'
            size={24}
            />
          <Text>{"\n"}Cartões</Text>
        </Menu>
    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    marginTop: 30
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
  paragraph: {
    margin: 30,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
  },
 
});