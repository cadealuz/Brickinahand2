import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button'
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Harry Potter LEGO'
  })

 return (
   <ScrollView style={styles.container}>
      <Image
      source={require('../../assets/detail.jpg')}
      style={styles.image}
      resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, {fontSize: 24}]}>140,90€</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, {fontSize: 30}]}>Harry Potter LEGO</Text>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
          LEGO HARRY POTTER 4 Privet Drive 75968
          </Text>
          <Text style={styles.textContent}>
          Explora 4 Privet Drive, a casa da família Dursley e descobre um turbilhão de entusiasmo mágico! Explora o armário debaixo das escadas onde dorme Harry Potter, roda o botão para ver as cartas de Hogwarts entrar pela chaminé e encontra Dobby no quarto superior de Harry. Quando Dudley, a tia Petunia e o tio Vernon tentam impedir o caos, ajuda Harry a escapar voando no Ford Anglia com Ron!
          {'\n'}
          Idade: + 8 anos
          {'\n'}
          Peças: 797
          </Text>
          <Text style={styles.textList}>
          AVISO! Perigo de asfixia manter afastado de crianças com - 3 anos.
          </Text>
        </View>

        <Button/>

        <View style={styles.line} />

        <Footer/>

      </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  image:{
    width: '100%',
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  textTitle:{
    fontSize: 22,
    lineHeight: 25,
    marginVertical: '2%',
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
    marginVertical: '2%',
  }
});