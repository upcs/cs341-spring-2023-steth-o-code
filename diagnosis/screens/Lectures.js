import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';

const Lectures = () => (
        // <WebView 
        // javaScriptEnabled={true} source={{uri: 'https://up.physicaldiagnosispdx.com/up/app-content/server-screens/Lectures.php'}} 
        // />

        <View style={styles.headerContainer}>
            <View>
                <Ionicons style={styles.MainMenu} name='menu' size={35}/>
            </View>
            <Image style={styles.PDXLogo} source={require('../assets/simplePDXLogo.png')}></Image>
            <Image style={styles.accountIcon} source={require('../assets/accountIcon.png')}></Image>
        </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    
});

export default Lectures;