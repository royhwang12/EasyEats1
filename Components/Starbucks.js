import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class MainPage extends Component {

    render() {

        return(
        <View>
           <View style={styles.containerTop}>
                 <ImageBackground source={require('../assets/Starbucksbackground.jpg')}
        style={styles.imagetop}>
        </ImageBackground>
            </View>
        <View>
            <Text style={styles.texts}>Starbucks</Text>

        </View>
        </View>



        )
    }}


    const styles = StyleSheet.create({

        containerTop: {
          flex: 1,
          resizeMode: 'cover',
          justifyContent:'space-around',
          alignItems: 'center',
        },
        imagetop: {
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          height: 150,
          width: 375,
        },
        texts: {
            fontSize: 50,
            color: 'white',
            fontFamily: 'Optima-BoldItalic',
            justifyContent: 'center',
          },
        views: {
            
        }

        })



