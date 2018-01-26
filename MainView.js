import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class MainView extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Text>Main View Wurds</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'beige',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
