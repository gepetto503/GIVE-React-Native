import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

//these import classes for each component
import TitleBar from './TitleBar';
import MainView from './MainView';
import BottomNav from './BottomNav';


class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Profile Stuff</Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Search Stuff</Text>
      </View>
    );
  }
}

class SocialScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Social Stuff</Text>
      </View>
    );
  }
}

//creates a navigator
const MainScreenNavigator = TabNavigator({
  Profile: { screen: ProfileScreen },
  Search: { screen: SearchScreen },
  Social: { screen: SocialScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleBar />
        <MainScreenNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between'
  },
});
