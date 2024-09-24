import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/style';
import stylesWithProp from '../styles/styleWithProp';

const cardProfessional = [
  {
    id: 1,
    name: 'Jennifer',
    location: 'San Francisco',
    about: 'Hi community! I am open to new connections.',
    profetion: 'Movies I coffee I Hobbies',
    image: require('../assets/image.png'),
  },
  {
    id: 2,
    name: 'John',
    location: 'Los Angeles',
    about: 'Excited to meet new people!',
    profetion: 'Music I Sports I Travel',
    image: require('../assets/image.png'),
  },
  {
    id: 3,
    name: 'John',
    location: 'Los Angeles',
    about: 'Excited to meet new people!',
    profetion: 'Music I Sports I Travel',
    image: require('../assets/image.png'),
  },
];

const ProfessionalCard = () => {
  const [selectedId, setSelectedId] = useState(undefined);
  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={stylesWithProp(item.id == selectedId).card}
        key={item.id}
        onPress={() => setSelectedId(item.id)}>
        <View style={styles.topCard}>
          <View style={styles.topCardLeft}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.topCardRight}>
            <View style={styles.topCardRighttop}>
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>

              <Image
                style={{tintColor: '#000'}}
                source={require('../assets/add.png')}
              />
            </View>
            <View style={styles.topCardRightBottom}>
              <Image
                style={{tintColor: '#000', marginLeft: -10}}
                source={require('../assets/emogi.png')}
              />

              <Text style={styles.about}>{item.about}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomCard}>
          <Image
            style={{tintColor: '#000'}}
            source={require('../assets/like.png')}
          />
          <Text style={styles.profession}>{item.profetion}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      style={{flex: 1}}
      data={cardProfessional}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ProfessionalCard;
