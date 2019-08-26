import React, { Component } from 'react';
import {
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const CocktailItems = props => (
    <FlatList
        keyExtractor={cocktail => cocktail.idDrink.toString()}
        // onRefresh={async () => await }
        refreshing={props.isLoading ? true : false}
        contentContainerStyle={{ paddingBottom: 100 }}
        data={props.cocktailList}
        renderItem={({ item }) =>  <Text>{item.strDrink}</Text>}
    />
);

const styles = StyleSheet.create({
});

const mapStateToProps = state => {
    return {
        cocktailList: state.cocktail.cocktailList
    }
}

export default connect(mapStateToProps)(CocktailItems);