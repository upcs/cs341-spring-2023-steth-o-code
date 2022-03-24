import React from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const Lecture_JVP = () => (
        <View style={styles.mainContainer}>
        <WebView 
        javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Lecture_JVP.php'}} 
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
                top: 120
            }
    
});

export default Lecture_JVP;