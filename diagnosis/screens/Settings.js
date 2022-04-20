import React,  { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';



const Settings = ({navigation}) => 
{
    const [name,setName] = useState('USER');
    return(
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.picContainer} onPress={()=>{}}>
            <Image source={require('../assets/profilePic.jpeg')} style={styles.profPic}/>
        </TouchableOpacity>
        <Text style={styles.nameL}>Change Name</Text>
        <TextInput style={styles.name} onChangeText={(val)=>{setName(val)}}>{name}</TextInput>

        <TouchableOpacity style={styles.save} onPress={()=>{
            navigation.navigate("Main Menu", { 
                screen: "MainMenu", 
                params: { Name: name }
            });
        }}>
            <Text style={styles.word}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{
            navigation.navigate("Login")
        }} >
            <Text style={styles.word}>Log Out</Text>
        </TouchableOpacity>
    </View>
);
    }

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BFAA8C",
    },nameL:{
        color:"white",
        bottom: "26.5%",
        fontSize:18,
        textAlign:"center"
    },
    button:{
        backgroundColor: "red",
        borderRadius: 30,
        width: '75%',
        top: '26%'
    },
    word:{
        color:"white",
        textAlign:"center",
        fontSize: 30, 
        fontWeight: "bold"
    },
    profPic:{
        height: 200, 
        width: 200, 
        borderRadius:100,
    },
    picContainer:{
        bottom:"28%"
    },
    name:{
        color: "black",
        fontSize: 30,
        textAlign:"center",
        bottom:"26%",
        backgroundColor:"white", 
        width:"50%"
    }, 
    save:{
        backgroundColor: "darkblue",
        borderRadius: 30,
        width: '75%',
        top: '-23%'
    }
});



export default Settings;