import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  windowHeight,
  windowWidth,
} from '../resource/Dimensions';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
  },
  categoryContainer: {
    flex: 0.1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  category: {
    fontSize: 30,
    fontWeight: '700',
  },
  imageContainer: {
    flex: 0.5,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  image: {
    width: windowWidth / 1.7,
    height: windowHeight / 2.3,
    marginLeft: 15,
  },
  content: {
    flex: 0.25,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  descriptionContainer: {
    marginHorizontal: 20,
  },
  description: {
    fontSize: 18,
    letterSpacing: 0.7,
  },
  footer: {
    flex: 0.15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
  },
  priceContainer: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: 20,
  },
  buttonContainer: {
    flex: 0.6,
  },
  sliderContainer: {
    flex: 0.8,
    width: windowWidth - 20,
  },
});

const ProductDetails = ({navigation, route}) => {
  console.log("productdetail",route.params)
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{/*category*/}Producto</Text>
      </View>
      <View style={styles.sliderContainer}>
      <Image
        style={styles.image}
        source={require('../resource/static/images/imagen.png')}
      />
      </View>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{route.params.nombre}</Text>
        </View>
        <ScrollView>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{route.params.descripcion}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$ ${route.params.precio}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/*<Button
            variant="primary"
            label="Add to Cart"
          onPress={() => goToShoppingCart()}
          />*/}
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
