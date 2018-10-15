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
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
        <Text>
          This is where the vet cards will go.
        </Text>;
      </ScrollView>
      )
  }
}
