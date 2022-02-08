import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const topics = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Topics
        </Text>
        <button>Cardiology</button>
        <button>Endocrinology</button>
        <button>Nails</button>
        <button>Neurology</button>
        <button>Rheumatology</button>
        <button>Pulmonology</button>
        <button>Gastroenterology</button>
        <button>Miscellaneous</button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default topics;