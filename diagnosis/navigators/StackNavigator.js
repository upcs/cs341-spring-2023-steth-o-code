import React from 'react';
//react navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens import
import MainMenu from '../screens/MainMenu';
import KnowledgeTest from './../screens/KnowledgeTest';
import AboutUs from './../screens/AboutUs';
import Community from '../screens/Community';
import TeamInfo from './../screens/TeamInfo';
import TOTD from './../screens/TopicOfTheDay';
import MultiMedia from './../screens/Multimedia';
import Lectures from './../screens/Lectures';
import Lecture_JVP from './../screens/Lecture_JVP';
import Lecture_DR from './../screens/Lecture_DR';
import Lecture_VHD from './../screens/Lecture_VHD';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
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
          <Stack.Screen name="MultiMedia" component={MultiMedia}/>
          <Stack.Screen name="Lectures" component={Lectures}/>
          <Stack.Screen name="Lecture_JVP" component={Lecture_JVP}/>
          <Stack.Screen name="Lecture_VHD" component={Lecture_VHD}/>
          <Stack.Screen name="Lecture_DR" component={Lecture_DR}/>
  

          
        </Stack.Navigator>
      
  );
}

export default StackNavigator;