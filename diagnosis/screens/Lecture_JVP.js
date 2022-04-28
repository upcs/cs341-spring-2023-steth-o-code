import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';
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
            
            
    
});

export default Lecture_JVP;