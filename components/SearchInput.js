import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
} from 'react-native';

import SearchIcon from '../assets/icons/SearchIcon';

class SearchInput extends Component {
    async componentDidMount() {
        await setTimeout(() => {
            this.searchInput.focus();
        }, 100);
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.formContainer}>
                    <View style={styles.searchContainer}>
                        <SearchIcon
                            height={15}
                            width={15}
                            iconColor="#6DA7D3"
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.searchInput}
                            onChange={this.props.searchHandler}
                            placeholderTextColor="#6DA7D3"
                            placeholder="Search"
                            returnKeyType="go"
                            autoFocus={true}
                            ref={input => this.searchInput = input}
                        />
                    </View>
                    <Text style={styles.cancelBtn}>Cancel</Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: '#6DA7D3',
        justifyContent: 'center'
    },
    formContainer: {
        flexDirection: "row",
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: 'space-around'
    },
    searchContainer: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        paddingRight: 40,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: 'white',
        borderRadius: 10
    },
    searchInput: {
        width: "100%",
        marginLeft: 10,
        color: '#6DA7D3'
    },
    icon: {
        alignSelf: "center",
    },
    cancelBtn: {
        color: 'white'
    }
});

export default SearchInput;