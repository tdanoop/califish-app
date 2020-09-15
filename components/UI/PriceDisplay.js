import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import AppImages from '../../constants/images';

const PriceDisplay = props => {
    return (
        <View>
            <Text style={styles.title}>Test Name</Text>
            <Text style={styles.kilogram}>1.00 Kg</Text>
            <View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop: 5 }}>
                <Text style={styles.price}>₹550</Text>
                <Image style={styles.plusIcon} source={require(`../../assets/app-images/plus.png`)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    price: {
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

export default PriceDisplay;
