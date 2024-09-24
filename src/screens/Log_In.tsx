import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/style';
import BottomTabNavigation from '../navigations/BottomTabNavigation';

const Log_In = () => {
  const [auth, setAuth] = useState(true);
  console.log(auth);

  return (
    <>
      {auth ? (
        <ImageBackground
          source={require('../assets/bgImage.png')}
          resizeMode="cover"
          style={styles.logInContainer}>
          <Text style={styles.logInHeading}>Netclan Explorer</Text>
          <TextInput style={styles.logInTextInput} placeholder="Username" />
          <TextInput style={styles.logInTextInput} placeholder="Password" />
          <TouchableOpacity
            onPress={() => setAuth(false)}
            style={styles.logInButton}>
            <Text style={styles.logInButtonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createAccountButton}>
            <Text style={styles.createAccountButtonText}>
              Create an account
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <BottomTabNavigation />
      )}
    </>
  );
};

export default Log_In;
