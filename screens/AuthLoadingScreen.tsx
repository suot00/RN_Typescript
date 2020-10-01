import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
export default class AuthLoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="0000ff" size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
