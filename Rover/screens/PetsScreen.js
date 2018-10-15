import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class PetsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      outOfCards: false
    }
  }
  static navigationOptions = {
    title: 'PETS',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Text>
        This is where the pet cards will go.
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
