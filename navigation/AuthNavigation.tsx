import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
// import SettingScreen from '../screens/SettingScreen';

const AuthNavigation = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
    ResetPassword: {screen: ResetPasswordScreen},
    // Setting: {screen: SettingScreen},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default AuthNavigation;
