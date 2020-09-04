import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, ScrollView } from 'react-native';

const CardList = props => {
    return (
        <View>
                <View style={{margin:20}}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 60,
                            
                            backgroundColor: '#fff',
                            borderRadius: 5,
                            backgroundColor: 'red',
                        }}
                    >
                        <Image
                            style={{ width: '80%', height: '80%', resizeMode: 'contain' }}
                            source={require('../../assets/app-images/backwater.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.category}>{props.demandItem.name}</Text>
                </View>

            
        </View>

    )

}

const styles = StyleSheet.create({



});

export default CardList;
