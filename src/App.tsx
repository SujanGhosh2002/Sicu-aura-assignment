import React from 'react';
import {View} from 'react-native';
import styles from './styles/style';
import Log_In from './screens/Log_In';

const App = () => {
  return (
    <View style={styles.main}>
      <Log_In />
    </View>
  );
};

export default App;
