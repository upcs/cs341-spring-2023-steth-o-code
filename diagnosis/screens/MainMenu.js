import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ExtraText } from '../components/styles';

var time = new Date().getHours();

var button1Cliked = () => {
    alert("Button 1 clicked");
}

var button2Cliked = () => {
    alert("Button 2 clicked");
}

var button3Cliked = () => {
    alert("Button 3 clicked");
}

var button4Cliked = () => {
    alert("Button 4 clicked");
}

var button5Cliked = () => {
    alert("Button 5 clicked");
}

const MainMenu = () => (

    
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>   
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
            </View>
            
            <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1}></Image>
            <Text style={styles.welcomeText}>Good Morning, {"\n"}
                User
            </Text>

            <View style={styles.middleLineLeft}></View>
            <ExtraText style={styles.PDXCenterText}>PDX</ExtraText>
            <View style={styles.middleLineRight}></View>

            <View style={styles.quickLinksView}>
                <TouchableOpacity style={styles.quickLinkButtons} onPress={button1Cliked}> 
                    <Text style={styles.buttonText}>Knowledge Test</Text>    
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button2Cliked}> 
                    <Text style={styles.buttonText}>Topic of the Day</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button3Cliked}> 
                    <Text style={styles.buttonText}>Community</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button4Cliked}> 
                    <Text style={styles.buttonText}>Our Team</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={button5Cliked}> 
                    <Text style={styles.buttonText}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
);

// style sheet to keep the enhancements clean and readable
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
    },

    headerContainer: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: 0,
        height: 100,
        justifyContent: "center",
        alignContent: "center",
        width: '100%',
    },

    PDXLogo: {
        resizeMode: "contain",
        width: 200,
        top: 15,
        left: 90,
        flex: 1,
    },

    accountIcon: {
        position: "absolute",
        resizeMode: "contain",
        width: 50,
        height: 50,
        right: 15,
        top: 40
    },

    stethoscopeImage: {
        resizeMode: "contain",
        position: "absolute",
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        top: 38
    },

    welcomeText: {
        position: "absolute",
        color: "#E63610",
        fontSize: 60,
        top: 120,
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Gill Sans",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    
    quickLinksView: {
        top: 70,
        backgroundColor: "white",
        justifyContent: 'center',
        position: "relative",
        marginTop: 280,
        height: 370,
        marginBottom: 0,
        width: '96%',
        borderRadius: 60,
        borderColor: 'red',
        alignContent: 'center'

    },

    magGlassImg: {
        resizeMode: "contain",
        width: '15%',
        position: 'relative'
    },

    quickLinkButtons: {
        marginTop: 15,
        alignItems: 'center',
        marginLeft: 50,
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
    },
    
    middleLineLeft: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        left: 20,
        top: 390
    },

    PDXCenterText: {
        position: 'absolute',
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        paddingBottom: 30,
        left: 145,
        fontWeight: 'bold'
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: 20,
        top: 390
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Gill Sans",
        fontWeight: "bold",
        color: "black"
    }
});
    
export default MainMenu; // send it off



