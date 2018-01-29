import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import components.  they're put into the main app render function in the form of custom elements
import TitleBar from './TitleBar';
//MainScreenNavigator holds the routes and imports the individual screens.
import MainScreenNavigator from './MainScreenNavigator';


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
    borderWidth: 2,
    flex: 1,
    justifyContent: 'space-between'
  },
});
