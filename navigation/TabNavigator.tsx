import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  ListCourseStackNavigator,
  SettingStackNavigator,
} from './StackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'ListCourse') {
            iconName = 'albums';
          }
          if (route.name === 'Setting') {
            iconName = 'settings';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="ListCourse" component={ListCourseStackNavigator} />
      <Tab.Screen name="Setting" component={SettingStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
