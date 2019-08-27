# CocktailFinder

## How to Run?
Just Download the Application with `NPM INSTALL`, and, additionally,
if needed follow the DOCS on how to link `react-native-svg` to your emulator ( IOS / Android ). 
As well as, `react-navigation` Documentation.

# Libs used:
- React ( 16.8.3 )
- React Native ( 0.59.9 )
- React Native Svg ( https://github.com/react-native-community/react-native-svg ) ( ^9.6.4 )
- React Native Gesture Handler ( ^1.2.0 )**
- React Native Reanimated ( ^1.2.0 )**

- React Navigation ( https://reactnavigation.org/ ) ( ^3.12.0 )
- Redux (^4.0.4) / React-Redux ( ^5.1.1 )**
- Redux Thunk ( ^2.3.0 )
- Prop-Types ( ^15.7.2 )
- Axios ( ^0.19.0 )

Obs: Please be careful with the versions that are marked (**).

## How the list can be more performant if it has to manage a big amount of data?

This list can be a good fit for highly stressful environments because of four main factors. 

First, this program not only has fewer Stateful Components. But, also, takes advantage of React Native, for instance, it uses
`FlatList` which constrains the amount of data loaded to the user screen, therefore reducing processing and loading time.

Second, the code written uses the state on a smarter way minimizing `setState` and Redux calls in order to again save up processing.

Third, Redux helps the application pass props through the components and fetch Data only when it is necessary. With that
our application has more indepency in order to run in 60FPS.

Last but not least, this small mobile app tries to avoid methods that somehow delay processing, for example `componentShouldUpdate`(re-render calls). And, makes use of other methods instead.

On the other hand, in order to manage a bigger amount of data, we would need to not only apply the methods described earlier as using more native methods and less Redux calls. Moreover, it would be interesting to adding pagination on the Back-End, and, furthermore, restraining the amount of API and Redux calls on the Front-End. Additionally, we would need to be extra careful on how we manipulate our `setStates`, inasmuch as it can be Asynchronous, state management and animations.
