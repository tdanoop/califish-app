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
        width: 55,
        height: 55,
        borderRadius: '100%',
        backgroundColor: 'red', margin:'auto'
    },
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain'
    },
    categoryName: {
        //borderWidth:2
        marginTop:10, fontSize:12,color:'#000a11', textAlign:'center'
    },

});

export default CategoryCard;
