import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    StatusBar
} from 'react-native';

import SearchInput from '../components/SearchInput';

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
        drinkName: '',
    }

    searchHandler = event => {
        const { isSearching } = this.state;
        const newDrinkName = event.target.value;

        if (isSearching.length >= 3) {
            this.setState({ isSearching: true });
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
                    searchHandler={this.searchHandler}
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

export default SearchScreen;