import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {StackActions} from '@react-navigation/native'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'))
        }, 3000);
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    style={{flex:1, resizeMode:'contain', backgroundColor:'#000'}} 
                    source={require('../img/plugin.png')}
                />
            </View>
        );
    }
}

export default SplashScreen;