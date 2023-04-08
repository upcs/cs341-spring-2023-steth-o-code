import React from 'react';
import {StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const Donate = () => (
        <WebView 
        javaScriptEnabled={true}
        source={{uri: 'https://www.paypal.com/donate/?hosted_button_id=UDD4AT74W4SJU'}}
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

export default Donate;