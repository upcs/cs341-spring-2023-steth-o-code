import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import KnowledgeTest from '../screens/KnowledgeTest';
import TeamInfo from '../screens/TeamInfo';
import Topics from '../screens/Topics';
import Donate from '../screens/Donate';
import Activities from '../screens/Activities';
import Lectures from '../screens/Lectures';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Multimedia from '../screens/Multimedia';


import StackNavigator from './StackNavigator';

import CustomDrawer from '../components/CustomDrawer';
import { DrawerActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name='Login' component={Login}
          options={{
            headerShown: false,
            swipeEnabled: false,
            drawerItemStyle: { height: 0 }
          }} />
        <Drawer.Screen name="Main Menu" component={StackNavigator}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity >
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <Ionicons name='home-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Topics" component={Topics}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },

            drawerIcon: () => (
              <Ionicons name='book-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Lectures" component={Lectures}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <Ionicons name='play-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Activities" component={Activities}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <Ionicons name='pencil-outline' size={22} color={color} />
            )
          }} />
        <Drawer.Screen name="Meet The Team" component={TeamInfo}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <AntDesign name="team" size={22} color="black" />
            )
          }} />
        <Drawer.Screen name="Donate" component={Donate}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <FontAwesome5 name="donate" size={22} color="black" />
            )
          }} />
        <Drawer.Screen name="Quiz Yourself" component={KnowledgeTest}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#BFAA8C",
              height: 100,
            },
            drawerIcon: () => (
              <AntDesign name="question" size={24} color="black" />
            )
          }} />
        <Drawer.Screen name="MultiMedia" component={Multimedia} options={{
          headerShown: true,
          headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <TouchableOpacity >
              <Ionicons style={styles.menuIcon} name="menu" size={40} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons style={styles.AccIcon} name="person-circle-outline" size={40} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#BFAA8C",
            height: 100,
          },
          drawerIcon: () => (
            <Ionicons size={22} color={color} />
          )
        }} />

        <Drawer.Screen name="SignUp" component={Signup}
          options={{
            headerShown: false,
            swipeEnabled: false,
            drawerItemStyle: { height: 0 }
          }} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 60, top: 0 }}
      source={require('diagnosis/assets/simplePDXLogo.png')}
    />
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    top: 0,
    left: 15
  },
  AccIcon: {
    top: 0,
    right: 15
  }
});

export default DrawerNavigator;