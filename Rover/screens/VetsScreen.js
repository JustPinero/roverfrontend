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
import {fetchVets} from "../actions/vets";
import {connect} from 'react-redux';

import SwipeCard from "../components/SwipeCard";

class VetsScreen extends React.Component {
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

  componentWillMount(){
    console.log('Vet Data mounting')
    this.props.fetchInitialData();
  }
  
  render() {
    //Dummy Data
    // const vetCards= [
    //   {name: "Dr. Red", image: '../assets/images/sampleVetImg.jpg', bio: "Red never gives up."},
    //   {name: "Dr. Orange", image: '../assets/images/sampleVetImg2.jpg', bio: "Dr. is a Fullbright scholar."},
    //   {name: "Dr. Blue", image: '../assets/images/sampleVetImg3.jpg', bio: "Dr. Blue Will save us all."},
    //  { name: "Dr. Green", image: '../assets/images/sampleVetImg4.jpg', bio: "Dr. Green is from Long Island."}
    // ];

    const CardStack = ()=> {
      if(this.props.vets){
        return(
          <SwipeCard cards={this.props.vets}/>
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
  screen:{
    width: width,
    height: height,
  },
});

const mapStateToProps =(state) => ({
  vets: state.vets,
});

const mapDispatchToProps= (dispatch)=> ({
  fetchInitialData:()=>{
    dispatch(fetchVets());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VetsScreen);