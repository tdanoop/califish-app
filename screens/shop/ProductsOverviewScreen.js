import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as productAction from '../../store/actions/productsActions';
import SliderImage from '../../components/UI/SliderImage';
import CategoryCard from '../../components/UI/CategoryCard';
import CardList from '../../components/UI/CardList';

const ProductOverviewScreen = ({ navigation }, props) => {
    const products = useSelector(state => state.productsReducer.products);
    const loader = useSelector(state => state.productsReducer.loading);

    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(productAction.getProducts());
    }, [])

    const categoryList = [
        { id: 1,name: 'SeaFood', image: '../../assets/app-images/seafood.png', backgroundColor: '#428edb' },
        { id: 2,name: 'BackWater', image: '../../assets/app-images/backwater.png', backgroundColor: '#7a8151' },
        { id: 3,name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', backgroundColor: '#c28551' },
        { id: 4,name: 'Fish Combo', image: '../../assets/app-images/combo.png', backgroundColor: '#003d63' }
    ]

    const demandList = [
        { id: 1, name: 'SeaFood', image: '../../assets/app-images/seafood.png', backgroundColor: 'red' },
        { id: 2, name: 'BackWater', image: '../../assets/app-images/backwater.png', backgroundColor: 'blue' },
        { id: 3, name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', backgroundColor: 'green' },
        { id: 4, name: 'Fish Combo', image: '../../assets/app-images/combo.png', backgroundColor: 'yellow' },
        { id: 5, name: 'SeaFood', image: '../../assets/app-images/seafood.png', backgroundColor: 'red' },
        { id: 6, name: 'BackWater', image: '../../assets/app-images/backwater.png', backgroundColor: 'blue' },
    ]

    const checkAction = () => {
        //dispatch(productAction.getProducts());
        //dispatch({type:'PRODUCTS',payload:'Next value'})
    }
    //console.log('loader : ', loader);
    return (
        <ScrollView showsHorizontalScrollIndicator={false} >
            <View style={styles.categoryWrapper} cssc>
                {categoryList.map((catItem) => (<CategoryCard key={catItem.id} catItem={catItem} />))}
            </View>
            <SliderImage />
            <View style={styles.demandWrapper}>
                <Text style={styles.category}>Fish on Demand</Text>

                <ScrollView
                    contentContainerStyle={{
                        //width: 1000,
                        justifyContent: 'space-around'
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                >
                    {demandList.map((demandItem) => (<CardList key={demandItem.id} demandItem={demandItem} />))}
                
                </ScrollView>
            </View>
            <View >
                <FlatList
                  
                    //key={demandList ? 1 : 0}
                    keyExtractor={(item, index) => item.id}
                    data={demandList}
                    renderItem={(demandItem) => (
                        <CardList demandItem={demandItem} />
                    )}
           
                    style={{ margin:5 }}
                    numColumns={2}
                    contentContainerStyle={{ 
                        //width: 1000,
                        //justifyContent: 'space-around'
                         }}
                />
            </View>



        </ScrollView>
        // <View style={styles.screen}>
        //     <Text>Products Overview Screen + {products}</Text>
        //     <Button title="Action" onPress={checkAction} />
        //     <Button title="Details" onPress={() => navigation.navigate('Details', { name: 'Product List' })} />
        // </View>

    );
}

const styles = StyleSheet.create({
    categoryWrapper: {
        paddingTop:30, paddingBottom:20, backgroundColor:'#fff',
        //borderWidth: 2,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    demandWrapper: {
        //height: 140,
        //paddingTop: 0,
        //borderWidth: 2,
        //alignItems: "center",
        //flexDirection: "row",
        //justifyContent: 'space-around'
    },
    freshWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    category: {
        //borderWidth:2
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductOverviewScreen;