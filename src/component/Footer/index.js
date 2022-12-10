import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shoes from '../Shoes';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/2.jpg')} cost="110,90€">
                    Spider Man   
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/3.jpg')} cost="360,90€">
                    LEGO Ninjago 
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/4.jpg')} cost="890,99€">
                    LEGO Super Mario  
                </Shoes>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})