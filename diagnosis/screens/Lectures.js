import React from 'react';
import { Text, View, StyleSheet, Button, Dimensions, TouchableOpacity} from 'react-native';

const Lectures = ({navigation}) => (
      
        <View style={styles.mainContainer}>
            
            <View style={styles.innerContainer}>
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
            </View>
                
           
            
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
        height: '50%',
        width: '100%',
        top: '10%',
        borderRadius: 120,
        left: 10,
        right: 10
    },
    JVPButton1: {
        position: 'absolute',
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        top: 175,
        left: 55
    },

    JVPButton2: {
        position: 'absolute',
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        top: 300,
        left: 55
    },

    JVPButton3: {
        position: 'absolute',
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
        top: 425,
        left: 55
    },

    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
    },
});

export default Lectures;