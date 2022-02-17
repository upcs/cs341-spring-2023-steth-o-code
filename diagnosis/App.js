import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

//warning catchers
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "Overwriting fontFamily style attribute preprocessor"
]);


//screens import
import StackNavigator from './navigators/StackNavigator';

export default function App() {
  return <StackNavigator />;
}