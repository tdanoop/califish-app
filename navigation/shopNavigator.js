import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import OrderScreen from '../screens/shop/OrdersScreen';
import AddressListScreen from '../screens/user/AddressListScreen';
import AboutUsScreen from '../screens/company/AboutUsScreen';
import ContactUsScreen from '../screens/company/ContactUsScreen';
import MyProfileScreen from '../screens/user/MyProfileScreen';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductListScreen from '../screens/shop/ProductsListScreen';
import colors from '../constants/colors';
import { Platform } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();


const ShopNavigator = () => {

    // const createMaterialBottomTabs = () => {
    //     return (
    //         <MaterialBottomTabs.Navigator>
    //             <MaterialBottomTabs.Screen name='Product Overview' component={ProductsOverviewScreen} />
    //             <MaterialBottomTabs.Screen name='Details' component={ProductListScreen} />
    //         </MaterialBottomTabs.Navigator>
    //     )
    // }

    const createHomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Product Overview' component={ProductsOverviewScreen} />
                <Stack.Screen name='Details' component={ProductListScreen} />
            </Stack.Navigator>
        )
    }
    
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' children={createHomeStack} />
                <Drawer.Screen name='My Profile' component={MyProfileScreen} />
                <Drawer.Screen name='Order' component={OrderScreen} />
                <Drawer.Screen name='Address' component={AddressListScreen} />
                <Drawer.Screen name='Contact Us' component={ContactUsScreen} />
                <Drawer.Screen name='About Us' component={AboutUsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )

}

export default ShopNavigator;
