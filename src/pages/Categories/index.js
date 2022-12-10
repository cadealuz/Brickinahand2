import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Categories() {
 return (
  <View style={styles.container}>
    <Text>CATEGORIAS</Text>
  <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.title}>LEGO</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.title}>ACTION FIGURES</Text>
  </TouchableOpacity>
</View>
  );
}

const styles =StyleSheet.create({
  container:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40
  },
  btnContainer:{
      width: '90%',
      height: 50,
      backgroundColor: 'purple',
      borderRadius: 5,
      marginVertical: '5%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  title:{
      fontSize: 17,
      color: '#FFF'
  }
})