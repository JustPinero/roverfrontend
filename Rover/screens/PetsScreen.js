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
      {name: 'Pixel', image: '../assets/images/sampleImg.jpg', bio: "Pixel is a quarter werewolf."},
      {name: 'Betty', image: '../assets/images/sampleImg2.jpg', bio: "Betty is a Fullbright scholar."},
      {name: 'Louie', image: '../assets/images/sampleImg3.jpg', bio: "Louie has retractable eyes"},
      {name: 'Lily', image: '../assets/images/sampleImg4.jpg', bio: "Lily currently works at the UN."},
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
