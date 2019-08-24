import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import searchIcon from './search_icon.png';

const SearchBtn = props => (
    <TouchableOpacity
        style={styles.container}
        onPress={props.clickHandler}
    >
        <Image source={searchIcon} style={styles.icon} />
        <Text style={styles.textStyle}>
            Search Your Favorite Cocktail
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 35,
        width: '70%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 15,
        color: '#6DA7D3'
    },
    icon: {
        marginRight: 10,
        color: '#6DA7D3'
    }
});

SearchBtn.protoType = {
    clickHandler: PropTypes.func.isRequired
}


export default SearchBtn;