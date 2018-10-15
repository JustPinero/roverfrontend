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

export default class VetsScreen extends React.Component {
  static navigationOptions = {
    title: 'VETS',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView>
      <Text>
        Vets Screen
      </Text>;
      </ScrollView>
      )
  }
}
