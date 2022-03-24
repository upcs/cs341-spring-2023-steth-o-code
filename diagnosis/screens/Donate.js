import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Donate = () => (
    <View style={styles.mainContainer}>
        <Text style={styles.text}> PAGE FOR Donations</Text>
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

export default Donate;