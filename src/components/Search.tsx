import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical:15,
        height:40,
      }}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="gray"
        style={{
          width: '70%',
          height: '100%',   
          fontSize: 12,
          borderColor:'gray',
          borderWidth: 1,
          marginLeft: 20,
          borderRadius: 20,
          paddingLeft:50
        }}/>
        <Image
          style={{tintColor: 'gray', position:'absolute', left:50}}
          source={require('../assets/search.png')}
        />
      <TouchableOpacity style={{width: '10%'}}>
        <Image
          style={{tintColor: 'gray'}}
          source={require('../assets/filter.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
