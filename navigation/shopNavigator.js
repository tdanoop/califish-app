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
import { Platform, Button, Image, View,Text } from 'react-native';
import HeaderButton from '../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();


const ShopNavigator = () => {

    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom:0,paddingLeft:20,paddingRight:20,paddingTop:40,paddingBottom:20, borderBottomWidth:1,borderBottomColor:'#d8d8d8' }}>
    
            <View style={{ width: '70%',justifyContent: 'flex-start', flexDirection: 'row', alignItems:"flex-end" }}>
            <View style={{ }}>
                <Image style={{ width: 18, height: 12,marginTop:4 }}  source={require('../assets/app-images/handburger.png')}/></View>
                <View style={{ }}>
                <Image style={{ width: 83, height: 18,marginLeft:20 }}  source={require('../assets/app-images/logo.jpg')}/></View>
            </View>
    
    
            <View style={{ width: '30%',justifyContent: 'space-between', flexDirection: 'row', alignItems:"flex-end" }}>
            <View style={{ }}><Image style={{ width: 15, height: 15 }}  source={require('../assets/app-images/search.png')}/></View>
            <View style={{ }}><Image style={{ width: 13, height: 15 }}  source={require('../assets/app-images/locartion.png')}/></View>
            <View style={{ }}>
            <Text style={{position:'absolute',top:-14,right:0,backgroundColor:"#cdecfc",fontSize:8,color:'#0d539a',fontWeight:'bold',paddingLeft:5,paddingRight:5,paddingTop:1,paddingBottom:1,borderRadius:3}}>3</Text>
                <Image style={{ width: 23, height: 14 }}  source={require('../assets/app-images/basket.png')}/>
                </View>
            </View>
    
        </View>
        )

    // const createMaterialBottomTabs = () => {
    //     return (
    //         <MaterialBottomTabs.Navigator>
    //             <MaterialBottomTabs.Screen name='Product Overview' component={ProductsOverviewScreen} />
    //             <MaterialBottomTabs.Screen name='Details' component={ProductListScreen} />
    //         </MaterialBottomTabs.Navigator>
    //     )
    // }

    const LogoTitle = () => {
        return (
            <View style={{}}>
                <Image
                    style={{ width: 20, height: 20 }}
                    //style={{ width: '80%', height: '80%',resizeMode:'contain'}}
                    source={require('../assets/app-images/basket.png')}
                // source={{
                //     uri: 'https://reactnative.dev/img/tiny_logo.png',
                //   }}
                />
            </View>
        );
    }

    const createHomeStack = ({ navigation }) => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Product Overview' component={ProductsOverviewScreen}
                    options={{
                        headerTitle: props => <LogoTitle {...props} />,
                        headerLeft: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Item title='Menu'
                                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                                    onPress={() => { navigation.toggleDrawer() }} />
                            </HeaderButtons>
                        ),
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                                <Image
                                    style={{ width: 25, height: 25 ,resizeMode:'contain'}}
                                    //style={{ width: '80%', height: '80%',}}
                                    //style={{ width: '100%', height: '100%'}}
                                    source={require('../assets/app-images/basket.png')}

                                />
                                {/* <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}/> */}
                            </HeaderButtons>
                        )
                    }}
                />
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
