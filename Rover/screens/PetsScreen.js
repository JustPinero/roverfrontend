import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class PetsScreen extends React.Component {
  static navigationOptions = {
    title: 'PETS',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Text>
        Pets Screen
      </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
