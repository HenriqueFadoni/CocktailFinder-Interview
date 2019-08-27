import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import PropTypes from 'prop-types';

// Importing Component
import CocktailItem from './CocktailItem';

const CocktailItems = props => (
    <FlatList
        keyExtractor={cocktail => cocktail.idDrink.toString()}
        onRefresh={async () => await props.fetchData(props.drinkName)}
        refreshing={props.isLoading ? true : false}
        contentContainerStyle={{ paddingBottom: 100 }}
        data={
            props.isSearching ?
                props.cocktailList :
                null
        }
        renderItem={({ item }) => (
            <CocktailItem item={item} />
        )}
    />
);

// Handling Redux
const mapStateToProps = state => {
    return {
        cocktailList: state.cocktail.cocktailList,
        isLoading: state.cocktail.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: drinkName => dispatch(actions.fetchCocktails(drinkName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailItems);

// Prop-Types
CocktailItems.prototype = {
    drinkName: PropTypes.string.isRequired,
    isSearching: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    cocktailList: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchData: PropTypes.func.isRequired
}