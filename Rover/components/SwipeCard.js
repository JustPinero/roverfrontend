// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import { ScrollView } from 'react-native-gesture-handler';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      var imageUrl = this.props.image;
      console.log("CHICKEN FOOOOOOOT", "../assets/images/sampleVetImg4.jpg")
    return (
     <View style={styles.card}>
     <Image style={styles.thumbnail} source={{uri: "../assets/images/sampleVetImg4.jpg"}} />
      <View>
      </View>
        <Text style={styles.text}>{this.props.name}</Text>
        <View>
          <ScrollView>
            <Text>{this.props.bio|| ""}</Text>
          </ScrollView>
        </View>
     </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards || [
        {text: 'Tomato', backgroundColor: 'red'},
        {text: 'Aubergine', backgroundColor: 'purple'},
        {text: 'Courgette', backgroundColor: 'green'},
        {text: 'Blueberry', backgroundColor: 'blue'},
        {text: 'Umm...', backgroundColor: 'cyan'},
        {text: 'orange', backgroundColor: 'orange'},
      ]
    };
  }

  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
  }
  showYup=false;
  showNope=false;
  showMaybe=false;
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: 'white',
        borderWidth: 1,
        elevation: 1,
        width: (width*.97),
        height:(height)
      },
      thumbnail: {
        width: (width*.97),
        height:(height*.23),
        borderWidth: 2,
        resizeMode: 'cover'
      },
      text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
      },
      noMoreCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
})