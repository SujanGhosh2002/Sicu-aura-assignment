import React from 'react';
import {View} from 'react-native';
import styles from '../styles/style';
import ContactsTopTabNavigation from '../navigations/ContactsTopTabNavigation';

const Contacts =() => {

  return (
    <View style={styles.main}>
       <ContactsTopTabNavigation/>
    </View>
  );
};

export default Contacts;