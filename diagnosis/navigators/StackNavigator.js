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
import KnowledgeTest from './../screens/KnowledgeTest';
import AboutUs from './../screens/AboutUs';
import Community from './../screens/Community';
import TeamInfo from './../screens/TeamInfo';
import TOTD from './../screens/TopicOfTheDay';

import { ScreenStackHeaderLeftView } from 'react-native-screens';

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
          <Stack.Screen name="KnowledgeTest" component={KnowledgeTest}/>
          <Stack.Screen name="AboutUs" component={AboutUs}/>
          <Stack.Screen name="Community" component={Community}/>
          <Stack.Screen name="TeamInfo" component={TeamInfo}/>
          <Stack.Screen name="TOTD" component={TOTD}/>

          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default StackNavigator;