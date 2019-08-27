import React, { PureComponent } from 'react';
import {
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
        this.setState((state, props) => { 
            return {
                isTyping: event
            }
        });


        if (this.state.isTyping.length > 0) {
            Animated.sequence([
                Animated.timing(
                    this.state.animations.shrinkAnimation,
                    {
                        toValue: 80,
                        duration: 1000,
                    }
                ).start(),
                Animated.timing(
                    this.state.animations.fadeInAnimation,
                    {
                        toValue: 1,
                        duration: 1000,
                    }
                ).start()
            ]);
        } else if (this.state.transition) {
            Animated.timing(
                this.state.animations.fadeInAnimation,
                {
                    toValue: 0,
                    duration: 5000
                }
            ).start();
        }

        this.props.searchHandler(event);
    }

    render() {
        let x = null;
        let y = null;

        if (this.state.isTyping.length > 0) {
            x = this.state.animations.shrinkAnimation.interpolate({
                inputRange: [1, 80],
                outputRange: ['100%', '80%']
            });
            y = this.state.fadeInAnimation;
        } else if (this.state.transition) {
            y = this.state.animations.fadeInAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0]
            });
        }

        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.formContainer}>
                    <Animated.View style={[styles.searchContainer, { width: x }]}>
                        <SearchIcon
                            height={15}
                            width={15}
                            iconColor="#6DA7D3"
                            style={styles.icon}
                        />
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={this.onInputChange}
                            placeholderTextColor="#6DA7D3"
                            placeholder="Search"
                            returnKeyType="go"
                            autoFocus={true}
                            ref={input => this.searchInput = input}
                        />
                    </Animated.View>
                    {
                        this.state.isTyping.length > 0 ?
                            <Animated.Text
                                style={[
                                    styles.cancelBtn,
                                    { opacity: y }
                                ]}
                            >
                                Cancel
                            </Animated.Text> 
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