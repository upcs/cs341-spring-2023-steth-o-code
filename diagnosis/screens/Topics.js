import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const Topics = () => (
    <View style={styles.mainContainer}>
        <ScrollView>
            <Text style={styles.test}> PAGE FOR Topics</Text>

            <Text style={styles.test}> PAGE FOR Topics</Text>


        </ScrollView>
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
    test:{
        fontSize:300
    }
});

export default Topics;