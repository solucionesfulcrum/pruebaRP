import React, { useState, useEffect, useContext, createContext } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import Button from '../../component/button/Button'
import { windowWidth, windowHeight } from '../../resource/Dimensions'
import InputText from '../../component/inputText/InputText'
import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../component/navigation/AuthProvider';
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

  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const loginGoogle = async () => {
    navigation.navigate("Home")
    /*try {
      await GoogleSignin.hasPlayServices();
      console.log("holisss0")
      const userinfo = await GoogleSignin.signIn();
      setloggedIn(true);
      setUser(userinfo);
      console.log(userinfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log("aquii?",error)
      }
    }*/
  };

  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (user) setloggedIn(true);
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '1092718595504-tf0govaag0mpl448m9eme5uveo5e1kvb.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

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
        <Button label={'LOGIN'} windowWidth={windowWidth / 1.5} windowHeight={windowHeight / 16} onPress={loginGoogle}></Button>
      </View>
      <View style={styles.create}>
      {!loggedIn && (
        <Text style={styles.subTitle}>¿No tiene cuenta?</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.link}>crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;