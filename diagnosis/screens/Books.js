import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';

const Books = () => {
  return (
    <ScrollView testID = 'scroll'
      style={{ flex: 1}}
      contentContainerStyle={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Important Books</Text>
      <View>
        <TouchableOpacity 
          onPress={() =>
            Linking.openURL('https://www.amazon.com/Frameworks-Internal-Medicine-Andre-Mansoor/dp/1496359305')
          }>
          <Image testID='book1'
            style={styles.imageStyle}
            source={{
              uri: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/749044f2-0ebd-4044-ae3f-062951ad7b74_1.b01575a88f35295db30bdad8533b6180.jpeg?resize=768%2C997&ssl=1',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() =>
            Linking.openURL('https://www.amazon.com/Sapiras-Art-Science-Bedside-Diagnosis/dp/1605474118')
          }>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/BEFDEF61-663C-4FB6-9B99-BE4A00014A84-scaled.jpeg?resize=768%2C1011&ssl=1',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() =>
            Linking.openURL('https://www.amazon.com/Physical-Examination-Circulation-Joseph-Perloff/dp/1607950235')
          }>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/1-d9791b0d80-1.jpg?resize=667%2C1024&ssl=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() =>
            Linking.openURL('https://www.amazon.com/Bedside-Cardiac-Diagnosis-Henry-Marriott/dp/0397510853')
          }>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/E025D4F9-A12F-4D68-A2CF-D3359E0C1E35.jpeg?w=365&ssl=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() =>
            Linking.openURL('https://www.amazon.com/Physical-Diagnosis-Secrets-Student-Consult/dp/0323034675')
          }>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/AF0792E4-B5AE-4842-9D11-C9AC39CCB33E_4_5005_c.jpeg?w=308&ssl=1',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() =>
            Linking.openURL('https://www.amazon.com/Pericardium-Comprehensive-Textbook-Fundamental-Cardiology/dp/0824793161')
          }>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://i0.wp.com/physicaldiagnosispdx.com/wp-content/uploads/C73E2FEE-4D27-4FE9-9416-1E2309D06C72_4_5005_c.jpeg?w=329&ssl=1',
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 25,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#BFAA8C',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    marginTop: 20,
    alignContent: 'center',
  },
  imageStyle: {
    width: 228,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Books;
