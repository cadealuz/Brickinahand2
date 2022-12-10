import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Menu(props) {
    return (
       <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Text>
            {props.children}
            </Text> 
       </TouchableOpacity>
      );
    }
    
    const styles = StyleSheet.create({
        container:{
        
        }
        
    })