import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Topics</Text>
         <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>View Topics</Text>
        </Pressable>
      </View>
    );
  }
  function Cardiology({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>Cardiology</Text>
        <Pressable
          onPress={() => navigation.navigate('Topics')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Tutorials</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>View Topics</Text>
        </Pressable>
      </View>
    );
  }
  const Drawer = createDrawerNavigator();

  function Topics() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name = "Cardiology" component={Topics} />
          <Drawer.Screen name = "Endocrinology" component={Topics} />
          <Drawer.Screen name = "Nails" component={Topics} />
          <Drawer.Screen name = "Neurology" component={Topics} />
          <Drawer.Screen name = "Rheumatology" component={Topics} />
          <Drawer.Screen name = "Pulmonology" component={Topics} />
          <Drawer.Screen name = "Gastroenterology" component={Topics} />
          <Drawer.Screen name = "Miscellaneous" component={Topics} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  export default Topics;
