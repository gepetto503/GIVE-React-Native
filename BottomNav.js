import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class BottomNav extends React.Component {
  render() {
    return (
      <View style={styles.bottomNav}>
        <View>
          <Text>Button 1</Text>
        </View>
        <View>
          <Text>Button 2</Text>
        </View>
        <View>
          <Text>Button 3</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: 'grey',
    width: '100%',
    height: 75,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
