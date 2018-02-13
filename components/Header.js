import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Header extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'yellow'}}>
                <Text style={{color: 'black'}}>Who are you?</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('Header', () => Header);
