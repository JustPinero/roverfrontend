import React from 'react';
import { Text, ScrollView, StyleSheet, View, Dimensions } from 'react-native';
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
      {name: 'Pixel', image: '../assets/images/samplePetImg.jpg', bio: "Pixel is a quarter werewolf."},
      {name: 'Betty', image: '../assets/images/samplePetImg2.jpg', bio: "Betty is a Fullbright scholar."},
      {name: 'Louie', image: '../assets/images/samplePetImg3.jpg', bio: "Louie has retractable eyes"},
      {name: 'Lily', image: '../assets/images/samplePetImg4.jpg', bio: "Lily currently works at the UN."},
    ];

    return (
      <View style={styles.screen}>
        <ScrollView style={styles.container}>
          <SwipeCard cards={petCards}/>
        </ScrollView>
      </View>
    );
  }
}

  var {height, width} = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    splashscreen:{
      width: width,
      height: height,
    },
  });