import React from 'react';

import {Colors} from './../components/styles';
const {background} = Colors;
//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens import
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import MainMenu from './../screens/MainMenu';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: "#FFFFFF", 
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default StackNavigator;