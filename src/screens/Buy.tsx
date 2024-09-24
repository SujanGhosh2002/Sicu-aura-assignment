import React from 'react';
import {View} from 'react-native';
import styles from '../styles/style';
import BuyTopTabNavigation from '../navigations/BuyTopTabNavigation';

const Buy =() => {

  return (
    <View style={styles.main}>
       <BuyTopTabNavigation/>
    </View>
  );
};

export default Buy;