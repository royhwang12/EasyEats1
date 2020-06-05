import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, Button, TextInput, ScrollView, Alert} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationEvents } from 'react-navigation';
import {  TouchableOpacity } from 'react-native-gesture-handler';

export default class MainPage extends Component {

    
   
    render() {
        const Tab = createBottomTabNavigator();
        const {navigate} = this.props.navigation;
        return( 
            <ScrollView>
            <View style={{backgroundColor: 'green', height: 75}}>
             <Text style={styles.NewAccountText}>Create New Account</Text>
            </View>
           <View>
            <Text style={styles.filling}>Full Name</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10, borderRadius: 10}}
         />
         </View>
         <View>
            <Text style={styles.filling}>Email</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10, borderRadius: 10}}
         />
         </View>
         <View>
            <Text style={styles.filling}>Password</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10, borderRadius: 10}}
         />
         </View>
         <View>
            <Text style={styles.filling}>Password Confirm</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10, borderRadius: 10}}
         />
         </View>
         <View>
         <Text style={styles.filling}>Age</Text>
            <TextInput
         style={{borderWidth: 2, padding: 5, marginLeft: 10, marginRight: 10, borderRadius: 10}}
         />
         </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity onPress={() => Alert.alert('You Selected This Disability')}>
            <Image style={styles.disability} 
            source={require('../assets/hands.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('You Selected This Disability')}>
            <Image style={styles.disability} 
            source={require('../assets/autism.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('You Selected This Disability')}>
            <Image style={styles.disability} 
            source={require('../assets/noSee.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('You Selected This Disability')}>
            <Image style={styles.disability} 
            source={require('../assets/wheelchair.png')}/>
            </TouchableOpacity>
            </View>
           <View style={{margin: 10}}>
            <Button
            onPress={() => navigate('Main')}
            title="Create Account"
            />
          </View>

            </ScrollView>

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
},
disability: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 9  
  },
})