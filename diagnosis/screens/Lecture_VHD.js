import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

const Lecture_VHD = () => (
    <View style={styles.mainContainer}>
        <WebView 
            javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Lecture_VHD.php'}}
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
        flex: 0.5,
        top: 40
    }
});

export default Lecture_VHD;