import React from 'react'
import {View} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, { ITEM_WIDTH, SLIDER_WIDTH } from './CarouselCardItem'

const images = [
    'https://physicaldiagnosispdx.com/wp-content/uploads/D8gXFe3U8AI3yRJ-1024x768.jpeg',
    'https://physicaldiagnosispdx.com/wp-content/uploads/6A068373-9EEA-4888-92BE-29FDA7C2C91D-wpp1593059985634-e1593064341479.jpeg',
    'https://physicaldiagnosispdx.com/wp-content/uploads/A35B88B8-84A8-4062-B5DD-0C343C0F7C2A-1024x768.jpeg',
    'https://physicaldiagnosispdx.com/wp-content/uploads/087C7AA4-13F4-4D02-8344-D07652C0EB9D.jpeg',
    'https://physicaldiagnosispdx.com/wp-content/uploads/601B7433-8E1D-4F17-9A0C-AB32010DD446-1024x768.jpeg',
    'https://physicaldiagnosispdx.com/wp-content/uploads/0DFCB3BC-A36A-4611-9B84-98D424F1B922-scaled-e1593062496337-1024x658.jpeg'
]

const CarouselCards = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View>
            <Carousel 
                layout='default'
                layoutCardOffset={9}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH+20}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <Pagination
                dotsLength={images.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />
        </View>
    )
}

export default CarouselCards