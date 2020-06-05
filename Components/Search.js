import React, {Component} from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

export default class SearchPage extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
            />
        );
    }
}