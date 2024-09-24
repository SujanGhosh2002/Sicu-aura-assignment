import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/style';

const cardPopular = [
  {
    id: 1,
    image: require('../assets/imageCard.png'),
  },
  {
    id: 2,
    image: require('../assets/imageCard2.png'),
  },
  {
    id: 3,
    image: require('../assets/imageCard2.png'),
  },
];

const PopularCard = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.popularCard} key={item.id}>
        <Image style={styles.popularCardImage} source={item.image} />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.popularListContainer}
      data={cardPopular}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
    />
  );
};

export default PopularCard;
