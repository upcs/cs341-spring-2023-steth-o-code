import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Constants from 'expo-constants';

const TeamInfo = () => (
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Meet the Team</Text>
            <View>
                <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }} 
                    source={require('./../assets/Andre-314x314.png')}
                />
                <Text style={styles.person}>André M. Mansoor, M.D.{"\n"}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column'}}>
                        <SocialIcon 
                            type="facebook"
                            onPress={() => Linking.openURL('https://www.facebook.com/AndreMansoorMD')}
                        />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <SocialIcon 
                            type="instagram"
                            onPress={() => Linking.openURL('https://www.instagram.com/frameworks.for.im/')}
                        />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <SocialIcon 
                            type="youtube"
                            onPress={() => Linking.openURL('https://www.youtube.com/channel/UCx83LAQ-Fh7wOUCIqUSSCYA')}
                        />
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <SocialIcon 
                            type="twitter"
                            onPress={() => Linking.openURL('https://twitter.com/AndreMansoor')}
                            testID='twitter'
                        />
                    </View>
                </View>
            </View>
            <View>
                <Image
                   style={{ width: 200, height: 200, alignSelf: 'center' }} 
                    source={require('./../assets/Sullivan.jpeg')}
                />
                <Text style={styles.person}>Peter Sullivan, M.D.{"\n"}</Text>
                <SocialIcon
                    style={{alignSelf: 'center'}} 
                    type="twitter"
                    onPress={()=>{Linking.openURL('https://twitter.com/PeteSullivanPDx')}}
                />
            </View>
            <View>
                <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }} 
                    source={require('./../assets/jgn.jpg')}
                />
                <Text style={styles.person}>Joseph G. Nugent, M.H.S.{"\n"}</Text>
            </View>
            <View>
                <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }} 
                    source={require('./../assets/ishita-sharma.jpeg')}
                />
                <Text style={styles.person}>Ishita Sharma, M.B.B.S.{"\n"}</Text>
            </View>
        </ScrollView>
);

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        alignItems: "center",
        padding: 25,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#BFAA8C",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
    },
    person: {
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default TeamInfo;