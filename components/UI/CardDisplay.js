import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import AppImages from '../../constants/images';
import PriceList from './PriceDisplay';
import { useNavigation } from '@react-navigation/native';

const CardDisplay = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.sliderWrap}>        
                <TouchableOpacity style={{ ...styles.card, ...props.style }}
                onPress={() => navigation.navigate('Details', {
                    name: 'Product Details',
                    itemId: props.demandItem.id
                })}>
                    <Image
                        style={styles.image}
                        source={AppImages.fishes[props.demandItem.id]}
                    />
                </TouchableOpacity>      
        </View>
    )
}

const styles = StyleSheet.create({
    sliderWrap: { backgroundColor: '#fff', paddingLeft: 0, paddingRight: 0, paddingBottom: 10 },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 8,
        backgroundColor: 'red',
    },
    title: {
        marginTop: 5, 
        fontSize: 12, 
        textAlign: 'left', 
        color: '#0d539a', 
        fontFamily: 'Montserrat_800ExtraBold'
    },
    kilogram: {
        marginTop: 3, 
        fontSize: 12, 
        color: '#000a11', 
        textAlign: 'left', 
        fontFamily: 'Montserrat_300Light'
    },
    image: {
        width: '80%', 
        height: '80%', 
        resizeMode: 'contain'
    }, price: {
        marginTop: 0, 
        fontSize: 13, 
        color: '#000a11', 
        textAlign: 'left', 
        fontFamily: 'Montserrat_800ExtraBold',
    },
    plusIcon: { 
        width: 18, 
        height: 18, 
        marginLeft: 15 
    }

});

export default CardDisplay;
