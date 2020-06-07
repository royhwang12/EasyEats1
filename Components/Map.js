import React, {Component} from 'react';
import * as Font from 'expo-font';
import {View, StyleSheet, Image, Text, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationEvents } from 'react-navigation';
import { Icon } from 'react-native-elements';


import MapView from 'react-native-maps';

export default class Map extends Component {



    render() {
        return(
           
                <MapView
                style={{flex: 1}}
                region={{latitude: 49.035723, longitude: -122.828760, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
                showsUserLocation={true}
                
                />
           
        )
    }
}