import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import CardDisplay from '../../components/UI/CardDisplay';
import PriceDisplay from '../../components/UI/PriceDisplay';
import AppImages from '../../constants/images';
import { HeaderBackButton } from '@react-navigation/stack';

const ProductListScreen = ({ route, navigation:{ goBack } }, props) => {
    const { itemId } = route.params;
    const demandList = [
        { id: 1, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#e4e4e4' },
        { id: 2, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#fcecef' },
        { id: 3, name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', background: '#e3ecf3' },
        { id: 4, name: 'Fish Combo', image: '../../assets/app-images/combo.png', background: '#e8ecdf' },
        { id: 5, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#fcecef' },
        { id: 6, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#f6efe8' },
    ]
    return (

        <View style={styles.fishListWrap} >
            {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
            <Button
         onPress={() => goBack()}
        title="Info"
        color="black"
      />
            <Text style={styles.title1} onPress={() => goBack()}>Sea Food</Text>
            {demandList.map((demandItem) => (
                <View  key={demandItem.id} style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop:20 }}>
                    
                    <View style={styles.sliderWrap}>        
                <TouchableOpacity style={{ ...styles.slcard, ...props.style }}>
                    <Image
                        style={styles.slimage}
                        source={require(`../../assets/app-images/backwater.png`)}
                        // source={AppImages.fishes[props.demandItem.id]}
                    />
                </TouchableOpacity>      
        </View>


                   <View style={styles.contentWrap}>
            <Text style={styles.cotitle}>Test Name</Text>
            
            <View style={{ alignContent: 'flex-start', flexDirection: 'row', marginTop: 5 }}>

            <View style={{width:'50%', alignContent: 'flex-start', flexDirection: 'row' }}>
            <Image style={styles.coplusIcon} source={require(`../../assets/app-images/negative.png`)} />
                <Text style={styles.cokilogram}>1.00 Kg</Text>
            </View>
            <View style={{width:'50%', alignContent: 'flex-start', flexDirection: 'row' }}>
            <Image style={styles.coplusIcon} source={require(`../../assets/app-images/plus.png`)} />
            <Text style={styles.coprice}>₹550</Text>
            </View>


            </View>
        </View>


                </View>
))}
        </View>

    )
}

const styles = StyleSheet.create({
    fishListWrap: {
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15
    },
    title1: {
        fontSize: 14, color: '#000a11', paddingLeft: 0, paddingTop: 10, paddingBottom: 0, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },

    contentWrap: { backgroundColor: '#fff', paddingLeft: 0, paddingRight: 0, paddingBottom: 0, width:'60%' },
    cotitle: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'left',
        color: '#0d539a',
        fontFamily: 'Montserrat_800ExtraBold'
    },
    cokilogram: {
        marginTop: 1,
        fontSize: 12,
        color: '#000a11',
        textAlign: 'left',
        fontFamily: 'Montserrat_300Light'
    },
    coprice: {
        marginTop: 0,
        fontSize: 13,
        color: '#000a11',
        textAlign: 'left',
        fontFamily: 'Montserrat_800ExtraBold',
    },
    coplusIcon: {
        width: 18,
        height: 18,
        marginRight: 10
    },

    sliderWrap: { backgroundColor: '#fff', paddingLeft: 0, paddingRight: 0, paddingBottom: 0, width:'40%' },
    slcard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 85,
        backgroundColor: '#fff',
        borderRadius: 8,
        backgroundColor: 'red',
    },
    slimage: {
        width: '80%', 
        height: '80%', 
        resizeMode: 'contain'
    }
});

export default ProductListScreen;