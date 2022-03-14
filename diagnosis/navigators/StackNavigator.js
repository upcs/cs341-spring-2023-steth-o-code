import React from 'react';
//react navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens import
import MainMenu from '../screens/MainMenu';
import KnowledgeTest from './../screens/KnowledgeTest';
import AboutUs from './../screens/AboutUs';
import Community from '../screens/Community';
import TeamInfo from './../screens/TeamInfo';
import TOTD from '../screens/TopicOfTheDay';
import MultiMedia from '../screens/Multimedia';
import { Swipeable } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
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
                },
                gestureEnabled: false
            }}
        >
          <Stack.Screen name="MainMenu" component={MainMenu}/>
          <Stack.Screen name="KnowledgeTest" component={KnowledgeTest}/>
          <Stack.Screen name="AboutUs" component={AboutUs}/>
          <Stack.Screen name="Community" component={Community}/>
          <Stack.Screen name="TeamInfo" component={TeamInfo}/>
          <Stack.Screen name="TOTD" component={TOTD}/>
        </Stack.Navigator>
      
  );
}

export default StackNavigator;