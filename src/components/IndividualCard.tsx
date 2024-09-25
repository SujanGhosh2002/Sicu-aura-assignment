import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/style';
import stylesWithProp from '../styles/styleWithProp';
import Search from './Search';

const cardIndividual = [
  {
    id: 1,
    name: 'Jennifer',
    lastMessege: 'Movies I coffee',
    image: require('../assets/profileCard.png'),
  },
  {
    id: 2,
    name: 'Jennifer',
    lastMessege: 'Movies I coffee',
    image: require('../assets/profileCard.png'),
  },
  {
    id: 3,
    name: 'Jennifer',
    lastMessege: 'Movies I coffee',
    image: require('../assets/profileCard.png'),
  },
  {
    id: 4,
    name: 'Jennifer',
    lastMessege: 'Movies I coffee',
    image: require('../assets/profileCard.png'),
  },
  {
    id: 5,
    name: 'Jennifer',
    lastMessege: 'Movies I coffee',
    image: require('../assets/profileCard.png'),
  },
];

const IndividualCard = () => {
  const [cunnection, setCunnection] = useState(true);
  const [isTogled, setIsTogled] = useState(true);
  const [selectedId, setSelectedId] = useState(undefined);
  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <TouchableOpacity
          style={stylesWithProp(item.id == selectedId).cardIndividual}
          key={item.id}
          onPress={() => setSelectedId(item.id)}>
          <View style={styles.cardIndividualLeft}>
            <Image source={item.image} style={styles.imageCard} />
          </View>
          <View style={styles.cardIndividualMiddle}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.lastMessege}>{item.lastMessege}</Text>
          </View>
          <View style={styles.cardIndividualRight}>
            <TouchableOpacity
              onPress={() => setIsTogled(false)}
              style={styles.cardIndividualRightBtn}>
              <Image
                source={require('../assets/arow-left.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {item.id == selectedId ? (
          <View style={styles.popup}>
            <TouchableOpacity style={styles.popupBtn}>
              <Image source={require('../assets/call.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupBtn}>
              <Image source={require('../assets/video.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupBtn}>
              <Image source={require('../assets/chart.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.popupBtn}>
              <Image source={require('../assets/mail.png')} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <>
      {isTogled ? (
        <FlatList
          style={{flex: 1}}
          data={cardIndividual}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <ScrollView>
          <Search />
          <View style={styles.details}>
            <View style={styles.detailsImagePart}>
              <Image
                style={styles.detailsImage}
                source={require('../assets/bigImage.png')}
              />
              <TouchableOpacity
                onPress={() => setIsTogled(true)}
                style={styles.cunnectionStatusLeft}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/remove.png')}
                />
              </TouchableOpacity>
              <View style={styles.cunnectionStatusRight}>
                <Image source={require('../assets/makeConnection.png')} />
              </View>
            </View>
            <Text style={styles.detailsText}>Jennifer Marbles</Text>
            <View style={styles.detailsTextPart}>
              <View style={styles.detailsTextAll}>
                <Text style={styles.detailsTextHeading}>About</Text>
                <Text style={styles.detailsText}>Scorpio I 23 I Single</Text>
                <Text style={styles.detailsText}>Height: 5’6 Ft</Text>
                <Text style={styles.detailsText}>
                  Looking for 24-25 year male for casual dating.
                </Text>
                <Text style={styles.detailsTextParagraph}>
                  If you have good energy and like to have fun, then send me a
                  message. You don’t have to enjoy all the same things I do, but
                  it’d be great if you were willing to try them out.
                </Text>
              </View>
              <View style={styles.cunnection}>
                <View style={styles.cunnectionPart}>
                  <View style={styles.cunnectionLeft}>
                    <Image source={require('../assets/makeConnection.png')} />
                  </View>
                  <Text style={styles.cunnectionRight}>Make Connection</Text>
                </View>
                <View style={styles.cunnectionPart}>
                  <View style={styles.cunnectionLeft}>
                    <Image source={require('../assets/breakConnection.png')} />
                  </View>
                  <Text style={styles.cunnectionRight}>Break Connection</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default IndividualCard;
