import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 40,
    height: height / 2,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
  },
});

const ProductItemSlider = ({item}) => {
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../resource/static/images/imagen.png')}
      />
    </View>
  );
};

export default ProductItemSlider;
