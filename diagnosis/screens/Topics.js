import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

const topicList = [
    { name: 'Cardiology' },
    { name: 'Endocrinology'},
    { name: 'Nails'},
    { name: 'Neurology'},
    { name: 'Rheumatology'},
    { name: 'Pulmonology'},
    { name: 'Gastroenterology'},
    { name: 'Miscellaneous'},
];

const menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Topics
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default menu;