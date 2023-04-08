import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    background: "#BFAA8C",
    textInputBackground: "#ffffff",
    company: "#ff2400",
    placeholder: "#ff000067",
    button: "#808080",
    linkColor: "#0000FF",
    failure: "#FF0000"
};

const {background, textInputBackground, company, placeholder, button, linkColor, failure} = Colors;

export const StyledContainer = styled(View)`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 20}px;
    background-color: ${background};
    height: ${Dimensions.get('window').height}px;
    width: ${Dimensions.get('window').width}px;
`;

export const InnerContainer = styled(View)`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled(Image)`
    width: 300px;
    height: 200px;
`;

export const PageTitle = styled(Text)`
    font-size: 28px;
    text-align: center;
    font-weight: bold;
    margin-top:-10px;
    padding-bottom: 5px;
`;

export const StyledForm = styled(View)`
    width: 90%;
`;

export const StyleTextInput = styled(TextInput)`
    background-color: ${textInputBackground};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 15px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${placeholder};
`;

export const StyleInputLabel = styled(Text)`
    font-size: 20px;
`;

export const LabelIcon = styled(View)`
    left: 15px;
    top: 40px;
    position: absolute;
    z-index: 1;
`;
export const EyeIcon = styled(TouchableOpacity)`
    right: 15px;
    top: 40px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled(TouchableOpacity)`
    padding: 10px;
    background-color: ${button};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 3px;
    height: 56px;
`;
export const ButtonText = styled(Text)`
    color: ${textInputBackground};
    font-size: 25px;
`;

export const MessageBox = styled(Text)`
    text-align: center;
    font-size: 13px;
    color: ${failure};
`;

export const Line = styled(View)`
    height: 1px;
    width: 100%;
    background-color: ${company};
    margin-vertical: 10px;
`;

export const ExtraView = styled(View)`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 8px;
`;

export const ExtraText = styled(Text)`
    justify-content: center;
    align-content: center;
    color: #333;
    font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled(Text)`
    color: ${linkColor};
    font-size: 15px;
`;