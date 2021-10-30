import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import ProductSliderItem from './ProductSliderItem';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const ProductSlider = ({data, onPress}) => {
  const scrollX = new Animated.Value(0);

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <ProductSliderItem item={item.item} onPress={onPress} />;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {listener: (event) => console.log(event)},
          )}
        />
      </View>
    );
  }
  return null;
};

export default ProductSlider;
