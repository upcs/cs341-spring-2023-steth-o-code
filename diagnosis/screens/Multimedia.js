import React, {useState}  from 'react';
import { View, Text, Switch, Stylesheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ButtonGroup } from 'react-native-elements'
import { WebView } from 'react-native-webview';

import { StyledContainer, 
    InnerContainer,
    Colors, 
    PageTitle,
    PageLogo,
    Vimeo
} from "./../components/SignUpLoginStyles";

import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
const {company, placeholder, textInputBackground} = Colors;
//const styes = StyleSheet.create();

const Multimedia = () => {
    let [selected, setSelected] = React.useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selectedIndex, setSelectedIndex] = useState(0);

    //replace all of these with data from WordPress
    let num_patients = 1;
    let buttonData = ['Normal', 'Annotated', 'Narrated'];
    let prognosis = "PLACEHOLDER"
    let description = "PLACEHOLDER"
    let block1 = "PLACEHOLDER";
    let ids1 = [472325227, 472325047, 505014368];//Normal, Annotated, Narrated
    let block2 = "PLACEHOLDER";
    let ids2 = [0, 0, 0];//Normal, Annotated, Narrated
    let block3 = "PLACEHOLDER";
    let ids3 = [0, 0, 0];//Normal, Annotated, Narrated
    let block4 = "PLACEHOLDER";
    let ids4 = [0, 0, 0];//Normal, Annotated, Narrated
    let block5 = "PLACEHOLDER";
    let ids5 = [0, 0, 0];//Normal, Annotated, Narrated

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                {/*Page head and logo*/}
                <PageLogo resizeMode="contain" source={require('./../assets/cropped-logo_new-1.png')} />
                <PageTitle>{prognosis}</PageTitle>
                {/*Basic description*/}
                <Text style={{alignItems: 'flex-start'}}>{description}</Text>
                {/*Available offline switch*/}
                <View style={{flexDirection:'row',justifyContent : 'space-between'}}>{/* Switch needs to be centered */}
                    <Text>{"Available offline "}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        testID="switch"
                    />
                </View>
                {/*End of universal section*/}

                {/*Patient 1 section*/}
                <Text style={{alignItems: 'flex-start'}}>Patient 1</Text>
                {/*Block text for patient 1*/}
                <Text style={{alignItems: 'flex-start'}}>{block1}</Text>
                {/*Video itself, should change depending on selected radio button*/}
                <WebView
                    allowsFullscreenVideo
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{ uri: 'https://player.vimeo.com/video/'+ids1[buttonData.indexOf(selectedIndex)]}} 
                    testID="video"
                />
                {/*Video type selection*/}
                <ButtonGroup
                    buttons={buttonData}
                    selectedIndex={selectedIndex}
                    onPress={(value) => {
                    setSelectedIndex(value);
                    }}
                    containerStyle={{ marginBottom: 20 }}
                    testID="button-group"
                />
            </InnerContainer>
        </StyledContainer>
    );
}

export default Multimedia;