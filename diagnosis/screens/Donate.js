import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

const Donate = () => (
        <WebView 
        javaScriptEnabled={true}
        source={{uri: 'https://buy.stripe.com/test_aEU00C2d7bZj7hC000'}}
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