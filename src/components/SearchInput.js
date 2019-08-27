import React, { PureComponent } from 'react';
import {
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    StyleSheet,
} from 'react-native';

import SearchIcon from '../assets/icons/SearchIcon';

class SearchInput extends PureComponent {
    state = {
        isTyping: '',
        transition: false,
        animations: {
            fadeInAnimation: new Animated.Value(0),
            shrinkAnimation: new Animated.Value(1)
        }
    }

    async componentDidMount() {
        await setTimeout(() => {
            this.searchInput.focus();
        }, 10);
    }

    onInputChange = async (event) => {
        if (event.trim() !== '') {
            this.setState({ isTyping: event.trim() });
            this.props.searchHandler(event.trim());
        }
    }

    onInputReset = () => {
        this.setState({ isTyping: '' });
        this.props.searchHandler('');
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.formContainer}>
                    <View style={[styles.searchContainer, { width: "80%" }]}>
                        <SearchIcon
                            height={15}
                            width={15}
                            iconColor="#6DA7D3"
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.searchInput}
                            value={this.state.isTyping}
                            onChangeText={this.onInputChange}
                            placeholderTextColor="#6DA7D3"
                            placeholder="Search"
                            returnKeyType="go"
                            autoFocus={true}
                            ref={input => this.searchInput = input}
                        />
                    </View>
                    {
                        this.state.isTyping.length > 0 ?
                            <Text
                                style={[
                                    styles.cancelBtn,
                                    { opacity: 1 }
                                ]}
                                onPress={this.onInputReset}
                            >
                                Cancel
                            </Text>
                            : null
                    }
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
        justifyContent: 'space-between'
    },
    searchContainer: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: 'white',
        borderRadius: 10
    },
    searchInput: {
        width: "95%",
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