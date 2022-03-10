import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ExtraText } from '../components/SignUpLoginStyles';

var time = new Date().getHours();

const MainMenu = ({navigation}) => (

    
        <View style={styles.mainContainer}> 
            <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1}></Image>
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
        height: 0,
        justifyContent: "center",
        alignContent: "center",
        width: '100%',
    },
    MainMenu:{
        top: 10,
        left: 20
    },
    PDXLogo: {
        position:"absolute",
        resizeMode: "contain",
        width: 200,
        top: -60,
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
        top: -60
    },

    welcomeText: {
        position: "absolute",
        color: "white",
        fontSize: 60,
        top: 20,
        fontWeight: 'bold',
        textAlign: "center",
        fontFamily: "Gill Sans",
        textShadowColor:'#585858',
        textShadowOffset:{width: 5, height: 5},
        textShadowRadius:10,
    },
    
    quickLinksView: {
        top: 0,
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
        top: 330
    },

    PDXCenterText: {
        alignContent: "center",
        top: 260,
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        fontWeight: 'bold'
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: 20,
        top: 330
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Gill Sans",
        fontWeight: "bold",
        color: "white"
    }
});
    
export default MainMenu; // send it off



