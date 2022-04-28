import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const KnowledgeTest = () => (
    <WebView 
    javaScriptEnabled={true}
    source={{uri: 'https://physicaldiagnosispdx.com/test-knowledge/'}}
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
    view: {
        resizeMode: 'stretch',
        top: 40,
        marginTop: -370,
        marginBottom: -400
    }
});

export default KnowledgeTest;