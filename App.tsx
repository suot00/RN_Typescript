/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppContanier from './navigation/text';

export default function App() {
  return (
    <NavigationContainer>
      <AppContanier />
    </NavigationContainer>
  );
}
