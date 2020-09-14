import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const CardList = props => {
    return (
        <View style={styles.sliderWrap}>
                <View style={{}}>
                    <TouchableOpacity style={{...styles.card,...props.style}}
                        
                    >
                        <Image style={styles.image}
                            source={require('../../assets/app-images/backwater.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{props.demandItem.name}</Text>
                    <Text style={styles.kilogram}>1.00 Kg</Text>

                </View>
                <View style={{alignContent: 'stretch',flexDirection: 'row',marginTop:5}}>
                <Text style={styles.price}>₹550</Text>
                <Image source={require(`../../assets/app-images/plus.png`)} style={{ width:18,height:18 }} />
                </View>

            
        </View>

    )

}

const styles = StyleSheet.create({
    sliderWrap:{backgroundColor: '#fff', paddingLeft:5, paddingRight:5},
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
        //borderWidth:2
        marginTop:5, fontSize:12, textAlign:'left', color:'#0d539a',fontWeight:'bold'
    },
    kilogram: {
        //borderWidth:2
        marginTop:3, fontSize:12,color:'#000a11', textAlign:'left', fontWeight:'normal'
    },
    image: {
        width: '80%', height: '80%', resizeMode: 'contain'
    },price: {
        //borderWidth:2
        marginTop:0, fontSize:13,color:'#000a11', textAlign:'left', fontWeight:'bold', width:'50%'
    }

});

export default CardList;
