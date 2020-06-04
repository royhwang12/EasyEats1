import React, {Component} from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class MainPage extends Component {

    render() {

        return(
            <ScrollView>
                <Text style={styles.title}>Where do you want to go?</Text>
                <Text style={styles.subtitle}>Restaurants</Text>

                <ScrollView
                horizontal={true}
                >

              
                
                <Image
                source={require('../assets/starbucks.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/Burger-king.jpg')}
                style={styles.image}

                />

                <Image
                source={require('../assets/sapporo.jpg')}
                style={styles.image}

                />

                </ScrollView>
                
            </ScrollView>


        )

    }
}



const styles = StyleSheet.create({
title: {
    color: 'green',
    fontSize: 45,
    fontWeight: 'bold',
    
},
subtitle: {
    fontSize: 36,
    fontWeight: 'bold',
},

image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 9,
    margin: 6,

},


})