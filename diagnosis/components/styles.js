import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#808080",
    textInputBackground: "#ffffff",
    company: "#ff0000"
};

const {primary, textInputBackground, company} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 300px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 28px;
    text-align: center;
    font-weight: bold;
`;

export const StyledForm = styled.View`
    width: 90%;
`;

export const StyleTextInput = styled.TextInput`
    background-color: ${textInputBackground};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${company};
`;

export const StyledInputLabel = styled.Text`
    color: ${company};
    font-size: 13px;
    text-align: left;
`;

export const LabelIcon = styled.View`
    left: 15px;
    top: 20px;
    position: absolute;
    z-index: 1;
`
export const EyeIcon = styled.TouchableOpacity`
    right: 15px;
    top: 22px;
    position: absolute;
    z-index: 1;
`