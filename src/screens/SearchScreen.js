import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import PropTypes from 'prop-types';

// Importing Components
import SearchInput from '../components/SearchInput/SearchInput';
import CocktailItems from '../components/CocktailItems/CocktailItems'

class SearchScreen extends Component {
    // Styling the Navigation
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#6DA7D3',
            borderBottomWidth: 0,
            elevation: 0
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            color: 'white',
        },
    };

    state = {
        isSearching: false,
        drinkName: '',
    }

    // Handling the User Input
    searchHandler = event => {
        const newDrinkName = event;

        if (newDrinkName.length >= 3) {
            this.setState({ isSearching: true });
            this.props.fetchData(newDrinkName);
        } else {
            this.setState({ isSearching: false });
        }

        this.setState({ drinkName: newDrinkName });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#6DA7D3"
                    barStyle="light-content"
                />
                <SearchInput searchHandler={this.searchHandler} />
                <CocktailItems
                    drinkName={this.state.drinkName}
                    isSearching={this.state.isSearching}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

// Handling Redux Calls
const mapDispatchToProps = dispatch => {
    return {
        fetchData: drinkName => dispatch(actions.fetchCocktails(drinkName))
    }
}

export default connect(null, mapDispatchToProps)(SearchScreen);

// Prop-Types
SearchScreen.protoType = {
    fetchData: PropTypes.func.isRequired
}