import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Topics = ({navigation}) => (
    
    <ScrollView contentContainerStyle={styles.StyledContainer}>
    <Text style={styles.Text}>Topics</Text>
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
    );
  
  const styles = StyleSheet.create({
    StyledContainer: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#BFAA8C",
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    Text: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      marginBottom: 10,
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
      height: 600,
      marginBottom: 50,
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