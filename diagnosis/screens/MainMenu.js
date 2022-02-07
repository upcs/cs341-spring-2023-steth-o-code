import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { StyledContainer } from '../components/styles';
import DropdownMenu from 'react-native-dropdown-picker';
import Slideshow from 'react-native-image-slider-show';

var time = new Date().getHours();

const MainMenu = () => (
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>   
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
            </View>
            
            <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1.5}></Image>
            <Text style={styles.welcomeText}>Good Morning, {"\n"}
                Guest
            </Text>
        </View>
);

// style sheet to keep the enhancements clean and readable
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },

    headerContainer: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: 0,
        height: 100,
        justifyContent: "center",
        alignContent: "center",
        width: 375,
    },

    PDXLogo: {
        resizeMode: "contain",
        width: 200,
        top: 15,
        left: 90,
        flex: 1,
    },

    accountIcon: {
        position: "absolute",
        resizeMode: "contain",
        width: 50,
        height: 50,
        right: 15,
        top: 35
    },

    stethoscopeImage: {
        resizeMode: "contain",
        position: "absolute",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        top: 38
    },

    slideShow: {
        // resizeMode: "center",
        // position: "relative",
        // width: 375,
        // top: -106,
    },

    welcomeText: {
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
        
    }
});
    
export default MainMenu; // send it off



