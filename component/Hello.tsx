import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class Hello extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world !</Text>
      </View>
    );
  }
}

export default Hello;
