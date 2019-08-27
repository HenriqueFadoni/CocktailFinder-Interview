import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import PropTypes from 'prop-types';

// Importing Components
import IntroIcon from '../components/IntroIcon';
import Title from '../components/Title';
import SearchBtn from '../components/SearchBtn';

class WelcomeScreen extends Component {
  // Taking out Header from HomeScreen
  static navigationOptions = {
    header: null
  }

  nextScreenHandler = () => {
    this.props.navigation.navigate({ routeName: 'searchScreen' });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#6DA7D3"
          barStyle="light-content"
        />
        <IntroIcon />
        <Title />
        <SearchBtn clickHandler={this.nextScreenHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6DA7D3"
  }
});

export default WelcomeScreen;

// Prop-Types
WelcomeScreen.protoType = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
}