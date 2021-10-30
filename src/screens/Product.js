import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Animated,
} from 'react-native';

import ProductSliderItem from '../component/ProductSlider/ProductSliderItem';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Product = ({navigation, route}) => {
    

    const scrollXProducts = new Animated.Value(0);
    const scrollXCategories = new Animated.Value(0);
    const productDetail = (item) => {
        navigation.navigate('ProductDetails', item);
    };
    return (
        <SafeAreaView style={styles.container}>
            {route.params.length !== 0 && (
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Products</Text>
                    <AnimatedFlatList
                        data={route.params}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate="fast"
                        showsHorizontalScrollIndicator={false}
                        renderItem={(item) => {
                            
                            return (
                                <ProductSliderItem
                                    item={item.item}
                                    onPress={() => productDetail(item.item)}
                                />
                            );
                        }}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: { x: scrollXProducts },
                                    },
                                },
                            ],
                            {
                                listener: (event) => console.log(event),
                                useNativeDriver: true,
                            },
                        )}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    dot: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Product;
