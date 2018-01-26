import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TitleBar from './TitleBar';
import MainView from './MainView';
import BottomNav from './BottomNav';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleBar />
        <MainView />
        <BottomNav />
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
