import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/login/Login';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
