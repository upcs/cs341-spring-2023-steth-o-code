import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ExtraText } from '../components/SignUpLoginStyles';

var time = new Date().getHours();

const MainMenu = ({navigation}) => (

    
        <View style={styles.mainContainer}> 
        
            <View style={styles.headerContainer}>   
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
            </View>

            <View style={styles.imageView}>
                <Image style={styles.stethoscopeImage} source={require('diagnosis/assets/stethoscope.jpeg')} blurRadius={1}></Image>
                {/* <Text style={styles.welcomeText}>Good Morning, {"\n"}
                    User
                </Text> */}
            </View>

            <View style={styles.centerView}>
                <View style={styles.middleLineLeft}></View>
                <ExtraText style={styles.PDXCenterText}>PDX</ExtraText>
                <View style={styles.middleLineRight}></View>
            </View>
            
           
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
        height: 100,
        justifyContent: "center",
        width: Dimensions.get('window').width,
    },

    PDXLogo: {
        resizeMode: "contain",
        position: 'absolute',
        width: 200,
        left: 87,
        top: -60
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
        width: Dimensions.get('window').width,
        height: 250,
    },

    imageView: {
        position: 'absolute',
        top: 100,
        height: 250,
        width: Dimensions.get('window').width,
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
        backgroundColor: "white",
        position: "absolute",
        top: 440,
        width: '96%',
        borderRadius: 60,
        borderColor: 'red',
        padding: 10,
        alignItems: 'center'
    },

    magGlassImg: {
        resizeMode: "contain",
        width: '15%',
        position: 'relative'
    },

    quickLinkButtons: {
        margin: 10,
        alignItems: 'center',
        width: '75%',
        paddingVertical: 10,
        backgroundColor: 'red',
        borderRadius: 30,
    },

    centerView: {
        top: 350,
        position: "absolute",
        //backgroundColor: 'red',
        height: 80,
        width: Dimensions.get('window').width
    },
    
    middleLineLeft: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        left: 20,
        top: 42
      
    },

    PDXCenterText: {
        position: 'absolute',
        fontSize: 50,
        color: 'white',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 9},
        textShadowRadius:10,
        fontWeight: 'bold',
        top: 17,
        left: 140
    },

    middleLineRight: {
        width: 100,
        borderBottomColor: 'grey',
        borderBottomWidth: 6,
        borderRadius: 12,
        position: 'absolute',
        right: 20,
        top: 42
    },

    buttonText: {
        fontSize: 25,
        fontFamily: "Gill Sans",
        fontWeight: "bold",
        color: "black"
    }
});
    
export default MainMenu; // send it off



