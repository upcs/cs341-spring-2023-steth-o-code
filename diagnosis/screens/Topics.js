import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Modal from "react-native-modal";

export default function Topics({navigation}){
    //Cardiology, Endocrinology, Gastroenterology, Infectious Disease, Neurology, Nephrology, 
    //Nails, Rheumatology, Hematolgy-Oncology, Hereditary Conditions, Pulmonolgy, Misc.

    /* use state helper functions */
    const [isModalCardio, setCardio] = useState(false);
    const toggleModalCardio = () => {
        setCardio(!isModalCardio);
    };

    /* nagivation helper functions */
    const navigateCardioT = () => {
        navigation.navigate("Cardiology_Tutorial");
        setCardio(!isModalCardio);
    }   

    const navigateCardioMM = () => {
        navigation.navigate("Cardiology_MM");
        setCardio(!isModalCardio);
    } 

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>
                    Topics
                </Text>
    
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleModalCardio}>
                        <Text style={styles.buttonText}>Cardiology</Text>
                    </TouchableOpacity>
    
                    <Modal isVisible={isModalCardio} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Cardiology: </Text>
                            <TouchableOpacity style={styles.popButton} onPress={navigateCardioT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.popButton} onPress={navigateCardioMM}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalCardio}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>
    
                    <Text style={styles.filler}>
                        Trans Rights!
                    </Text>
                </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#BFAA8C",
    },
    buttonContainer: {
        width: "80%"
    },
    test: {
        fontSize: 300
    },
    backStyle: {
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 100,
        margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        top: 30,
        color: 'white'
    },
    modal: {
        alignItems: 'center', 
        top: 400
    },
    popTopicStyle: {
        color: 'black',
        fontSize: 30,
        top: 20,
        fontWeight: 'bold'
    },
    popView: {
        backgroundColor: 'white',
        borderRadius: 40,
        height: 300,
        width: 300,
        bottom: 370,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    popButton: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 100,
        margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 40,
        top: 30,
        left: 5
    },
    popTopicBig: {
        color: 'black',
        fontSize: 25,
        top: 20,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 40,
        paddingVertical: 13,
        marginTop: 20,
        left: "14%"

    },
    title: {
        textAlign: "center",
        fontSize: 60,
        color: "red",
        fontWeight: 'bold',
        backgroundColor: "white",
        textShadowColor:'grey',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius: 15,
    },
    filler: {
        color: "#BFAA8C",
        fontSize: 50
    }
});

//export default Topics;
