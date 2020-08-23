import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaymentStatusScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Payment Status Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default PaymentStatusScreen;