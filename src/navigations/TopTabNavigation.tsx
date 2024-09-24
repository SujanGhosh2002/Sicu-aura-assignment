import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Individual from '../screens/Individual';
import Professional from '../screens/Professional';
import Merchant from '../screens/Merchant';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
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
      <TopTab.Screen name="Individual" component={Individual} />
      <TopTab.Screen name="Professional" component={Professional} />
      <TopTab.Screen name="Merchant" component={Merchant} />
    </TopTab.Navigator>
  );
};
export default TopTabNavigation