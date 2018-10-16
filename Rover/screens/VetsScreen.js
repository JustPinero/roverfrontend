import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
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
  static navigationOptions = {
    title: 'VETS',
  };
  
  render() {
    const vetCards= [
      {name: "Dr. Red", image:""},
      {name: "Dr. Orange", image: ""},
      {name: "Dr. Blue", image: ""},
     { name: "Dr. Green", image:""}
    ]
    return (
      <ScrollView>
        <SwipeCard cards={vetCards}/>
      </ScrollView>
      )
  }
}
