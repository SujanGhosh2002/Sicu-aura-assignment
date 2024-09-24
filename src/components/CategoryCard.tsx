import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../styles/style';

const cardCategory = [
  {
    id: 1,
    image: require('../assets/categoryImage1.png'),
    name: 'Lamp',
  },
  {
    id: 2,
    image: require('../assets/categoryImage2.png'),
    name: 'Chair',
  },
  {
    id: 3,
    image: require('../assets/categoryImage3.png'),
    name: 'Been Bag',
  },
  {
    id: 4,
    image: require('../assets/categoryImage4.png'),
    name: 'Table',
  },
  {
    id: 5,
    image: require('../assets/categoryImage3.png'),
    name: 'Been Bag',
  },
  {
    id: 6,
    image: require('../assets/categoryImage4.png'),
    name: 'Table',
  },
];

const CategoryCard = () => {
  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.categoryCard} key={item.id}>
        <Image style={{}} source={item.image} />
        <Text
          style={{
            color: '#000',
            fontSize: 12,
            fontWeight: 500,
            textAlign: 'center',
            paddingBottom: 10,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      style={{}}
      data={cardCategory}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
    />
  );
};

export default CategoryCard;
