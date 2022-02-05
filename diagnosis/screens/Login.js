import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

import { StyledContainer, InnerContainer, PageLogo, PageTitle, StyledForm, LabelIcon, Colors, StyledInputLabel, StyleTextInput } from "./../components/styles";

import {Octicons} from '@expo/vector-icons';

const {company, textInputBackground} = Colors;

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/cropped-logo_new-1.png')} />
                <PageTitle>Account Login</PageTitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledForm>
                        <TextInput 
                            label="Username"
                            icon="person"
                            placeholder="username"
                            placeholderTextColor={company}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <TextInput 
                            label="Password"
                            icon="lock"
                            placeholder="********"
                            placeholderTextColor={company}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                    </StyledForm>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const TextInput = ({label, icon, ...props}) => {
    return (
        <View>
            <LabelIcon>
                <Octicons name={icon} size={30} color={company}/>
            </LabelIcon>
            <StyleTextInput {...props} />
        </View>
    )
}

export default Login;