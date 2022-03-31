import React from 'react';
//react navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens import
import MainMenu from '../screens/MainMenu';
import KnowledgeTest from './../screens/KnowledgeTest';
import AboutUs from './../screens/AboutUs';
import Community from '../screens/Community';
import TeamInfo from './../screens/TeamInfo';
import HO_MM from '../screens/topics-screens/HO_MM';
import HC_MM from '../screens/topics-screens/HC_MM';
import MultiMedia from './../screens/Multimedia';
import Lectures from './../screens/Lectures';
import Topics from './../screens/Topics';
import Pulmonolgy_MM from '../screens/topics-screens/Pulmonology_MM';
import Lecture_JVP from './../screens/Lecture_JVP';
import Lecture_DR from './../screens/Lecture_DR';
import Rheumatology_MM from '../screens/topics-screens/Rheumatology_MM';
import Nails_MM from '../screens/topics-screens/Nails_MM';
import Lecture_VHD from './../screens/Lecture_VHD';
import Cardiology_Tutorial from './../screens/topics-screens/Cardiology_Tutorial';
import Cardiology_MM from './../screens/topics-screens/Cardiology_MM';
import Endocrinology_Tutorial from './../screens/topics-screens/Endocrinology_Tutorial';
import Endocrinology_MM from './../screens/topics-screens/Endocrinology_MM';
import Nephrology_MM from './../screens/topics-screens/Nephrology_MM';
import ID_Tutorial from '../screens/topics-screens/ID_Tutorial';
import Neurology_Tutorial from '../screens/topics-screens/Neurology_Tutorial';
import Gastro_Tutorial from './../screens/topics-screens/Gastro_Tutorial';
import Nephrology_Tutorial from '../screens/topics-screens/Nephrology_Tutorial';
import Nails_Tutorial from '../screens/topics-screens/Nails_Tutorial';
import Rheumatology_Tutorial from '../screens/topics-screens/Rheumatology_Tutorial';
import Gastro_MM from './../screens/topics-screens/Gastro_MM';
import HC_Tutorial from '../screens/topics-screens/HC_Tutorial';
import Misc_MM from '../screens/topics-screens/Misc_MM';
import HO_Tutorial from '../screens/topics-screens/HO_Tutorial';
import Pulmonolgy_Tutorial from '../screens/topics-screens/Pulmonolgy';
import Misc_Tutorial from '../screens/topics-screens/Misc_Tutorial';
import Books from './../screens/Lectures';
import ID_MM from './../screens/topics-screens/ID_MM';
import Neurology_MM from './../screens/topics-screens/Neurology_MM';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
        <Stack.Navigator
            screenOptions={{
                headerStyled: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: "#000000", 
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
          <Stack.Screen name="MultiMedia" component={MultiMedia}/>
          <Stack.Screen name="Lectures" component={Lectures}/>
          <Stack.Screen name="Lecture_JVP" component={Lecture_JVP}/>
          <Stack.Screen name="Lecture_VHD" component={Lecture_VHD}/>
          <Stack.Screen name="Lecture_DR" component={Lecture_DR}/>
          <Stack.Screen name="Cardiology_Tutorial" component={Cardiology_Tutorial}/>
          <Stack.Screen name="Cardiology_MM" component={Cardiology_MM}/>
          <Stack.Screen name="Endocrinology_Tutorial" component={Endocrinology_Tutorial}/>
          <Stack.Screen name="Endocrinology_MM" component={Endocrinology_MM}/>
          <Stack.Screen name="Gastro_Tutorial" component={Gastro_Tutorial}/>
          <Stack.Screen name="Gastro_MM" component={Gastro_MM}/>
          <Stack.Screen name="Neurology_Tutorial" component={Neurology_Tutorial}/>
          <Stack.Screen name="Neurology_MM" component={Neurology_MM}/>
          <Stack.Screen name="Nails_Tutorial" component={Nails_Tutorial}/>
          <Stack.Screen name="Nails_MM" component={Nails_MM}/>
          <Stack.Screen name="Nephrology_Tutorial" component={Nephrology_Tutorial}/>
          <Stack.Screen name="Nephrology_MM" component={Nephrology_MM}/>
          <Stack.Screen name="HO_Tutorial" component={HO_Tutorial}/>
          <Stack.Screen name="HO_MM" component={HO_MM}/>
          <Stack.Screen name="HC_Tutorial" component={HC_Tutorial}/>
          <Stack.Screen name="HC_MM" component={HC_MM}/>
          <Stack.Screen name="ID_Tutorial" component={ID_Tutorial}/>
          <Stack.Screen name="Pulmonolgy_MM" component={Pulmonolgy_MM}/>
          <Stack.Screen name="ID_MM" component={ID_MM}/>
          <Stack.Screen name="Rheumatology_Tutorial" component={Rheumatology_Tutorial}/>
          <Stack.Screen name="Rheumatology_MM" component={Rheumatology_MM}/>
          <Stack.Screen name="Misc_MM" component={Misc_MM}/>
          <Stack.Screen name="Topics" component={Topics}/>
          <Stack.Screen name="Misc_Tutorial" component={Misc_Tutorial}/>
          <Stack.Screen name="Pulmonolgy_Tutorial" component={Pulmonolgy_Tutorial}/>
          <Stack.Screen name="Books" component={Books}/>
          
        </Stack.Navigator>
      
  );
}

export default StackNavigator;