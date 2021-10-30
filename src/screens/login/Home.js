import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, FlatList, Image
} from 'react-native';
import CardGroup from '../../component/card/CardGroup'

import axios from 'axios';
import CardTienda from '../../component/card/CardTienda';

const Home = ({ navigation }) => {

  const [dataMall, setDataMall] = useState([])
  const [selectionMall, setSelectionMall] = useState("")
  const [dataTienda, setDataTienda] = useState([])

  //console.log(selectionMall) 
  useEffect(() => {
    axios.post('http://192.168.1.37:8000/api/token/', {
      "username": 'fulcrum',
      "password": '123456'
    })
      .then(
        (res) => {
          const auth = "Bearer " + res.data.access
          axios.get('http://192.168.1.37:8000/Mall/',
            {
              headers: { 'Authorization': auth, }
            }
          )
            .then(
              (res) => {
                //console.log(res.data)
                setDataMall(res.data)
              }
            )
            .catch(
              (res) => {
                //console.warn('Error:', res.response.status)
              }
            )
        }
      )
      .catch(
        (response) => {
          response === 404 ? console.warn('lo sientimos no tenemos servicios') : console.warn('Error:', response)
        }
      )
  }, [])

  useEffect(() => {
    axios.post('http://192.168.1.37:8000/api/token/', {
      "username": 'fulcrum',
      "password": '123456'
    })
      .then(
        (res) => {
          const auth = "Bearer " + res.data.access
          axios.get('http://192.168.1.37:8000/Tienda/?search=' + selectionMall,
            {
              headers: { 'Authorization': auth, }
            }
          )
            .then(
              (res) => {
                //console.log(res.data)
                setDataTienda(res.data)
              }
            )
            .catch(
              (res) => {
                //console.warn('Error:', res.response.status)
              }
            )
        }
      )
      .catch(
        (response) => {
          response === 404 ? console.warn('lo sientimos no tenemos servicios') : console.warn('Error:', response)
        }
      )
  }, [selectionMall])

  const productoData = (item) => {
    console.log("item", item)
    axios.post('http://192.168.1.37:8000/api/token/', {
      "username": 'fulcrum',
      "password": '123456'
    })
      .then(
        (res) => {
          const auth = "Bearer " + res.data.access
          axios.get('http://192.168.1.37:8000/Producto/?search=' + item.url.split("/")[4],
            {
              headers: { 'Authorization': auth, }
            }
          )
            .then(
              (res) => {
                console.log("producto", res.data)
                navigation.navigate("Product", res.data)
              }
            )
            .catch(
              (res) => {
                //console.warn('Error:', res.response.status)
              }
            )
        }
      )
      .catch(
        (response) => {
          response === 404 ? console.warn('lo sientimos no tenemos servicios') : console.warn('Error:', response)
        }
      )
  }

  return (
    <>
      <View style={styles.containerinit}>
        <Image
          source={require('../../resource/static/images/realPlaza.jpg')}
          style={styles.logo}>
        </Image>
      </View>
      <View style={styles.containerLista}>
        <FlatList
          data={dataMall}
          keyExtractor={(Data, index) => 'key' + index}
          scrollEnabled
          horizontal={true}
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          renderItem={(item, index) => {
            return (
              <>
                <CardGroup datos={item.item} onPress={() => (setSelectionMall(item.item.url.split("/")[4]))}></CardGroup>
              </>
            );
          }}
        />
      </View>
      <View style={styles.containerTienda}>
        <FlatList
          data={dataTienda}
          keyExtractor={(Data, index) => 'key' + index}
          scrollEnabled
          horizontal={false}
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          renderItem={(item, index) => {
            return (
              <>
                <CardTienda datos={item.item} onPress={() => (productoData(item.item))}/*imagenes={imagen} onPress={()=>{navigation.navigate('Detalle', item.item)}}*/></CardTienda>
              </>
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerinit: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerGroup: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: '#e1e9ef',
    justifyContent: 'center',
  },
  containerLista: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e9ef',
  },
  containerTienda: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e9ef',
  },
  containerEnd: {
    flex: 0.1,
  },
  logo: {
    width: 85,
    height: 85,
  },
});
export default Home;