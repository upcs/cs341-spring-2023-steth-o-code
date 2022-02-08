import React, {useState}  from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidWrap>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode="contain" source={require('./../assets/cropped-logo_new-1.png')} />
                    <PageTitle>Account Login</PageTitle>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >{({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledForm>
                            <TextInput 
                                label="Username"
                                icon="person"
                                placeholder="username"
                                placeholderTextColor={placeholder}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
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
                            />
                            <Text>{"\n"}</Text>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton wordpress={true} onPress={handleSubmit}>
                                <Fontisto name="wordpress" color={textInputBackground} size={25} />
                                <ButtonText wordpress={true}>Sign in with Wordpress</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Signup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>
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