import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const CocktailItem = props => (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={{ uri: props.item.strDrinkThumb }}
        />
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.item.strDrink}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 300,
        margin: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: "#6DA7D3",
        justifyContent: "flex-start",
        alignContent: "center",
        alignSelf: "center"
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: "flex-start",
        alignSelf: "center"
    },
    textContainer: {
        width: 200,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: 10
    }
});

export default CocktailItem;

// Prop-Types
CocktailItem.prototype = {
    item: PropTypes.shape({
        strDrinkThumb: PropTypes.string,
        strDrink: PropTypes.string
    }).isRequired
}