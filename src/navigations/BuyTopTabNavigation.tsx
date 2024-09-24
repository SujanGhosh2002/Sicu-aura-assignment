import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BuyTop from '../screens/BuyTop';
import RentTop from '../screens/RentTop';

const TopTab = createMaterialTopTabNavigator();

const BuyTopTabNavigation = () => {
  return (
    <TopTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#0320B7' },
      tabBarIndicatorStyle: {
        backgroundColor: '#fff',
        height: 3,
      },
      tabBarLabelStyle: { fontSize: 12 },
    }}
    >
      <TopTab.Screen name="Buy" component={BuyTop} />
      <TopTab.Screen name="Rent" component={RentTop} />
    </TopTab.Navigator>
  );
};
export default BuyTopTabNavigation