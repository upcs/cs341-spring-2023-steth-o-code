import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

//warning catchers
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "Overwriting fontFamily style attribute preprocessor",
  "EventEmitter.removeListener"
]);

//screens import
import Topics from './screens/Topics';

export default function App() {
  return(
      <Topics/>
  );
}
