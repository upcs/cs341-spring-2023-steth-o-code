import React,  { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';



const Settings = () => 
{
    const [name,setName] = useState('USER');
    return(
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.picContainer} onPress={()=>{}}>
            <Image source={require('../assets/profilePic.jpeg')} style={styles.profPic}/>
        </TouchableOpacity>

        <TextInput style={styles.name} onChangeText={(val)=>{setName(val)}}>{name}</TextInput>

        <TouchableOpacity style={styles.save} onPress={()=>{
            alert(name + " SAVED")
        }}>
            <Text style={styles.word}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
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
        color:"white",
        fontSize: 30,
        bottom:"26%"
    }, 
    save:{
        backgroundColor: "darkblue",
        borderRadius: 30,
        width: '75%',
        top: '-25%'
    }
});



export default Settings;