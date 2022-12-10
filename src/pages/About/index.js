import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
 return (
   <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Text style={{fontSize: 20, marginTop: 100, fontFamily: 'Anton_400Regular'}}>
            BEM VINDOS AO BRICK IN A HAND
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
          <Text style={styles.paragraph}>
          A Brick in a Hand Lda, sediada em Lisboa, é uma empresa 100% portuguesa, que nasceu em 2002 e é a responsável pela criação do conceito das lojas BRICK IN A HAND. A primeira loja BRICK IN A HAND abriu em Oeiras e era uma loja que era especializada em modelismo. 
          Aos poucos, expandiram o negócio a LEGOS, colecionáveis e artigos de merchandising. Actualmente possuem 3 lojas na zona centro do país.
          </Text>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    paragraph: {
      margin: 30,
      marginTop: 10,
      fontSize: 15,
      textAlign: 'center',
    }
  });