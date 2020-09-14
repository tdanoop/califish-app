import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { SliderBox } from "react-native-image-slider-box";


const images = [
    "../../assets/app-images/slider-image-1.jpg",
    "../../assets/app-images/slider-image-1.jpg",
    "../../assets/app-images/slider-image-1.jpg",
    "../../assets/app-images/slider-image-1.jpg",
    require('../../assets/favicon.png'),
]
const SliderImage = props => {

    return (
        <View style={styles.container}>
            <SliderBox
               circleLoop = {false}
                sliderBoxHeight={180}
                dotColor="#FFEE58"
                inactiveDotColor="#536f87"
                images={images}
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1
    }
});

export default SliderImage;