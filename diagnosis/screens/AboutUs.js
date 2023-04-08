import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import WebView from 'react-native-webview';

const AboutUs = () => {
    return (
        <View style={{flex: 1}}>
            <WebView 
            javaScriptEnabled={true}
            source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/AboutUs.php'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainScroller: {
        flex: 1,
        alignItems: "center",
        padding: 25,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#BFAA8C",
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "red",
    },
    textContainer: {
        backgroundColor: "white",
        marginLeft: 3,
        marginRight: 3,
        padding: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
        //transform: [{ scaleX: .8 }, { scaleY: .8 }] 
    },
    carousel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25
    }

});

export default AboutUs;