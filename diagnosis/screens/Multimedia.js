import React, {useState}  from 'react';
import { View, Text, Switch, Stylesheet } from 'react-native';
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
    TextLinkContent
} from "./../components/styles";

import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

const {company, placeholder, textInputBackground} = Colors;

const Multimedia = () => {
    let num_patients = 1;
    const VIMEO_ID = '179859217';
    const PROGNOSIS = "PLACEHOLDER"
    const DESCRIPTION = "PLACEHOLDER"
    const BLOCK1 = "PLACEHOLDER";
    const BLOCK2 = "PLACEHOLDER";
    const BLOCK3 = "PLACEHOLDER";
    const BLOCK4 = "PLACEHOLDER";
    const BLOCK5 = "PLACEHOLDER";

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/cropped-logo_new-1.png')} />
                <PageTitle>{ PROGNOSIS }</PageTitle>
                <Text style={styles.baseText}>{ DESCRIPTION }</Text>
                
                <View style={styles.container}>
                    <Text>{enabled ? "Make page available offline" : "Available offline"}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <Vimeo
                    ref='video'
                    videoId={VIMEO_ID}
                    onReady={ () => console.log('Vimeo is ready') }
                    onPlay={ () => console.log('Vimeo is playing') }
                    onPlayProgress={ data => console.log('Vimeo progress data:', data) }
                    onFinish={ () => console.log('Vimeo is finished') }
                />
            </InnerContainer>
        </StyledContainer>
    );
}

export default Multimedia;