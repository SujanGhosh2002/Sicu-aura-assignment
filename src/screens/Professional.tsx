import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/style';
import Search from '../components/Search';
import ProfessionalCard from '../components/ProfessionalCard';

const Professional =() => {

  return (
    <View style={styles.main}>
       <Search/>
       <ProfessionalCard/>
    </View>
  );
};

export default Professional;