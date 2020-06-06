import React, {Component} from 'react';

import {View, StyleSheet, Image, Text, Button} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationEvents } from 'react-navigation';
import { Icon } from 'react-native-elements';

export default class MainPage extends Component {

    
   
    render() {
        
        const {navigate} = this.props.navigation;
        return(
            <View>
            <ScrollView>
                <View style={{backgroundColor: 'green', }}>
                <Text style={styles.title}>Where do you want to go?</Text>
                </View>
                <Text style={styles.subtitle}>Restaurants</Text>
            

                <ScrollView
                horizontal={true}
                >

                
                <View>
                <TouchableOpacity onPress={() => navigate('Starbucks')}>
                <Image
                source={require('../assets/starbucks.jpg')}
                style={styles.image}

                />
                </TouchableOpacity>
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
                <View style={{height: 50, width: "100%", backgroundColor: 'white'}}></View>
            </ScrollView>

            <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: 'green',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                        padding: 10,
                    

                    }}
                >
                     <Icon name='home' type='material' onPress={() => navigate('NewProfile')} />
                     <Icon name='search' type='material' onPress={() => navigate('Search')} />  
                </View>

            
            
            </View>

        )

    }
}



const styles = StyleSheet.create({
title: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    
    
},
subtitle: {
    textAlign: 'center',
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
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
},



})