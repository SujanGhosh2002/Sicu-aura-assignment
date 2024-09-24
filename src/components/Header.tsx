import React from 'react';
import {Image, Text, View} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#061A82',
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '15%',
          marginBottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{tintColor: '#fff'}}
          source={require('../assets/sidebar.png')}
        />
      </View>
      <View style={{width: '65%'}}>
        <View>
          <Text style={{color: '#fff', fontSize: 18, marginVertical: 5}}>
            Explore
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{tintColor: '#fff', marginRight: 5}}
              source={require('../assets/location.png')}
            />
            <Text style={{color: '#fff'}}>San Francisco,Californi</Text>
          </View>
        </View>
      </View>
      <View
        style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{tintColor: '#fff'}}
          source={require('../assets/notification.png')}
        />
      </View>
    </View>
  );
};

export default Header;
