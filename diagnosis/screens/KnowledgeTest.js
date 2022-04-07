import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const KnowledgeTest = () => (
    <WebView 
    javaScriptEnabled={true}
    source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/KnowledgeTest.php'}}
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

export default KnowledgeTest;