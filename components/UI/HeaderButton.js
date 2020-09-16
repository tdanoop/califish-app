import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Colors from '../../constants/colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={27}
            color={Platform.OS === 'android' ? '#808080' : '#808080'}
        />
    )

}

export default CustomHeaderButton;
