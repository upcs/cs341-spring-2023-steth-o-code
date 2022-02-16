import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import CarouselCards from '../components/CarouselCards';

const AboutUs = () => {
    return (
        <View style={styles.mainScroller}>
            <Text style={styles.title}>About PDX PDX</Text>
            <ScrollView style={{ maxHeight: 300 }} showsVerticalScrollIndicator={true} testID='text-scroll'>
                <View style={styles.textContainer}>
                    <Text style={{flex: 1, flexWrap: 'wrap'}}>Physical diagnosis can be defined as the use of physical examination to aid in the identification and characterization of medical conditions. It is a critical area of clinical medicine that requires conceptual understanding, visualization, mentorship, practice, and experience. Practice and experience are not effective without conceptual understanding, visualization, and mentorship.{"\n"}</Text>
                    <Text style={{flex: 1, flexWrap: 'wrap'}}>Medical textbooks and print journals provide written descriptions of physical examination findings and the methods used to elicit them; in some cases, clinical images are used to provide visualization to learners, a critical component of the learning process.{"\n"}</Text>
                    <Text style={{flex: 1, flexWrap: 'wrap'}}>Images of static physical findings, such as arachnodactyly of Marfan's syndrome, can be delivered to learners via medical textbooks and print journals, and are instrumental in the process of learning physical diagnosis.{"\n"}</Text>
                    <Text style={{flex: 1, flexWrap: 'wrap'}}>However, there are numerous dynamic physical findings that can only be visualized by learners via audio or video recordings. Such findings cannot be delivered to learners via medical textbooks or print journals. Computer-based media, including the internet, has introduced a means to provide learners with visualization of dynamic physical findings. Currently, learners can find examples of most physical findings scattered around the internet. For example, they may seek and find an audio recording of the murmur of mitral stenosis in one place, and a video recording of Kussmaul's sign in another. To our knowledge, there is no centralized repository for physical findings, where learners can visit one website to find examples of virtually any physical finding of interest.{"\n"}</Text>
                </View>
            </ScrollView>
            <SafeAreaView style={styles.mainScroller}>
                <CarouselCards />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainScroller: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        backgroundColor: "#BFAA8C"
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "red",
    },
    textContainer: {
        backgroundColor: "white",
        marginLeft: 3,
        marginRight: 3,
        padding: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative"
    }
});

export default AboutUs;