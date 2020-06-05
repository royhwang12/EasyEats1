import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationEvents } from 'react-navigation';

export default class MainPage extends Component {

    
   
    render() {
        const Tab = createBottomTabNavigator();
        const {navigate} = this.props.navigation;
        return( 

            <View>
             <Text>hi</Text>
            </View>

        )
    }
}