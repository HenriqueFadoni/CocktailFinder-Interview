/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import Navigation from './src/navigation/Navigation';

// Reducers
import cocktailsReducer from './src/store/reducers/cocktails';

const rootReducer = combineReducers({
  cocktail: cocktailsReducer
});

// Store
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}