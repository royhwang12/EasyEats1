import React, {Component} from 'react';
import {createAppContainer, } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';



import Login from './Components/Login';
import Main from './Components/Main';
import Search from './Components/Search';
import Starbucks from './Components/Starbucks';
import Review from './Components/Review';
import BottomNavigationTabs from './Components/BottomNavigationTabs';
import NewProfile from './Components/NewProfile';
import Pool from './Components/Pool';










const MainNavigator = createStackNavigator({

  Login: {screen: Login},
  Main: {screen: Main},
  Search: {screen: Search},
  Starbucks: {screen: Starbucks},
  Review: {screen: Review},
  NewProfile: {screen: NewProfile},
  BottomNavigationTabs: {screen: BottomNavigationTabs},
  Pool: {screen: Pool},
  


})

const App = createAppContainer(MainNavigator);

export default App;