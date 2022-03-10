import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, useWindowDimensions} from 'react-native';
import { ExtraText } from '../components/SignUpLoginStyles';
import {Ionicons} from '@expo/vector-icons';
import { IconButton, Colors } from 'react-native-paper';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

const MainMenu = ({navigation}) => (
        <View style={styles.mainContainer}> 
            <View style={styles.headerContainer}>
                <View>
                    <Ionicons style={styles.MainMenu} name='menu' size={35}/>
                </View>
                <Image style={styles.PDXLogo} source={require('../assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('../assets/accountIcon.png')}></Image>
            </View>
            
            <Image style={styles.stethoscopeImage} source={require('../assets/stethoscope.jpeg')} blurRadius={1}></Image>
            <Text 
                adjustsFontSizeToFit={true}
                style={styles.welcomeText}
                onTextLayout={ (e) => { 

                }}
                >Good Morning, User
            </Text>

            <View style={styles.middleLineLeft}></View>
            <ExtraText style={styles.PDXCenterText}>PDX</ExtraText>
            <View style={styles.middleLineRight}></View>
            
            <View style={styles.quickLinksView}>
                <TouchableOpacity testID='buttonOne' style={styles.quickLinkButtons} onPress={() => navigation.navigate("KnowledgeTest")}> 
                    <Text style={styles.buttonText}>Knowledge Test</Text>    
                </TouchableOpacity>

                <TouchableOpacity testID='buttonTwo' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Lectures")}> 
                    <Text style={styles.buttonText}>Lectures</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonThree' style={styles.quickLinkButtons} onPress={() => navigation.navigate("Community")}> 
                    <Text style={styles.buttonText}>Community</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonFour' style={styles.quickLinkButtons} onPress={() => navigation.navigate("TeamInfo")}> 
                    <Text style={styles.buttonText}>Our Team</Text>
                </TouchableOpacity>

                <TouchableOpacity testID='buttonFive' style={styles.quickLinkButtons} onPress={() => navigation.navigate("AboutUs")}> 
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
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },

    headerContainer: {
        backgroundColor: "#ffffff",
        position: "absolute",
        top: 0,
        height: StatusBarHeight+65,
        justifyContent: "center",
        width: Dimensions.get('window').width,
    },

    MainMenu:{
        top: StatusBarHeight-20,
        left: Dimensions.get('window').width / 16
    },

    PDXLogo: {
        position:"absolute",
        resizeMode: "contain",
        //backgroundColor: 'red',
        width: 200,
        top: StatusBarHeight-100,
        left: Dimensions.get('window').width / 4,
        flex: 1,
    },

    accountIcon: {
        position: "absolute",
        //backgroundColor: 'red',
        resizeMode: "contain",
        width: 50,
        height: 50,
        right: Dimensions.get('window').width / 16,
        top: StatusBarHeight
    },

    stethoscopeImage: {
        resizeMode: "stretch",
        position: "absolute",
        width: '100%',
        height: Dimensions.get('window').height/3,
        aspectRatio: 1,
        top: StatusBarHeight+60
    },

    welcomeText: {
        position: "absolute",
        color: "#E63610",
        fontSize: 55,
        top: Dimensions.get('window').height/4-(StatusBarHeight*(3/4)),
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "Roboto",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
        left:10
    },
    
    quickLinksView: {
        top: StatusBarHeight,
        backgroundColor: "white",
        justifyContent: 'center',
        position: "relative",
        marginTop: Dimensions.get('window').height*(3/5.5),
        height: Dimensions.get('window').height*(7/17),
        marginBottom: 0,
        width: '96%',
        borderRadius: 60,
        borderColor: 'red',
        padding: 10,
        top: 0,
        alignItems: 'center',
        marginBottom: 40
    },

    magGlassImg: {
        resizeMode: "contain",
        width: '15%',
        position: 'relative'
    },

    quickLinkButtons: {
        marginTop: Dimensions.get('window').height/64,
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
    },

    centerView: {
        //top: 350,
        //position: "absolute",
        //backgroundColor: 'red',
        //height: 80,
        flex: 0.4,
        width: Dimensions.get('window').width
    },
    
    middleLineLeft: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        left: Dimensions.get('window').width/16,
        top: Dimensions.get('window').height/2.05
    },

    PDXCenterText: {
        position: 'absolute',
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        paddingBottom: Dimensions.get('window').height/64,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: Dimensions.get('window').width/16,
        top: Dimensions.get('window').height/2.05
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black"
    }
});
    
export default MainMenu; // send it off



