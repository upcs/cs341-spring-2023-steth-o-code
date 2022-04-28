import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import WebView from 'react-native-webview';

const Activities = () => (
    <View style={styles.mainContainer}>
        <WebView 
            javaScriptEnabled={true}
            source={{uri: 'https://physicaldiagnosispdx.com/message-board-2/'}}
            style={styles.view}
        />
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#BFAA8C",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    view: {
        resizeMode: 'stretch',
        top: 40,
        marginTop: -370,
        marginBottom: -400
    }
});

export default Activities;