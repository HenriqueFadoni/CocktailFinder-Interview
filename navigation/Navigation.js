import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import welcomeScreen from '../screens/welcomeScreen';
import searchScreen from '../screens/searchScreen';

const Navigation = createStackNavigator(
    {
        welcomeScreen: {
            screen: welcomeScreen
        },
        searchScreen: {
            screen: searchScreen
        }
    },
    {
        initialRouteName: 'welcomeScreen'
    }
);

export default createAppContainer(Navigation);