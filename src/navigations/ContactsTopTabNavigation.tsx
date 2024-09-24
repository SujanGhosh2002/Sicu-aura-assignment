import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ContactsIndividual from '../screens/ContactsIndividual';
import ContactsProfessional from '../screens/ContactsProfessional';
import ContactsMerchant from '../screens/ContactsMerchant';

const TopTab = createMaterialTopTabNavigator();

const ContactsTopTabNavigation = () => {
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
      <TopTab.Screen name="Individual" component={ContactsIndividual} />
      <TopTab.Screen name="Professional" component={ContactsProfessional} />
      <TopTab.Screen name="Merchant" component={ContactsMerchant} />
    </TopTab.Navigator>
  );
};
export default ContactsTopTabNavigation