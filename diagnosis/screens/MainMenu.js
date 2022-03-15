import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ExtraText } from '../components/SignUpLoginStyles';
import {Ionicons} from '@expo/vector-icons';
import { IconButton, Colors } from 'react-native-paper';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

var time = new Date().getHours();

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
                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("KnowledgeTest")} testID='buttonOne'> 
                    <Text style={styles.buttonText}>Knowledge Test</Text>    
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("TOTD")} testID='buttonTwo'> 
                    <Text style={styles.buttonText}>Topic of the Day</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("Community")} testID='buttonThree'> 
                    <Text style={styles.buttonText}>Community</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("TeamInfo")} testID='buttonFour'> 
                    <Text style={styles.buttonText}>Our Team</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("AboutUs")} testID='buttonFive'> 
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
        alignContent: "center",
        width: '100%',
    },
    MainMenu:{
        top: StatusBarHeight-20,
        left: Dimensions.get('window').width / 16
    },
    PDXLogo: {
        position:"absolute",
        resizeMode: "contain",
        width: 200,
        top: StatusBarHeight-100,
        left: Dimensions.get('window').width / 4,
        flex: 1,
    },

    accountIcon: {
        position: "absolute",
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
        top: Dimensions.get('window').height/4-(StatusBarHeight*(3/2)),
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "Roboto",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    
    quickLinksView: {
        top: StatusBarHeight,
        backgroundColor: "white",
        justifyContent: 'center',
        position: "relative",
        marginTop: Dimensions.get('window').height*(3/7),
        height: Dimensions.get('window').height*(7/16),
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
        marginTop: Dimensions.get('window').height/64,
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
        left: Dimensions.get('window').width/16,
        top: Dimensions.get('window').height/2.1
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
        top: Dimensions.get('window').height/2.1
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black"
    }
});
    
export default MainMenu; // send it off



