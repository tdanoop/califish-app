import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>About Us Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default AboutUsScreen;