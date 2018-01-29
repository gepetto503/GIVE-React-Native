import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

//deez be da icons, yo
import Ionicons from 'react-native-vector-icons/Ionicons';

//deez ba screens.  duh.
import SocialScreen from './SocialScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

//dis be da tab navigata
const MainScreenNavigator = TabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      //icon from library.  not sure how the tintColor part is working yet.
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-search' : 'ios-search-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Social: {
    screen: SocialScreen,
    navigationOptions: {
      tabBarLabel: 'Social',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name= {focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

//this will be imported in App.js
export default MainScreenNavigator;
