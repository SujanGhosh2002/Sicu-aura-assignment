import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from '../styles/style';
import Search from '../components/Search';
import PopularCard from '../components/PopularCard';
import CategoryCard from '../components/CategoryCard';

const BuyTop = () => {
  return (
    <ScrollView style={{}}>
      <Search />
      <Text style={styles.headingText}>Popular</Text>
      <PopularCard />
      <Text style={styles.headingText}>Category</Text>
      <CategoryCard />
      <View style={{paddingHorizontal: 10}}>
        <View
          style={{
            backgroundColor: '#84A7A9',
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            style={{width: '60%'}}
            source={require('../assets/oneImage.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BuyTop;
