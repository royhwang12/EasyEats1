import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button} from 'react-native';


export default class LoginPage extends Component {
    static navigationOptions = {
        title: 'Login',
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

                
            <Text>Sup</Text>

            

            <TextInput
            placeholder="Username"

            
            />
            <TextInput
            placeholder="Password"
            />



            <Button
            onPress={() => navigate('Main')}
            title="Login"
            />
        </View>

        )


    }

}

const styles=StyleSheet.create ({
image: {
    flex: 2,
    height: 300,
    width: 300,
    justifyContent: 'center',
}
});