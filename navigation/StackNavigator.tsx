import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListCourseScreen from '../screens/ListCourseScreen';
import SettingScreen from '../screens/SettingScreen';
import DetailCourseScreen from '../screens/DetailCourseScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ListCourseStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ListCourse" component={ListCourseScreen} />
      <Stack.Screen name="DetailCourse" component={DetailCourseScreen} />
    </Stack.Navigator>
  );
};
const SettingStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ListCourseStackNavigator, SettingStackNavigator};
