import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import Button from '../../component/button/Button'
import { windowWidth, windowHeight } from '../../resource/Dimensions'
import InputText from '../../component/inputText/InputText'
//import axios from 'axios'

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 12,
  },
  subTitleError: {
    fontSize: 12,
    color: 'red',
  },
  view: {
    marginVertical: 10,
    alignItems: 'center'
  },
  create: {
    flexDirection: 'row',
    marginVertical: 5
  },
  link: {
    color: '#945eba',
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
});

const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState();
  const [clave, setClave] = useState();


  return (
    <View style={styles.container}>
      <Image
        style={{ width: windowWidth / 3, height: windowHeight / 6 }}
        source={require('../../resource/static/images/realPlaza.jpg')}
      />
      <View style={styles.view}>
        <Text style={styles.title}>Bienvenidos</Text>
        <Text style={styles.subTitle}>Ingrese para continuar</Text>
      </View>
      <View style={styles.view}>
        <InputText
          label={'USUARIO'}
          windowWidth={(windowWidth / 1.5)}
          windowHeight={(windowHeight / 13)}
          numberOfLines={10}
          numberOfLines={1}
          onChangeText={(e) => { setUsuario(e) }}></InputText>
      </View>
      <View style={styles.view}>
        <InputText
          label={'CONTRASEÑA'}
          windowWidth={(windowWidth / 1.5)}
          windowHeight={(windowHeight / 13)}
          numberOfLines={10}
          secureTextEntry={true}
          numberOfLines={1}
          onChangeText={(e) => { setClave(e) }}></InputText>
      </View>
      <View style={styles.view}>
        <Text style={styles.link}>Recuperar contraseña</Text>
      </View>
      <View style={styles.view}>
        <Button label={'LOGIN'} windowWidth={windowWidth / 1.5} windowHeight={windowHeight / 16} ></Button>
      </View>
      <View style={styles.create}>
        <Text style={styles.subTitle}>¿No tiene cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.link}>crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;