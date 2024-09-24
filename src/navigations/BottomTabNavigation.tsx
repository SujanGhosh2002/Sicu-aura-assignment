import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Header from '../components/Header';
import Buy from '../screens/Buy';
import Contacts from '../screens/Contacts';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // headerLeft:(focused)=><Image style={{tintColor:focused ? 'black' : 'gray', marginLeft:10}} source={require('../assets/sidebar.png')}/>,
          header: () => <Header />,
          // headerRight:(focused)=><Image style={{tintColor:focused ? 'black' : 'gray', marginRight:10}} source={require('../assets/notification.png')}/>,
          // headerStyle:{
          //   backgroundColor:'#061A82'

          // },
          tabBarStyle: {
            backgroundColor: '#C0D4F6',
            borderTopEndRadius: 10,
            borderTopLeftRadius: 10,
            borderTopWidth: 0,
            marginBottom: -5,
            height:60
          },
          tabBarActiveTintColor: '#87CEEA',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            display: 'none',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                style={{tintColor: focused ? 'black' : 'gray'}}
                source={require('../assets/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="BuyBottom"
          component={Buy}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  !focused
                    ? require('../assets/compas.png')
                    : require('../assets/compasActive.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  !focused
                    ? require('../assets/messege.png')
                    : require('../assets/messegeActive.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  !focused
                    ? require('../assets/profile.png')
                    : require('../assets/profileActive.png')
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
