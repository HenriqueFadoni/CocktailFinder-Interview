import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';

class SearchScreen extends Component {
    static navigationOptions = {
      headerStyle: {
        backgroundColor: '#6DA7D3'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
      },
    };


    state = {
        isSearching: false
    }

    searchHandler = () => {
        const { isSearching } = this.state;

        if (isSearching.length >= 3) {
            this.setState({ isSearching: true });
        } else {
            this.setState({ isSearching: false });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#6DA7D3'
                    barStyle='light-content'
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder='Search'
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        backgroundColor: '#6DA7D3',
        justifyContent: 'center'
    },
    searchInput: {
        alignSelf: 'center',
        color: 'white'
    }
});

export default SearchScreen;