import React from 'react'
import {View, Image, Dimensions,StyleSheet} from 'react-native'

export const SLIDER_WIDTH = Dimensions.get('window').width + 70
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.container} key={index}>
            <Image
                source={{ uri: item }} 
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH+20,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 4.65,
        shadowOpacity: 0.29,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH+20,
        height: 350,
        resizeMode: 'stretch',
    }
})

export default CarouselCardItem;