import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Rating, AirbnbRating } from 'react-native-elements';

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
            <Text style={styles.texts2}>1730 152 St, Surrey, BC</Text>
          <View> 
            <Text style={styles.texts3}>Accessibility</Text>
          </View>
         </View>
            <View style={{ flexDirection: 'reverse-row'}}>
            <Image style={styles.disability} 
            source={require('../assets/hands.png')}/>
            <Image style={styles.disability} 
            source={require('../assets/noSee.png')}/>
            <Image style={styles.disability} 
            source={require('../assets/wheelchair.png')}/>
            <Image style={styles.disability} 
            source={require('../assets/autism.png')}/>
            </View>
            <View>
            <Rating
  type='star'
  ratingColor="gold"
  ratingBackgroundColor="white"
  ratingCount={5}
  imageSize={40}
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 40 }}
/>

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
          texts2: {
            fontSize: 25,
            color: 'white',
            fontFamily: 'Optima-Bold',
            justifyContent: 'center',
            paddingTop: 75
            
        },
        disability: {
          height: 50,
          width: 50,
          alignSelf: 'center',
          marginTop: 40
          
        },
        texts3: {
          fontSize: 20,
          color: 'black',
          fontFamily: 'Optima-Bold',
          paddingTop: 20,
         alignSelf: 'center'
          
      },

        })



