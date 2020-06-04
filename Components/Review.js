import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, ImageBackground, Button, ScrollView, TextInput } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

export default class ReviewPage extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
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
           <Text style={styles.texts2}>Rating</Text>
<Rating
type='star'
ratingColor="gold"
ratingBackgroundColor="white"
ratingCount={5}
imageSize={50}
onFinishRating={this.ratingCompleted}
style={{ borderWidth: 3, marginTop: 20, marginLeft: 60, marginRight: 60}}
/>

</View>
       </View>
       <View>
         <Text style={styles.texts3}>Comments</Text>
         <TextInput
         style={{borderWidth: 3, padding: 75, marginLeft: 10, marginRight: 10}}
         />
           </View>
           <View style={{margin: 10}}>
            <Button
            onPress={() => navigate('Starbucks')}
            title="Submit"
            />
          </View>
       </View>

        )
    }
}

const styles = StyleSheet.create({
    texts: {
        fontSize: 50,
        color: 'white',
        fontStyle:'italic',
        fontWeight: 'bold',
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
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 125,
      },
      texts3: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
      },

})