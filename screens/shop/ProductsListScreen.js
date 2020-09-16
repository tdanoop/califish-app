import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import CardDisplay from '../../components/UI/CardDisplay';
import PriceDisplay from '../../components/UI/PriceDisplay';
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
                <View  key={demandItem.id} style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
                    <CardDisplay  demandItem={demandItem} style={{ backgroundColor: demandItem.background, height: 110 }} />
                    <PriceDisplay/>
                </View>
))}
        </View>

    )
}

const styles = StyleSheet.create({
    fishListWrap: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    },
    title1: {
        fontSize: 14, color: '#000a11', paddingLeft: 5, paddingTop: 10, paddingBottom: 10, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },
});

export default ProductListScreen;