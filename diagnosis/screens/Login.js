import React, { useState } from "react";
import { View, ActivityIndicator, TouchableOpacity, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
//formik
import { Formik } from "formik";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledForm,
  LabelIcon,
  Colors,
  StyleTextInput,
  EyeIcon,
  StyledButton,
  ButtonText,
  MessageBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  StyleInputLabel,
} from "../components/SignUpLoginStyles";

import { Octicons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
//colors
const { company, placeholder} = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidWrap from "../components/KeyboardAvoidWrap";
import axios from 'axios';

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo
                        resizeMode="contain"
                        source={require("./../assets/cropped-logo_new-1.png")}
                    />
                    <PageTitle>Account Login</PageTitle>
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                            if(values.username === "" || values.password === ""){
                                setSubmitting(false);
                                setMessage("Please fill out all the fields above.");
                            } else {
                                setMessage("Processing login.");
                                axios
                                .post("https://up.physicaldiagnosispdx.com/up/app-content/authentication.php", JSON.stringify({
                                    'user': values.username,
                                    'pass': values.password
                                }), { 
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                    }
                                })
                                .then(function(data){
                                    console.log(data);
                                    if ((data.data).search("Authenticated") != -1) {
                                        var success = data.data.split(" ");
                                        let name = success[1];
                                        setSubmitting(false);
                                        navigation.navigate("Main Menu", { 
                                            screen: "MainMenu", 
                                            params: { user: name }
                                        });
                                    }
                                    else {
                                        setSubmitting(false);
                                        setMessage(data.data);
                                        setMessageType("Fail");
                                    }
                                })
                                .catch(function(err) {
                                    console.log(err);
                                    setSubmitting(false);
                                    setMessage("An error occurred. Check your network and try again.");
                                    setMessageType("NetworkError");
                                });
                            } 
                        }}
                    >{({handleChange, handleBlur,handleSubmit,values,isSubmitting}) => (
                        <StyledForm>
                            <TextInput
                                label="Username"
                                icon="person"
                                placeholder="username"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange("username")}
                                onBlur={handleBlur("username")}
                                value={values.username}
                                testID="username-input"
                            />
                            <TextInput
                                label="Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                testID="password-input"
                            />
                            <MessageBox testID="msgbox" type={messageType}>{message}</MessageBox>
                            {!isSubmitting && (
                                <StyledButton testID="loginbutton" onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
                            )}

                            {isSubmitting && (
                                <StyledButton testID="activitybutton" disabled={true}>
                                    <ActivityIndicator size="large" color="#ffffff"/>
                                </StyledButton>
                            )}

                            <Line />
                            
                            <ExtraView>
                                <ExtraText>Don't have an account? </ExtraText>
                                <TextLink testID="signup-link" onPress={() => navigation.navigate("SignUp")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>

                            <ExtraView>
                                <TouchableOpacity style={styles.guest}onPress={() => navigation.navigate("Main Menu")}>
                                    <Text style={styles.cont}>Continue as Guest</Text>
                                </TouchableOpacity>
                            </ExtraView>
                                    
                        </StyledForm>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidWrap>
    );
}

const TextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LabelIcon>
        <Octicons name={icon} size={30} color={company} />
      </LabelIcon>
      <StyleInputLabel>{label}</StyleInputLabel>
      <StyleTextInput {...props} />
      {isPassword && (
        <EyeIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={placeholder}
          />
        </EyeIcon>
      )}
    </View>
  );
};

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
    },
    guest:{
        backgroundColor: "gray",
        width: "105%",
        borderRadius: 5,
        padding: "3%"
    },
    cont:{
        color: "white",
        textAlign: "center",
        fontSize: 25,
    }
});

export default Login;
