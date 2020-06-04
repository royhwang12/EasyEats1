import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';



import Login from './Components/Login';
import Main from './Components/Main';
import Search from './Components/Search';
import Starbucks from './Components/Starbucks';



const MainNavigator = createStackNavigator({

  Login: {screen: Login},
  Main: {screen: Main},
  Search: {screen: Search},
  Starbucks: {screen: Starbucks},
  


})

const App = createAppContainer(MainNavigator);

export default App;