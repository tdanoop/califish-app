import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
import AppImages from '../../constants/images';

const CategoryCard = props => {
    return (
        <View>
            <TouchableOpacity
                style={{...styles.card,...props.style}}
            >
                <Image
                    style={styles.image}
                    source={AppImages.category[props.catItem.id]}
                />
            </TouchableOpacity>
    <Text style={styles.title}>{props.catItem.name}</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 55,
        height: 55,
        borderRadius: 30, marginLeft:'auto', marginRight:'auto'
    },
    image: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain'
    },
    title: {
        //borderWidth:2
        marginTop:10, fontSize:12,color:'#000a11', textAlign:'center' , backgroundColor: '#fff', fontFamily:'Montserrat_500Medium'
    },

});

export default CategoryCard;
