import { Button, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Modal from "react-native-modal";
import React, { useState } from "react";

export default function Topics({navigation}){

    /* use state helper functions */
    const [isModalCardio, setCardio] = useState(false);
    const toggleModalCardio = () => {
        setCardio(!isModalCardio);
    };

    const [isModalEndo, setEndo] = useState(false);
    const toggleModalEndo = () => {
        setEndo(!isModalEndo);
    };

    const [isModalGastro, setGastro] = useState(false);
    const toggleModalGastro = () => {
        setGastro(!isModalGastro);
    };

    const [isModalID, setID] = useState(false);
    const toggleModalID = () => {
        setID(!isModalID);
    };

    const [isModalNeuro, setNeuro] = useState(false);
    const toggleModalNeuro = () => {
        setNeuro(!isModalNeuro);
    };

    const [isModalNephro, setNephro] = useState(false);
    const toggleModalNephro = () => {
        setNephro(!isModalNephro);
    };

    const [isModalNails, setNails] = useState(false);
    const toggleModalNails = () => {
        setNails(!isModalNails);
    };

    const [isModalRheu, setRheu] = useState(false);
    const toggleModalRheu = () => {
        setRheu(!isModalRheu);
    };

    const [isModalHO, setHO] = useState(false);
    const toggleModalHO = () => {
        setHO(!isModalHO);
    };

    const [isModalHC, setHC] = useState(false);
    const toggleModalHC = () => {
        setHC(!isModalHC);
    };

    const [isModalPulm, setPulm] = useState(false);
    const toggleModalPulm = () => {
        setPulm(!isModalPulm);
    };

    const [isModalMisc, setMisc] = useState(false);
    const toggleModalMisc = () => {
        setMisc(!isModalMisc);
    };

    /* nagivation helper functions */
    const navigateCardioT = () => {
        setCardio(!isModalCardio);
        navigation.navigate("Cardiology_Tutorial");
    }   

    const navigateCardioMM = () => {
        setCardio(!isModalCardio);
        navigation.navigate("Cardiology_MM");
    } 

    const navigateEndoT = () => {
        setEndo(!isModalEndo);
        navigation.navigate("Endocrinology_Tutorial");
    }   

    const navigateEndoMM = () => {
        setEndo(!isModalEndo);
        navigation.navigate("Endocrinology_MM");
    } 

    const navigateGastroT = () => {
        setGastro(!isModalGastro);
        navigation.navigate("Gastro_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateIDT = () => {
        setID(!isModalID);
        navigation.navigate("ID_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateNeuroT = () => {
        setNeuro(!isModalNeuro);
        navigation.navigate("Neurology_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateNephroT = () => {
        setNephro(!isModalNephro);
        navigation.navigate("Nephrology_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateNailsT = () => {
        setNails(!isModalNails);
        navigation.navigate("Nails_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateRheumatologyT = () => {
        setRheu(!isModalRheu);
        navigation.navigate("Rheumatology_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 


    const navigateHOT = () => {
        setHO(!isModalHO);
        navigation.navigate("HO_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateHCT = () => {
        setHC(!isModalHC);
        navigation.navigate("HC_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigatePulmoT = () => {
        setPulm(!isModalPulm);
        navigation.navigate("Pulmonolgy_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 

    const navigateMiscT = () => {
        setMisc(!isModalMisc);
        navigation.navigate("Misc_Tutorial");
    }   

    // const navigateEndoMM = () => {
    //     setEndo(!isModalEndo);
    //     navigation.navigate("Endocrinology_MM");
    // } 



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
    
                    <TouchableOpacity style={styles.button} onPress={toggleModalEndo}>
                        <Text style={styles.buttonText}>Endocrinology</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalEndo} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Endocrinology: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateEndoT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton} onPress={navigateEndoMM}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalEndo}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>



                    <TouchableOpacity style={styles.button} onPress={toggleModalGastro}>
                        <Text style={styles.buttonText}>Gastroenterology</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalGastro} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Gastroenterology: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateGastroT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalGastro}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>




                    <TouchableOpacity style={styles.button} onPress={toggleModalID}>
                        <Text style={styles.buttonText}>Infectious Disease</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalID} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Infectious Disease: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateIDT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalID}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>




                    <TouchableOpacity style={styles.button} onPress={toggleModalNeuro}>
                        <Text style={styles.buttonText}>Neurology</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalNeuro} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Neurology: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateNeuroT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalNeuro}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>





                    <TouchableOpacity style={styles.button} onPress={toggleModalNephro}>
                        <Text style={styles.buttonText}>Nephrology</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalNephro} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Nephrology: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateNephroT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalNephro}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>




                    <TouchableOpacity style={styles.button} onPress={toggleModalNails}>
                        <Text style={styles.buttonText}>Nails</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalNails} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Nails: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateNailsT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalNails}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>



                    <TouchableOpacity style={styles.button} onPress={toggleModalRheu}>
                        <Text style={styles.buttonText}>Rheumatology</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalRheu} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Rheumatology: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateRheumatologyT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalRheu}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>




                    <TouchableOpacity style={styles.button} onPress={toggleModalHO}>
                        <Text style={styles.buttonText}>Hematolgy-Oncology</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalHO} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicBig}> Hematolgy-Oncology: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateHOT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalHO}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>




    
                    <TouchableOpacity style={styles.button} onPress={toggleModalHC}>
                        <Text style={styles.buttonText}>Heridatary Conditions</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalHC} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicBig}> Heridatary Conditions: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateHCT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalHC}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>
    


                    <TouchableOpacity style={styles.button} onPress={toggleModalPulm}>
                        <Text style={styles.buttonText}>Pulmonolgy</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalPulm} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Pulmonolgy: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigatePulmoT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalPulm}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>


    
                    <TouchableOpacity style={styles.button} onPress={toggleModalMisc}>
                        <Text style={styles.buttonText}>Miscllaneous</Text>
                    </TouchableOpacity>

                    <Modal isVisible={isModalMisc} animationIn={'slideInUp'} style={styles.modal}>
                        <View style={styles.popView}>
                            <Text style={styles.popTopicStyle}> Miscllaneous: </Text>

                            <TouchableOpacity style={styles.popButton} onPress={navigateMiscT}>
                                <Text style={styles.buttonText}>Tutorial</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.popButton}>
                                <Text style={styles.buttonText}>Multimedia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity styles={styles.popButton} onPress={toggleModalMisc}>
                                <Text style={styles.backStyle}>Go Back</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </Modal>
    
    
                    <Text style={styles.filler}>
                        a;lakjdsfkl;asj
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
        fontFamily: "Gill Sans",
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
        borderRadius: 100,
        paddingVertical: 10,
        marginTop: 20,
        left: "13%"

    },
    title: {
        textAlign: "center",
        fontSize: 60,
        color: "red",
        backgroundColor: "white",
    },
    filler: {
        color: "#BFAA8C",
        fontSize: 50
    }
});

//export default Topics;
