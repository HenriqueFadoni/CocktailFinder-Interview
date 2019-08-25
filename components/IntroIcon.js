import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import CocktailIcon from '../assets/icons/CocktailIcon';

const IntroIcon = () => (
    <View>
        <CocktailIcon />
    </View>
);

const styles = StyleSheet.create({
    icon: {
        marginLeft: 35,
        color: 'white'
    }
});

export default IntroIcon;