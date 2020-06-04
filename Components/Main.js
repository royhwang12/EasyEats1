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

                
                <View>
                <Image
                source={require('../assets/starbucks.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/5star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Starbucks</Text>
                </View>

                <View>
                <Image
                source={require('../assets/Burger-king.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/4star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Burger King</Text>

                </View>

                <View>
                <Image
                source={require('../assets/sapporo.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/5star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Sapporo Kitchen</Text>

                </View>

                </ScrollView>



                <Text style={styles.subtitle}>Leisure</Text>



                <ScrollView
                horizontal={true}
                >

              
                <View>
                <Image
                source={require('../assets/grandview.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/5star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Grandview Heights Pool</Text>
                </View>

                <View>
                <Image
                source={require('../assets/southsurreyrec.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/5star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>South Surrey Rec</Text>

                </View>

                <View>
                <Image
                source={require('../assets/southsurreyathletic.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/5star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>South Surrey Athletic Park</Text>

                </View>
                

               

                </ScrollView>

                
                <Text style={styles.subtitle}>Shopping</Text>
                
                <ScrollView
                horizontal={true}
                >

              
                <View>
                <Image
                source={require('../assets/guildford.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/3star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Guildford Town Centre</Text>
                </View>

                <View>
                <Image
                source={require('../assets/semiahmoo.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/3star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Semiahmoo Mall</Text>

                </View>

                <View>
                <Image
                source={require('../assets/pacific.jpg')}
                style={styles.image}

                />
                <Image
                source={require('../assets/5star.png')}
                style={styles.star}
                />
                <Text style={styles.smallText}>Pacific Centre</Text>

                </View>

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

star: {
    height: 10,
    width: 60,
    alignSelf: 'center',

},

image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 9,
    margin: 11,

},

smallText: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
},



})