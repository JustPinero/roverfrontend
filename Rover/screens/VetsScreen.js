import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Button
} from 'react-native';

import SwipeCard from "../components/SwipeCard";

export default class VetsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      outOfCards: false
    }
  }
  static navigationOptions = ({ navigation }) => {
    return(
      {
        title: 'VETS',
        headerRight: (
          <Button
          onPress={() => alert('This is a button!')}
          title="Matches"
          color="black"
        />
        )
      }
    )
  }
  
  render() {
    const vetCards= [
      {name: "Dr. Red", image: '../assets/images/sampleVetImg.jpg', bio: "Red never gives up."},
      {name: "Dr. Orange", image: '../assets/images/sampleVetImg2.jpg', bio: "Dr. is a Fullbright scholar."},
      {name: "Dr. Blue", image: '../assets/images/sampleVetImg3.jpg', bio: "Dr. Blue Will save us all."},
     { name: "Dr. Green", image: '../assets/images/sampleVetImg4.jpg', bio: "Dr. Green is from Long Island."}
    ];
    
    return (
      <View style={styles.screen}>
        <ScrollView>
          <SwipeCard cards={vetCards}/>
        </ScrollView>
      </View>
      )
  }
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen:{
    width: width,
    height: height,
  },
});