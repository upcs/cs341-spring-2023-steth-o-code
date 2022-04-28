import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const DefaultTopic = () => (
    <View style={styles.mainContainer}>
        <Text style={styles.text}>Page for a Topic</Text>
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

export default DefaultTopic;