import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Navigation = createStackNavigator(
    {
        welcomeScreen: {
            screen: WelcomeScreen
        },
        searchScreen: {
            screen: SearchScreen
        }
    },
    {
        initialRouteName: 'welcomeScreen'
    }
);

export default createAppContainer(Navigation);