import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';

const KnowledgeTest = () => (
    // <View style={styles.mainContainer}>
    //     {/* <Text style={styles.text}> KnowledgeTest Page</Text> */}
    //     <WebView uri={'https://up.physicaldiagnosispdx.com/up/app-content/database_connect_jgn.php'}></WebView>
    // </View>
    
    <WebView 
    javaScriptEnabled={true}
    source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/database_connect.php'}}
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