import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, TouchableOpacity } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BottomNavigation } from "react-native-paper";

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>

        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#BFAA8C'}}>
            <ImageBackground source={require('../assets/cropped-logo_new-1.png')} style={{padding:60}}>

            </ImageBackground>

            <View style={{flexDirection:'row', flex:1, backgroundColor:'#BFAA8C'}}>
                <Image 
                source={require('../assets/profilePic.jpeg')} 
                style={{height: 60, width: 60, borderRadius:40, marginBottom:10, marginLeft:10}}
                />
                <Text style={styles.nameLabel}>USERNAME</Text>
                <Ionicons name="settings-sharp" size={20} style={styles.settings} 
                color="white" onPress={()=> {
                    props.navigation.navigate("Settings")
                }}/>
            </View>

           
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <DrawerItemList {...props} />
            </View>

        </DrawerContentScrollView>

        <View>
            <Text></Text>
        </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    nameLabel:{
        fontSize:20,
        marginLeft:20,
        marginTop:20,
        color: 'white',
    },
    settings:{
        marginLeft:20,
        marginTop: 22
    }
});
export default CustomDrawer;