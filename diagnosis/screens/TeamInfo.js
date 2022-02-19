import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants'

const TeamInfo = () => (
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.mainContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Meet the Team</Text>
            <View>
                <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }} 
                    source={require('./../assets/Andre-314x314.png')}
                />
                <Text style={styles.person}>André M. Mansoor, M.D.{"\n"}</Text>
            </View>
            <View>
                <Image
                   style={{ width: 200, height: 200, alignSelf: 'center' }} 
                    source={require('./../assets/Sullivan.jpeg')}
                />
                <Text style={styles.person}>Peter Sullivan, M.D.{"\n"}</Text>
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