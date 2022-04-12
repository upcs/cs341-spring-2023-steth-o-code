import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const Activities = () => (
    <WebView 
    javaScriptEnabled={true}
    source={{uri: 'https://physicaldiagnosispdx.com/message-board-2/'}}
    />
);

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
    },

});

export default Activities;