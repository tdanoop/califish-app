import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

const CategoryCard = props => {
    return (
        <View>
            <TouchableOpacity
                style={styles.card}
            >
                <Image
                    style={styles.image}
                    source={require(`../../assets/app-images/seafood.png`)}
                />
            </TouchableOpacity>
    <Text style={styles.categoryName}>{props.catItem.name}</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    card: {
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 65,
        height: 65,
        backgroundColor: '#fff',
        borderRadius: 35,
        backgroundColor: 'red'
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    categoryName: {
        //borderWidth:2
    },

});

export default CategoryCard;
