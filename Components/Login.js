import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';


export default class LoginPage extends Component {
    static navigationOptions = {
        title: 'Login',
        title: 'Search',
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        const { onChangeText } = this;
        const { navigate } = this.props.navigation;
        const { username, password } = this.state;

        return(
            <View>
                <View>
                    <Image
                      style={styles.image}
                      source={require('../assets/capstone-logo.png')}
                    />
                </View>

                


            
        <View style={styles.views}>
            <TextInput
            placeholder="Username"
            style={styles.input}
            
            />
        </View>
        <View style={styles.views}>
            <TextInput
            placeholder="Password"
            style={styles.input}
            />
        </View>

          <View style={styles.login}>
            <Button
            onPress={() => navigate('Main')}
            title="Login"
            color="green"
            style={styles.login}
            />
          </View>
          <View style={styles.login}>
            <Button
            onPress={() => navigate('Search')}
            title="Search"
            color="green"
            style={styles.login}
            />
          </View>
          <View style={styles.login}>
            <Button
            onPress={() => navigate('Starbucks')}
            title="Starbucks"
            color="green"
            style={styles.login}
            />
          </View>
        </View>

        )


    }

}

const styles=StyleSheet.create ({
image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
},
input: {
    padding: 5,
    borderColor: 'green',
    borderWidth: 2,
    fontSize: 20,
},
login: {
margin: 20,
},
views: {
    margin: 5,
}
});