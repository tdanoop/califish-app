import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddPincodeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Add Pincode Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AddPincodeScreen;