import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { StyledContainer } from '../components/styles';
import DropDownPicker from 'react-native-dropdown-picker';
import Slideshow from 'react-native-image-slider-show';

const MainMenu = () => (
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>   
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
            </View>

            <View style={styles.slideShow}>
            <Slideshow 
                dataSource={[
                    { url: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/D5AD228F-A6D4-4F00-A69F-3D62F63909F3.jpeg?w=1280&ssl=1'},
                    { url:'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/cropped-logo_new-1.png?w=1112&ssl=1' },
                    { url:'http://placeimg.com/640/480/any' }
                ]}/>
            </View>
            <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')}></Image>
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
        width: 600
    },

    slideShow: {
        resizeMode: "center",
        position: "relative",
        width: 375,
        top: -106,
    }
});
    
export default MainMenu; // send it off



