import React, {useState}  from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StackActions } from '@react-navigation/native';
import * as Yup from 'yup';

//formik
import { Formik } from 'formik';

import { StyledContainer, 
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
    StyleInputLabel
} from "../components/SignUpLoginStyles";

import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

//colors
const {company, placeholder, textInputBackground} = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidWrap from '../components/KeyboardAvoidWrap';
import axios from 'axios';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode="contain" source={require('./../assets/cropped-logo_new-1.png')} />
                    <PageTitle>Account Login</PageTitle>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={(values, {setSubmitting}) => {
                            if (values.username == '' || values.password == '') {
                                handleMessage('Please fill out all the fields above.');
                                setSubmitting(false);
                            } else {
                                console.log(values);
                                setTimeout(() => {navigation.navigate('MainMenu')}, 500);
                            }
                        }}
                    >{({handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting}) => (
                        <StyledForm>
                            <TextInput 
                                label="Username"
                                icon="person"
                                placeholder="username"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                testID='username-input'
                            />
                            {/* {touched.username && errors.username ? (<Text style={{color: '#B00000'}} testID="username-error">{errors.username}</Text>) : null} */}
                            <TextInput 
                                label="Password"
                                icon="lock"
                                placeholder="********"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                testID='password-input'
                            />
                            {/* {touched.password && errors.password ? (<Text style={{color: '#B00000'}} testID='password-error'>{errors.password}</Text>) : null} */}
                            <MessageBox testID='msgbox' type={messageType}>{message}</MessageBox>
                            {!isSubmitting && <StyledButton testID='loginbutton' onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>}

                            {isSubmitting && <StyledButton testID='activitybutton' disabled={true}>
                                <ActivityIndicator size="large" color="#FFFFFF"/>
                            </StyledButton>}

                            <Line />
                            <StyledButton testID='wordpress-button' wordpress={true} onPress={handleSubmit}>
                                <Fontisto name="wordpress" color={textInputBackground} size={25} />
                                <ButtonText wordpress={true}>Sign in with Wordpress</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Signup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                                </TextLink>

                            </ExtraView>

                             
                            <TextLink onPress={() => navigation.dispatch(StackActions.replace('MainMenu')) }>
                                <ExtraText>For Demo Purposes:</ExtraText>
                                <TextLinkContent>Go to Main Menu</TextLinkContent>
                            </TextLink>

                            <TextLink onPress={() => navigation.navigate("MultiMedia")}>
                                <TextLinkContent>Go to MultiMedia</TextLinkContent>
                            </TextLink>

                        </StyledForm>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidWrap>
    );
}

const TextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LabelIcon>
                <Octicons name={icon} size={30} color={company}/>
            </LabelIcon>
            <StyleInputLabel>{label}</StyleInputLabel>
            <StyleTextInput {...props} />
            {isPassword && (
                <EyeIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={placeholder} />
                </EyeIcon>
            )}
        </View>
    )
}

export default Login;