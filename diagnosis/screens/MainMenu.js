import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, useWindowDimensions} from 'react-native';
import { ExtraText } from '../components/SignUpLoginStyles';
import {Ionicons} from '@expo/vector-icons';
import { IconButton, Colors } from 'react-native-paper';

const MainMenu = ({navigation}) => (

    
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>
                <View>
                    <Ionicons style={styles.MainMenu} name='menu' size={35}/>
                </View>
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>    
            </View>

            <View style={styles.imageView}>
                <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1}></Image>
                <Text style={styles.welcomeText}>Good Morning, {"\n"}
                    User
                </Text>
            </View>

            <View style={styles.centerView}>
                <View style={styles.middleLineLeft}></View>
                <ExtraText style={styles.PDXCenterText}>PDX</ExtraText>
                <View style={styles.middleLineRight}></View>
            </View>
            
           
            <View style={styles.quickLinksView}>
                <TouchableOpacity testID='buttonOne' style={styles.quickLinkButtons} onPress={() => navigation.navigate("KnowledgeTest")}> 
                    <Text style={styles.buttonText}>Knowledge Test</Text>    
                </TouchableOpacity>

                <TouchableOpacity testID='buttonTwo' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Lecture")}> 
                    <Text style={styles.buttonText}>Lectures</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonThree' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Community")}> 
                    <Text style={styles.buttonText}>Community</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonFour' style={styles.quickLinkButtons} onPress={() => navigation.navigate("TeamInfo")}> 
                    <Text style={styles.buttonText}>Our Team</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonFive' style={styles.quickLinkButtons} onPress={() => navigation.navigate("AboutUs")}> 
                    <Text style={styles.buttonText}>About Us</Text>
                    
                </TouchableOpacity>
                </View>
        
        </View>
);

// style sheet to keep the enhancements clean and readable
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
        height: Dimensions.get('window').height/8,
        justifyContent: "center",
        width: Dimensions.get('window').width,
    },
    MainMenu:{
        top: 10,
        left: 20
    },
    PDXLogo: {
        position:"absolute",
        resizeMode: "contain",
        position: 'absolute',
        width: 200,
        left: 87,
        top: -60
    },

    accountIcon: {
        position: "absolute",
        resizeMode: "contain",
        width: 50,
        height: 50,
        right: 15,
        top: 40
    },

    stethoscopeImage: {
        resizeMode: "stretch",
        position: "relative",
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    imageView: {
        position: 'absolute',
        height: 250,
        top: 100,
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
    },

    welcomeText: {
        position: "absolute",
        color: "#E63610",
        fontSize: 60,
        top: 20,
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Gill Sans",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
        left: 55
    },
    
    quickLinksView: {
        backgroundColor: "white",
        position: "absolute",
        top: 440,
        width: '96%',
        borderRadius: 60,
        borderColor: 'red',
        padding: 10,
        alignItems: 'center'
    },

    magGlassImg: {
        resizeMode: "contain",
        width: '15%',
        position: 'relative'
    },

    quickLinkButtons: {
        margin: 10,
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
    },

    centerView: {
        top: 350,
        position: "absolute",
        //backgroundColor: 'red',
        height: 80,
        width: Dimensions.get('window').width
    },
    
    middleLineLeft: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        left: 20,
        top: 42
      
    },

    PDXCenterText: {
        position: 'absolute',
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        fontWeight: 'bold',
        top: 17,
        left: 140
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: 20,
        top: 42
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Gill Sans",
        fontWeight: "bold",
        color: "black"
    }
});
    
export default MainMenu; // send it off



