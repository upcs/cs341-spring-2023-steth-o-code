import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const getData = async () => {
    const data = await fetch("https://up.physicaldiagnosispdx.com/up/app-content/database_connect_jgn.php")
    const json = await data.json();
    console.log("Clicked");
    return json.ID;
};

const KnowledgeTest = () => (
    <View style={styles.mainContainer}>
        <Text style={styles.text} onPress={getData}> KnowledgeTest Page</Text>
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

export default KnowledgeTest;