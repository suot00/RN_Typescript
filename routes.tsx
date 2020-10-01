// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import LoginScreen from './screens/LoginScreen';
// // import DashboardScreen from './screens/DashboardScreen';
// import AuthLoadingScreen from './screens/AuthLoadingScreen';
// // import ListCourseScreen from './screens/ListCourseScreen';
// // import HomeScreen from './screens/HomeScreen';
// // import SettingScreen from './screens/SettingScreen';
// import TabNavigator from './navigation/TabNavigator';
// import StackNavigator from './navigation/StackNavigator';
// import DrawerNavigator from './navigation/DrawerNavigator';

// const BeforeSignin = createStackNavigator(
//   {
//     Login: {
//       screen: LoginScreen,
//     },
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Login',
//   },
// );

// const AfterSignin = createStackNavigator(
//   {
//     Drawer: {
//       screen: DrawerNavigator,
//     },
//     Tab: {
//       screen: TabNavigator,
//     },
//     // Stack: {screen: StackNavigator},
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Drawer',
//   },
// );

// const AppNavigator = createStackNavigator(
//   {
//     Auth: BeforeSignin,
//     App: AfterSignin,
//     AuthLoadingScreen: AuthLoadingScreen,
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'Auth',
//   },
// );

// export default createAppContainer(AppNavigator);
