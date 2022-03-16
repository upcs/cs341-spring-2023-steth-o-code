import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import MainMenu from '../screens/MainMenu';
import KnowledgeTest from '../screens/KnowledgeTest';
import TeamInfo from '../screens/TeamInfo';
import Topics from '../screens/Topics';
import Donate from '../screens/Donate';
import Activities from '../screens/Activities';
import Lectures from '../screens/Lectures';
import Books from '../screens/Books';

import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Main Menu" component={MainMenu}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name='home-outline' size={22} color={color} />
          )
        }} />
      <Drawer.Screen name="Topics" component={Topics}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name='book-outline' size={22} color={color} />
          )
        }} />
      <Drawer.Screen name="Lectures" component={Lectures}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name='play-outline' size={22} color={color} />
          )
        }} />
      <Drawer.Screen name="Activities" component={Activities}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name='pencil-outline' size={22} color={color} />
          )
        }} />
      <Drawer.Screen name="Meet The Team" component={TeamInfo}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <AntDesign name="team" size={22} color="black" />
          )
        }} />
      <Drawer.Screen name="Donate" component={Donate}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome5 name="donate" size={22} color="black" />
          )
        }} />
      <Drawer.Screen name="Quiz Yourself" component={KnowledgeTest}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <AntDesign name="question" size={24} color="black" />
          )
        }} />
        <Drawer.Screen name="Important Books" component={Books}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Ionicons name='book-outline' size={22} color={color} />
          )
        }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;