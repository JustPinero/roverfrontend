import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import SwipeCard from "../components/SwipeCard";


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

    const petCards = [
      {name: 'Pixel', image: '../assets/images/sampleImg.jpg'},
      {name: 'Betty', image: '../assets/images/sampleImg2.jpg'},
      {name: 'Louie', image: '../assets/images/sampleImg3.jpg'},
      {name: 'Lily', image: '../assets/images/sampleImg4.jpg'},
    ];

    return (
      <ScrollView style={styles.container}>
        <SwipeCard cards={petCards}/>
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
