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
  
  
  <ScrollView contentContainerStyle={styles.StyledContainer}>
  
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
      top: 10,
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

  accountIcon: {
      position: "absolute",
      resizeMode: "contain",
      width: 50,
      height: 50,
      right: 15,
      top: 40
  },
    StyledContainer: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      marginTop: 300,
      width: Dimensions.get('window').width - 50
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
      marginTop: 2
    },
    Text: {
        position: "absolute",
        color: "#E63610",
        fontSize: 60,
        top: 120,
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Gill Sans",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
        alignContent: 'center'
    },
    buttons: {
      marginTop: 15,
      alignItems: 'center',
      marginLeft: 50,
      width: '75%',
      paddingVertical: 10,
      backgroundColor: 'red',
      borderRadius: 30,
    },
    buttonView: {
      top: 70,
      backgroundColor: "white",
      justifyContent: 'center',
      position: "relative",
      marginTop: 20,
      height: 370,
      marginBottom: 0,
      width: '96%',
      borderRadius: 60,
      borderColor: 'red',
      alignContent: 'center'
    },
    buttonsText: {
      fontSize: 25,
      fontFamily: "Gill Sans",
      fontWeight: "bold",
      color: "black"
    }
  });
  
  export default Topics;