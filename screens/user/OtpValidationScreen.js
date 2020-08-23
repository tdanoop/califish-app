import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtpValidationScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Otp Validation Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default OtpValidationScreen;