import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, Button, TextInput} from 'react-native';
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
            <View style={{backgroundColor: 'green', height: 75}}>
             <Text style={styles.NewAccountText}>Create New Account</Text>
            </View>
           <View>
            <Text style={styles.filling}>Full Name</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10}}
         />
         </View>
         <View>
            <Text style={styles.filling}>Email</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10}}
         />
         </View>
         <View>
            <Text style={styles.filling}>Password</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10}}
         />
         </View>
         <View>
            <Text style={styles.filling}>Password Confirm</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10}}
         />
         </View>

            </View>

        )
    }
}

const styles=StyleSheet.create ({

NewAccountText: {
    fontSize: 45,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignSelf: 'center',
    color: 'white',
    paddingTop: 15
},
filling: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 15
}
})