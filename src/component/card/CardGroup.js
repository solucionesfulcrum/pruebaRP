import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Touchable, TouchableOpacity, Image
} from 'react-native';
import {windowHeight,windowWidth} from '../../resource/Dimensions'

const styles = StyleSheet.create({  
  containerGroup:{
    width: windowWidth/4,
    height: windowHeight/10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#376565',
  },
  logo:{
    width: 50,
    height: 50,
  },
});

const CardGroup = ({onPress,datos,color}) => {
  
  const styles = StyleSheet.create({  
    containerGroup:{
      width: windowWidth/4,
      height: windowHeight/10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color==2?'#f5f5f5':'#376565',
      borderColor: '#376565',
      borderWidth: 1,
      marginLeft: 4,
    },
    textLe:{
      color: '#ffffff'
    },
  });
   //console.log(datos)
  return (
      <>
        <TouchableOpacity style={styles.containerGroup} onPress={onPress}>
          <Text style={styles.textLe}>{datos.nombre}</Text>
        </TouchableOpacity>
      </>
  );
}
export default CardGroup;