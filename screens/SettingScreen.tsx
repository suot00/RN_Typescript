import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashboardWrapper}>
          <Text style={styles.userText}>Welcome My App</Text>
          <TouchableOpacity style={styles.logoutBtn}>
            <Text
              style={styles.logoutBtnText}
              onPress={() => this.props.navigation.navigate('Login')}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardWrapper: {},
  userText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoutBtn: {
    backgroundColor: 'red',
    paddingVertical: 10,
    width: 100,
    alignSelf: 'center',
  },
  logoutBtnText: {color: '#fff', textAlign: 'center', fontWeight: 'bold'},
});
