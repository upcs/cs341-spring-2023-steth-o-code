import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
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