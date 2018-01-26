import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class TitleBar extends React.Component {
  render() {
    return (
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Title Bar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleBar: {
    backgroundColor: 'green',
    width: '100%',
    height: 50,
    padding: 20,
    alignItems: 'center',
  },
  titleText: {
    color: 'white'
  }
});
