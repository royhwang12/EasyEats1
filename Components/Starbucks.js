import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, ImageBackground, Button, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

export default class MainPage extends Component {

    render() {
      const { navigate } = this.props.navigation;
        return(
        <ScrollView>
           <View style={styles.containerTop}>
                 <ImageBackground source={require('../assets/Starbucksbackground.jpg')}
        style={styles.imagetop}>
                      <Text style={styles.texts}>Starbucks</Text>
            <Text style={styles.texts2}>1730 152 St, Surrey, BC</Text>
        </ImageBackground>
            </View>
          <View> 
            <Text style={styles.texts3}>Accessibility</Text>
         </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
              <Text style={styles.texts3}>Overall Rating</Text>
              <Image
              source={require('../assets/5star.png')}
              style={{height: 50, width: 300, alignSelf: 'center', marginTop: 15 }}/>
            </View>
            <View style={{paddingTop: 30}}>
              <Text style={styles.texts3}>Reviews</Text>
              <Text style={styles.texts4}>Roy Huang</Text>
              <Image
              source={require('../assets/5star.png')}
              style={{ height: 12.5, width: 75, alignSelf: 'flex-start', marginTop: 5}} />
              <Text style={styles.texts5}>This Starbucks location is very accessible, with features like wheelchair ramps and washrooms. This Starbucks also has very helpful staff, I strongly recommend this location. </Text>
            </View>
            <View style={{margin: 15}}>
              <Button
              title="More Reviews"
              style={styles.buttons}/>
            </View>
            <View style={{margin: 10}}>
            <Button
            onPress={() => navigate('Review')}
            title="Write a Review"
            color="blue"
            />
          </View>
        </ScrollView>



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
          marginTop: 20
          
        },
        texts3: {
          fontSize: 20,
          color: 'black',
          fontFamily: 'Optima-Bold',
          paddingTop: 20,
         alignSelf: 'center'
          
      },
      texts4: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Optima-Bold',
        paddingTop: 10,
       alignSelf: 'flex-start'
        
    },
    texts5: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Optima',
      paddingTop: 10,
     alignSelf: 'flex-start'
      
  },
  buttons: {
    margin: 50,
  },

        })



