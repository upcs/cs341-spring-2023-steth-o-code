import React from 'react';
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity, ScrollView} from 'react-native';

const Lectures = ({navigation}) => (
      
        <View style={styles.mainContainer}>
            <Text style={styles.headerTxt}>Available Lectures:</Text>
            <ScrollView style={styles.innerContainer} contentContainerStyle={{left: '13%', flex: 1}}>
                <View style={styles.quickLinksView}>
                    <TouchableOpacity style={styles.JVPButton1} onPress={() => navigation.navigate("Lecture_JVP")}> 
                        <Text style={styles.buttonText}>The Art and Science of the Jugular Venous Pulse</Text>    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.JVPButton2} onPress={() => navigation.navigate("Lecture_VHD")}> 
                        <Text style={styles.buttonText}>Valvular Heart Disease Lecture</Text>    
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.JVPButton3} onPress={() => navigation.navigate("Lecture_DR")}> 
                        <Text style={styles.buttonText}>Diagnostic Reasoning Lecture</Text>    
                    </TouchableOpacity>
                </View>
            </ScrollView>
                
           
            
        </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#BFAA8C",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }, 
    innerContainer: {
        backgroundColor: 'white',
        borderRadius: 80,
        top: '9%',
        width: '95%',
        left: 10,
        marginBottom: 100,
        flex: 1
    },
    headerTxt :{
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        top: '5%',
        left: '25%',
    },
    JVPButton1: {
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        top: '20%'
    },

    JVPButton2: {
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        top: '25%'
    },

    JVPButton3: {
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        top: '30%'
    },

    buttonText: {
        padding: 10,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
    },
});

export default Lectures;