import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import SearchInput from '../components/SearchInput';
import CocktailItems from '../components/CocktailItems'

class SearchScreen extends Component {
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
        isLoading: false,
        drinkName: '',
    }

    searchHandler = async(event) => {
        const newDrinkName = event;

        if (newDrinkName.length >= 3) {
            this.setState({ 
                isSearching: true,
                isLoading: true
            });
            await this.props.fetchData(newDrinkName);
            this.setState({ isLoading: false })
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
                <SearchInput
                    isSearching={this.state.isSearching}
                    searchHandler={this.searchHandler}
                />
                <CocktailItems
                    isSearching={this.state.isSearching}
                    isLoading={this.state.isLoading}
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

const mapDispatchToProps = dispatch => {
    return {
        fetchData: drinkName => dispatch(actions.fetchCocktails(drinkName))
    }
}

export default connect(null, mapDispatchToProps)(SearchScreen);