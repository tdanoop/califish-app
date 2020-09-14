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
        { id: 1,name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#428edb' },
        { id: 2,name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#7a8151' },
        { id: 3,name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', background: '#c28551' },
        { id: 4,name: 'Fish Combo', image: '../../assets/app-images/combo.png', background: '#003d63' }
    ]

    const demandList = [
        { id: 1, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#003d63' },
        { id: 2, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#7a8151' },
        { id: 3, name: 'Dried/Pickle', image: '../../assets/app-images/dried.png', background: '#c28551' },
        { id: 4, name: 'Fish Combo', image: '../../assets/app-images/combo.png', background: '#428edb' },
        { id: 5, name: 'SeaFood', image: '../../assets/app-images/seafood.png', background: '#003d63' },
        { id: 6, name: 'BackWater', image: '../../assets/app-images/backwater.png', background: '#7a8151' },
    ]

    const checkAction = () => {
        //dispatch(productAction.getProducts());
        //dispatch({type:'PRODUCTS',payload:'Next value'})
    }
    //console.log('loader : ', loader);
    return (
        <ScrollView showsHorizontalScrollIndicator={false} >
            <View style={styles.categoryWrapper} cssc>
                {categoryList.map((catItem) => (<CategoryCard key={catItem.id} catItem={catItem} style={{backgroundColor:catItem.background}}/>))}
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
                    {demandList.map((demandItem) => (<CardList key={demandItem.id} demandItem={demandItem}  style={{backgroundColor:demandItem.background}}/>))}
                
                </ScrollView>
            </View>
            
            <TwoColImageList />

            <SuperSaverList />


        </ScrollView>


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
        paddingLeft:10, paddingRight:10,backgroundColor: '#fff',
    },
    freshWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    title: {
        fontSize:14,color:'#000a11',  paddingLeft:5,  paddingTop:20,paddingBottom:10, backgroundColor: '#fff', fontFamily:'Montserrat_800ExtraBold'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tetet:{
        backgroundColor:'green'
    }
});

export default ProductOverviewScreen;