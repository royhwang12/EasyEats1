import React, {Component} from 'react';
import {View, Text, TextInput, Stylesheet, Image, Button} from 'react-native';


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