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
            <Text style={styles.welcomeText}>Good Morning, {"\n"}
                User
            </Text>

            <View style={styles.middleLineLeft}></View>
            <ExtraText style={styles.PDXCenterText}>PDX</ExtraText>
            <View style={styles.middleLineRight}></View>

            <View style={styles.quickLinksView}>
                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("KnowledgeTest")}> 
                    <Text style={styles.buttonText}>Knowledge Test</Text>    
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("TOTD")}> 
                    <Text style={styles.buttonText}>Topic of the Day</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("Community")}> 
                    <Text style={styles.buttonText}>Community</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("TeamInfo")}> 
                    <Text style={styles.buttonText}>Our Team</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.quickLinkButtons} onPress={() => navigation.navigate("AboutUs")}> 
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
        left: 20
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
        right: 15,
        top: StatusBarHeight
    },

    stethoscopeImage: {
        resizeMode: "stretch",
        position: "absolute",
        width: '100%',
        height: StatusBarHeight+200,
        aspectRatio: 1,
        top: StatusBarHeight+60
    },

    welcomeText: {
        position: "absolute",
        color: "#E63610",
        fontSize: 55,
        top: StatusBarHeight+120,
        fontWeight: 'bold',
        textAlign: "center",
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
        left: Dimensions.get('window').width/16,
        top: StatusBarHeight+290
    },

    PDXCenterText: {
        position: 'absolute',
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        paddingBottom: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        top: StatusBarHeight+250
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: Dimensions.get('window').width/16,
        top: StatusBarHeight+290
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "black"
    }
});
    
export default MainMenu; // send it off



