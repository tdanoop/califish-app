import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddressListScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Address List Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AddressListScreen;