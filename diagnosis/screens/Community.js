import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Community = () => (
    <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
                <View>
                    <Ionicons style={styles.Community} name='community' size={35}/>
                </View>
                <Image style={styles.PDXLogo} source={require('diagnosis/assets/simplePDXLogo.png')}></Image>
                <Image style={styles.accountIcon} source={require('diagnosis/assets/accountIcon.png')}></Image>
                <Text style={styles.text}> Message Board </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
    },

});

export default Community;