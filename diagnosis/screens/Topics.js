import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';

const Topics = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
                Topics
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cardiology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Endocrinology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Gastroenterology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Infectious Disease</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Neurology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Nephrology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Nails</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Rheumatology</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Hematolgy-Oncology</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Heridatary Conditions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pulmonolgy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Miscllaneous</Text>
                </TouchableOpacity>

                <Text style={styles.filler}>
                    a;lakjdsfkl;asj
                </Text>
            </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#BFAA8C",
    },
    buttonContainer: {
        width: "80%"
    },
    test: {
        fontSize: 300
    },
    buttonText: {
        fontSize: 25,
        fontFamily: "Gill Sans",
        fontWeight: "bold",
        color: "white"
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 100,
        paddingVertical: 10,
        marginTop: 20,
        left: "13%"

    },
    title: {
        textAlign: "center",
        fontSize: 60,
        color: "red",
        backgroundColor: "white",
    },
    filler: {
        color: "#BFAA8C",
        fontSize: 50
    }
});

export default Topics;
