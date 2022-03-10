import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const Lectures = () => (
        <WebView 
            javaScriptEnabled={true} source={{uri: 'https://player.vimeo.com/video/482925513?loop=1'}} 
        />
);

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#BFAA8C',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
    },

});

export default Lectures;