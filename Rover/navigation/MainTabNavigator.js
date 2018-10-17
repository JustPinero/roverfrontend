import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, Button } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Petscreen from '../screens/PetsScreen';
import VetsScreen from '../screens/VetsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
    ),
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const PetStack = createStackNavigator({
  Pets: Petscreen,
});

PetStack.navigationOptions = {
  tabBarLabel: 'Pets',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const VetsStack = createStackNavigator({
  Vets: VetsScreen,
});

VetsStack.navigationOptions = {
  tabBarLabel: 'Vets',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  PetStack,
  VetsStack,
});
