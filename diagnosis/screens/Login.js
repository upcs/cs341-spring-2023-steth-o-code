import React, { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StackActions } from "@react-navigation/native";
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

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import axios from "axios";
//colors
const { company, placeholder, textInputBackground } = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidWrap from "../components/KeyboardAvoidWrap";

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleMessage = (message, type) => {
        setMessage(message);
        setMessageType(type);
    };
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
                            handleMessage(null);
                            if (values.username == "" || values.password == "") {
                                handleMessage("Please fill out all the fields above.");
                                setSubmitting(false);
                            } else {
                                fetch("https://up.physicaldiagnosispdx.com/up/app-content/authentication.php", {
                                    method: 'POST', 
                                    headers: {
                                        'Accept': 'application/json, text/plain, */*',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({username: values.username, password: values.password}) 
                                }).then(
                                    response => response.text()
                                ).then(function(data) {
                                    if(data === "Authenticated"){
                                        setSubmitting(false);
                                        navigation.navigate("Main Menu");
                                    }
                                    else{
                                        setSubmitting(false);
                                        handleMessage(data);
                                    }
                                }).catch(function(error) {  
                                    console.error(error);
                                    handleMessage("An error occurred. Check your network and try again.");
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
                            <StyledButton testID='wordpress-button' wordpress={true} onPress={handleSubmit}>
                                <Fontisto name="wordpress" color={textInputBackground} size={25} />
                                <ButtonText wordpress={true}>Sign in with Wordpress</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("SignUp")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>

                            <ExtraView>
                                <TextLink onPress={() => navigation.navigate("Main Menu")}>
                                    <TextLinkContent>WHILE LOGIN IS FIXED</TextLinkContent>
                                </TextLink>
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

export default Login;
