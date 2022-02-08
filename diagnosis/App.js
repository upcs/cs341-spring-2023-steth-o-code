<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Topics from "./topics";
=======
import React from 'react';
import StackNavigator from './navigators/StackNavigator';
>>>>>>> 79ee7fe87dc083351fae35863aa609c518bf1597

export default function App() {
  return <StackNavigator />;
}
<<<<<<< HEAD

const AppNavigator = createStackNavigator({
  Topics: { screen: Topics},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
>>>>>>> 79ee7fe87dc083351fae35863aa609c518bf1597
