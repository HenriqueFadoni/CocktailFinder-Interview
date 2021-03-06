import React, { Component } from 'react';
import {
    View,
    TextInput,
    KeyboardAvoidingView,
    Animated,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

// Importing Components
import SearchIcon from '../../assets/icons/SearchIcon';
import CancelBtn from './CancelBtn/CancelBtn';

class SearchInput extends Component {
    state = {
        isTyping: '',
        opacityAnimation: new Animated.Value(0)
    }

    // Handling Focus on IOS
    componentDidMount() {
        setTimeout(() => {
            this.searchInput.focus();
        }, 10);
    }

    onInputChange = event => {
        // Handling Animations
        const { isTyping, opacityAnimation } = this.state

        if (event.trim() !== '') {
            // When the User Start Typing
            if (event.length > 2 && isTyping.length <= 2) {
                opacityAnimation.setValue(0);

                Animated.timing(opacityAnimation, {
                    toValue: 1,
                    duration: 200
                }).start();
                // When the User Deletes Everything Manually
            } else if (event.length <= 2 && isTyping.length >= 2) {
                Animated.timing(opacityAnimation, {
                    toValue: 0,
                    duration: 200
                }).start();
            }
        }

        // Adjusting the State
        this.setState({ isTyping: event.trim() });
        this.props.searchHandler(event.trim());
    }

    onInputReset = () => {
        // Handling Animation When the User Deletes Everything
        const { opacityAnimation } = this.state

        opacityAnimation.setValue(1);

        Animated.timing(opacityAnimation, {
            toValue: 0,
            duration: 200
        }).start();

        // Adjusting the State
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
                    <View style={styles.searchContainer}>
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
                        <CancelBtn
                            onCancel={this.onInputReset}
                            opacityAnimation={this.state.opacityAnimation}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        backgroundColor: "#6DA7D3",
        justifyContent: "center"
    },
    formContainer: {
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    searchContainer: {
        height: 40,
        width: "100%",
        paddingLeft: 10,
        paddingRight: 20,
        flexDirection: "row",
        alignSelf: "flex-start",
        backgroundColor: "white",
        borderRadius: 10
    },
    searchInput: {
        width: "80%",
        marginLeft: 10,
        color: "#6DA7D3"
    },
    icon: {
        alignSelf: "center",
    }
});

export default SearchInput;

SearchInput.protoType = {
    searchHandler: PropTypes.func.isRequired
}