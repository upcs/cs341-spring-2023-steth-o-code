import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

const Lecture_DR = () => (

    <View style={styles.mainContainer}>
        <WebView 
            scrollEnabled={false}
            javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Lecture_DR.php'}} 
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
        top: '8%',
        width: '80%',
        marginBottom: '40%',
        left: '10%',
        paddingTop: 200
    }
});

export default Lecture_DR;