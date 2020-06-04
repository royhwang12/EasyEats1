import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, ImageBackground, Button, ScrollView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

export default class ReviewPage extends Component {

    render() {

        return(
            <View>
            <View style={styles.containerTop}>
            <ImageBackground source={require('../assets/Starbucksbackground.jpg')}
   style={styles.imagetop}>
                
   </ImageBackground>
       </View>
       <View>
       <Text style={styles.texts}>Write a Review</Text>
       </View>
       <View>
       <View>
           <Text style={styles.texts2}>Rating</Text>
<Rating
type='star'
ratingColor="gold"
ratingBackgroundColor="white"
ratingCount={5}
imageSize={40}
onFinishRating={this.ratingCompleted}
style={{ paddingVertical: 0 }}
/>

</View>
       </View>
       </View>

        )
    }
}

const styles = StyleSheet.create({
    texts: {
        fontSize: 50,
        color: 'white',
        fontFamily: 'Optima-BoldItalic',
        justifyContent: 'center',
        alignSelf: 'center'
    },
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
      texts2: {
        fontSize: 30,
        color: 'black',
        fontFamily: 'Optima-Bold',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 125
      },

})