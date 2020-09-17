import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const ProductDetailScreen = ({ navigation: { goBack } },props) => {
    return (
        <View style={styles.screen}>
            <Button
                onPress={() => goBack()}
                title="Info"
                color="black"
            />
            <Text>Product Detail Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default ProductDetailScreen;