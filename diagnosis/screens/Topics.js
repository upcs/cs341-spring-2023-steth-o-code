import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, StyledContainer, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Topics = ({navigation}) => (
  <View style={styles.mainContainer}> 
  <View style={styles.headerContainer}>
  <View>
  <Ionicons style={styles.MainMenu} name='menu' size={35}/>
  </View>
  <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
  <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
  <Text style={styles.Text}>Topics</Text>
  </View>
  
  
  <ScrollView contentContainerStyle={styles.scrollView}>
  
  <View style={styles.buttonView}>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Cardiology</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Endocrinology</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Nails</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Neurology</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Rheumatology</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Pulmonology</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Gastroenterology</Text>    
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("DefaultTopic")}> 
  <Text style={styles.buttonsText}>Miscellaneous</Text>    
  </TouchableOpacity>
  </View>
  </ScrollView>
  </View>
  );
  
  const styles = StyleSheet.create({
    mainContainer: {
      position: "absolute",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#BFAA8C",
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    headerContainer: {
      backgroundColor: "#ffffff",
      position: "absolute",
      top: 0,
      height: 100,
      justifyContent: "center",
      alignContent: "center",
      width: '100%',
  },
  MainMenu:{
    flex: 1,
    position:"absolute",
      top: 25,
      left: 20
  },
  PDXLogo: {
      position:"absolute",
      resizeMode: "contain",
      width: 200,
      top: -60,
      left: 90,
      flex: 1,
  },

});

export default Topics;
