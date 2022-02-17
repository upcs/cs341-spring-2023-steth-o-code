import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>

        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#BFAA8C'}}>
            <ImageBackground source={require('../assets/cropped-logo_new-1.png')} style={{padding:60}}></ImageBackground>
           
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
export default CustomDrawer