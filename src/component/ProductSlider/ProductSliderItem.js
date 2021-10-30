import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    height: height ,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {},
  image: {
    width: width / 4,
    height: height / 5.5,
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#212121',
    fontSize: 13,
    fontWeight: '300',
  },
});

const ProductSliderItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemTitle}>{item.nombre}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../../resource/static/images/imagen.png')}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.descripcion}</Text>
          <Text style={styles.itemPrice}>{`$ ${item.precio}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductSliderItem;
