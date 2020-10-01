import React from 'react';
import {View, StyleSheet} from 'react-native';
import SlipScreen from './SlipScreen';
// import auth from '@react-native-firebase/auth';
// import SwiperScreen from './SwiperScreen';
export default function HomeScreen() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  //   return navigation.navigate('Login');
  // }
  return (
    <View style={styles.center}>
      <SlipScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
