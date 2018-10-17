import React from 'react';
import { Text, ScrollView, StyleSheet, View, Dimensions, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {fetchPets} from "../actions/pets";
import {connect} from 'react-redux';

import SwipeCard from "../components/SwipeCard";


class PetsScreen extends React.Component {
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
          title: 'PETS',
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

  componentWillMount(){
    console.log('Pet Data mounting')
    this.props.fetchInitialData();
  }
  render() {
    //Dummy Data
    // const petCards = [
    //   {name: 'Pixel', image: '../assets/images/samplePetImg.jpg', bio: "Pixel is a quarter werewolf."},
    //   {name: 'Betty', image: '../assets/images/samplePetImg2.jpg', bio: "Betty is a Fullbright scholar."},
    //   {name: 'Louie', image: '../assets/images/samplePetImg3.jpg', bio: "Louie has retractable eyes"},
    //   {name: 'Lily', image: '../assets/images/samplePetImg4.jpg', bio: "Lily currently works at the UN."},
    // ];

    const CardStack = ()=> {
      if(this.props.pets){
        return(
          <SwipeCard cards={this.props.pets}/>
        )
      }else{
        return(
          <View/>
        )
      }
    }

    return (
      <View style={styles.screen}>
        <ScrollView style={styles.container}>
          <CardStack/>
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

  const mapStateToProps =(state) => ({
    pets: state.pets,
  });

  const mapDispatchToProps= (dispatch)=> ({
    fetchInitialData:()=>{
      dispatch(fetchPets());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(PetsScreen);
