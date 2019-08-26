import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const CocktailItems = props => (
    <FlatList
        keyExtractor={cocktail => cocktail.idDrink.toString()}
        // onRefresh={async () => await }
        // refreshing={props.isLoading ? true : false}
        contentContainerStyle={{ paddingBottom: 100 }}
        data={props.cocktailList}
        renderItem={({ item }) => {
            console.log(item)
            return( 
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={{uri: item.strDrinkThumb}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.strDrink}</Text>
                </View>

            </View>
        )}}
    />
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 300,
        height: 100,
        margin: 10,
        padding: 15,
        borderRadius: 10,
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
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10
    }
});

const mapStateToProps = state => {
    return {
        cocktailList: state.cocktail.cocktailList
    }
}

export default connect(mapStateToProps)(CocktailItems);