import React from 'react';
import {View} from 'react-native';
import styles from '../styles/style';
import IndividualCard from '../components/IndividualCard';

const ContactsIndividual = () => {
  return (
    <View style={styles.main}>
      <IndividualCard />
    </View>
  );
};

export default ContactsIndividual;
