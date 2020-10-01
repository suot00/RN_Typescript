import {createStackNavigator} from 'react-navigation-stack';
// import MainScreen from '../screens/MainScreen';
import Drawernavigator from './DrawerNavigator';
const AppNavigation = createStackNavigator(
  {
    Drawer: {screen: Drawernavigator},
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
  },
);

export default AppNavigation;
