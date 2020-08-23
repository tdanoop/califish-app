import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as productAction from '../../store/actions/productsActions'

const ProductOverviewScreen = ({ navigation }, props) => {
    const products = useSelector(state => state.productsReducer.products);
    const loader = useSelector(state => state.productsReducer.loading);
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(productAction.getProducts());
    }, [])

    const checkAction = () => {
        dispatch(productAction.getProducts());
        //dispatch({type:'PRODUCTS',payload:'Next value'})
    }
    console.log('loader : ',loader);
    return (
        <View style={styles.screen}>
            <Text>Products Overview Screen + {products}</Text>
            <Button title="Action" onPress={checkAction} />
            <Button title="Details" onPress={() => navigation.navigate('Details', { name: 'Product List' })} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default ProductOverviewScreen;