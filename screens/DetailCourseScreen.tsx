import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
export default function DetailScreenScreen({route, navigation}) {
  const {item} = route.params;
  //   const navigation = useNavigation();
  return (
    <View style={styles.center}>
      {/* <Text>{JSON.stringify(item)}</Text> */}
      <Image source={{uri: item.photo}} style={styles.img} />
      <Text style={styles.TextName}>User</Text>
      <View style={styles.itemct}>
        <Text>{item.email}</Text>
        <Text style={styles.TextName}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  img: {width: 100, height: 100, borderRadius: 50, marginTop: 20},
  TextName: {fontWeight: 'bold', fontSize: 20, marginBottom: 5},
  itemct: {alignItems: 'center', flex: 1},
});

// then try to read the whole item, for example
