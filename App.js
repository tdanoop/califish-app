import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ShopNavigator from './navigation/shopNavigator';
import CartScreen from './screens/shop/CartScreen';
import {AppLoading} from 'expo'
import { useFonts, Montserrat_100Thin,Montserrat_700Bold_Italic } from '@expo-google-fonts/montserrat'


import productsReducer from './store/reducers/productsReducer';
const rootReducer = combineReducers({
  productsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  let [fontsLoaded,error] = useFonts({
    Montserrat_100Thin,
    Montserrat_700Bold_Italic
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <Provider store={store}>
    <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
