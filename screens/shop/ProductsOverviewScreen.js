import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as productAction from '../../store/actions/productsActions';
import SliderImage from '../../components/UI/SliderImage';
import CategoryCard from '../../components/UI/CategoryCard';
import CardList from '../../components/UI/CardList';
import TwoColImageList from '../../components/UI/TwoColImageList';
import SuperSaverList from '../../components/UI/SuperSaverList';

const ProductOverviewScreen = ({ navigation }, props) => {
    const products = useSelector(state => state.productsReducer.products);
    const loader = useSelector(state => state.productsReducer.loading);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     //dispatch(productAction.getProducts());
    // }, [])

    const categoryList = [
        { id: 1, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#428edb' },
        { id: 2, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#7a8151' },
        { id: 3, name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', background: '#c28551' },
        { id: 4, name: 'Fish Combo', image: '../../assets/app-images/combo.png', background: '#003d63' }
    ]

    const demandList = [
        { id: 1, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#e4e4e4' },
        { id: 2, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#fcecef' },
        { id: 3, name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', background: '#e3ecf3' },
        { id: 4, name: 'Fish Combo', image: '../../assets/app-images/combo.png', background: '#e8ecdf' },
        { id: 5, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#fcecef' },
        { id: 6, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#f6efe8' },
    ]

    const checkAction = () => {
        //dispatch(productAction.getProducts());
        //dispatch({type:'PRODUCTS',payload:'Next value'})
    }
    //console.log('loader : ', loader);
    return (
        <ScrollView showsHorizontalScrollIndicator={false} >
            <View style={styles.categoryWrapper} cssc>
                {categoryList.map((catItem) => (<CategoryCard key={catItem.id} catItem={catItem} style={{ backgroundColor: catItem.background }} />))}
            </View>
            <SliderImage />
            <View style={styles.demandWrapper}>
                <Text style={styles.title}>Fish on Demand</Text>

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
                    {demandList.map((demandItem) => (<CardList key={demandItem.id} demandItem={demandItem} style={{ backgroundColor: demandItem.background }} />))}

                </ScrollView>
            </View>


            <View style={styles.fishListWrap}>
                <Text style={styles.title1}>Fresh From Sea</Text>
                <View style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                }}>
                    {demandList.map((demandItem) => (<TwoColImageList key={demandItem.id} demandItem={demandItem} style={{ backgroundColor: demandItem.background }} />))}
                </View>
                <View >
                    <TouchableOpacity>
                        <Text style={styles.button}>View More</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <SuperSaverList />


        </ScrollView>


    );
}

const styles = StyleSheet.create({
    categoryWrapper: {
        paddingTop: 30, paddingBottom: 20, backgroundColor: '#fff',
        //borderWidth: 2,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    fishListWrap: {
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10
    },
    title1: {
        fontSize: 14, color: '#000a11', paddingLeft: 5, paddingTop: 40, paddingBottom: 10, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },
    demandWrapper: {
        //height: 140,
        //paddingTop: 0,
        //borderWidth: 2,
        //alignItems: "center",
        //flexDirection: "row",
        //justifyContent: 'space-around'
        paddingLeft: 10, paddingRight: 10, backgroundColor: '#fff',
    },
    freshWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    title: {
        fontSize: 14, color: '#000a11', paddingLeft: 5, paddingTop: 20, paddingBottom: 10, backgroundColor: '#fff', fontFamily: 'Montserrat_800ExtraBold'
    },
    button: {
        padding: 10, backgroundColor: '#0d539a', fontSize: 13, color: '#ffffff', fontFamily: 'Montserrat_400Regular', textAlign: "center", borderRadius: 5, marginBottom: 20
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tetet: {
        backgroundColor: 'green'
    }
});

export default ProductOverviewScreen;