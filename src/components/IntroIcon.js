import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import CocktailIcon from '../assets/icons/CocktailIcon';

const IntroIcon = () => (
    <View>
        <CocktailIcon style={styles.icon} />
    </View>
);

const styles = StyleSheet.create({
    icon: {
        marginLeft: 35,
    }
});

export default IntroIcon;