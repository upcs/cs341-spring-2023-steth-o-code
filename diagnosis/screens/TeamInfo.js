import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const TeamInfo = () => (
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.mainContainer}>
            <Text style={styles.title}>Meet the Team</Text>
            <View>
                <Image
                    style={{ width: 200, height: 200}} 
                    source={require('./../assets/Andre-314x314.png')}
                />
                <Text style={styles.person}>André M. Mansoor, M.D.</Text>
            </View>
            <View>
                <Image
                   style={{ width: 200, height: 200}} 
                    source={require('./../assets/Sullivan.jpeg')}
                />
                <Text style={styles.person}>Peter Sullivan, M.D.</Text>
            </View>
            <View>
                <Image
                    style={{ width: 200, height: 200}} 
                    source={require('./../assets/jgn.jpg')}
                />
                <Text style={styles.person}>Joseph G. Nugent, M.H.S.</Text>
            </View>
            <View>
                <Image
                    style={{ width: 200, height: 200}} 
                    source={require('./../assets/ishita-sharma.jpeg')}
                />
                <Text style={styles.person}>Ishita Sharma, M.B.B.S.</Text>
            </View>
        </ScrollView>
);

const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        alignItems: "center",
        padding: 25,
        backgroundColor: "#BFAA8C",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
    },
    person: {
        fontWeight: "bold"
    }
});

export default TeamInfo;