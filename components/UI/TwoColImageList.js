import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import AppImages from '../../constants/images';

const TwoColImageList = props => {

    return (
        <View>
            <TouchableOpacity style={{ ...styles.imgWrap, ...props.style }}>
                <Image style={styles.image}
                    source={AppImages.fishes[props.demandItem.id]}
                />
            </TouchableOpacity>
            <Text style={styles.titleName}>Sword Fish/ Local Name</Text>
            <Text style={styles.kilogram}>1.00 Kg</Text>
            <View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop: 5 }}>
                <Text style={styles.price}>₹550</Text>
                <Image style={styles.plusIcon} source={require(`../../assets/app-images/plus.png`)} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    fishListWrap: { backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10 },
    title: {
        fontSize: 14, color: '#000a11', paddingLeft: 5, paddingTop: 40, paddingBottom: 10, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },
    titleName: {
        fontSize: 14, color: '#0d539a', paddingLeft: 0, paddingTop: 0, paddingBottom: 5, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },
    imgWrap: {
        alignItems: 'center', justifyContent: 'center', width: '100%', height: 110, borderRadius: 8, backgroundColor: 'red', marginBottom: 5
    },
    image: { width: '60%', height: '60%', resizeMode: 'contain' },
    price: {
        //borderWidth:2
        marginTop: 0, fontSize: 13, color: '#000a11', textAlign: 'left', fontFamily: 'Montserrat_800ExtraBold',
    },
    plusIcon: { width: 18, height: 18, marginLeft: 15 },
    button: {
        padding: 10, backgroundColor: '#0d539a', fontSize: 13, color: '#ffffff', fontFamily: 'Montserrat_400Regular', textAlign: "center", borderRadius: 5, marginBottom: 20
    },
    kilogram: {
        //borderWidth:2
        marginTop: 0, fontSize: 12, color: '#000a11', textAlign: 'left', fontFamily: 'Montserrat_300Light'
    },
});

export default TwoColImageList;