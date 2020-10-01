import React, {useState, useEffect} from 'react';
import {StyleSheet, ActivityIndicator, View, Text, Alert} from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const login = async () => {
    setShowLoading(true);
    try {
      const doLogin = await auth().signInWithEmailAndPassword(email, password);
      setShowLoading(false);
      if (doLogin.user) {
        navigation.navigate('App');
      }
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };
  //
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '597818321076-saj2e1ad29b8kgegkfkib7vjnk04lnmo.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 28, height: 50}}>Please Login!</Text>
        </View>
        <View style={styles.subContainer}>
          <Input
            style={styles.textInput}
            placeholder="Your Email"
            leftIcon={<Icon name="mail" size={24} />}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.subContainer}>
          <Input
            style={styles.textInput}
            placeholder="Your Password"
            leftIcon={<Icon name="lock" size={24} />}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.subContainer}>
          <Button
            style={styles.textInput}
            title="Login"
            onPress={() => login()}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            Don't have account , create now
          </Text>
        </View>
        <View>
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signIn()}
          />
        </View>
        {showLoading && (
          <View style={styles.activity}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    height: 500,
    width: 400,
    padding: 20,
  },
  subContainer: {
    padding: 5,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    margin: 5,
    width: 400,
  },
});
