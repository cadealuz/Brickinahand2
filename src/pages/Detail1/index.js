import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button'
import Footer from '../../component/Footer';

export default function Detail1({ navigation }) {
 
    navigation.setOptions({
        headerTitle: 'Spider Man'
      })
    
     return (
       <ScrollView style={styles.container}>
          <Image
          source={require('../../assets/detail2.jpg')}
          style={styles.image}
          resizeMode="cover"
          />
    
          <View>
            <View>
              <Text style={[styles.title, {fontSize: 24}]}>280,90€</Text>
            </View>
            <View opacity={0.4}>
              <Text style={[styles.title, {fontSize: 30}]}>Spider Man</Text>
            </View>
    
            <View style={styles.textContent}>
              <Text style={styles.textTitle}>
              Spider-Man Figura e Moto-Aranha Superveloz
              </Text>
              <Text style={styles.textContent}>
              Entra em acção ao lado do Homem Aranha e da sua mota super veloz!
              Cria aventuras com o teu super-herói e as suas asas de planador e derrota os seus inimigos! 
              {'\n'}
              Idade: + 4 anos{'\n'}
              Altura: 15 centímetros
              </Text>
              <Text style={styles.textList}>
              AVISO! Perigo de asfixia: manter afastado de crianças com - 3 anos.
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