import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/login/Login';
import Home from '../../screens/login/Home';
import ProductDetails from '../../screens/ProductDetails';
import Product from '../../screens/Product'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

const Stack = createStackNavigator();

const HomeStack = () => {

  useEffect(()=>{

    GoogleSignin.configure({
      offlineAccess: true,
      webClientId: '1092718595504-tf0govaag0mpl448m9eme5uveo5e1kvb.apps.googleusercontent.com',
      androidClientID : '501342393854-4eeu02ppjgtp8j13hd3tms4mgqa1k0pi.apps.googleusercontent.com',
    });

  },[]);


  return (
    <Stack.Navigator
      initialRouteName="Login"
      >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{header: () => null}}
      />
      
    </Stack.Navigator>
  );
};

export default HomeStack;
