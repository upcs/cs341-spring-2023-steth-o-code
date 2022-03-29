import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
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
                                setMessage(null);
                                axios
                                .post("https://up.physicaldiagnosispdx.com/up/app-content/authentication.php", JSON.stringify({
                                    'user': values.username,
                                    'pass': values.password
                                }))
                                .then(function(data){
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
