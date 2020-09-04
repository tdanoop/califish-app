import React from "react";
import { StyleSheet, Text, View } from "react-native"
import { SliderBox } from "react-native-image-slider-box";


const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    require('../../assets/favicon.png'),
]
const SliderImage = props => {

    return (
        <View style={styles.container}>
            <SliderBox
               circleLoop = {false}
                sliderBoxHeight={240}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
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