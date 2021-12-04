import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:30, fontWeight:'bold'}}>Ini Adalah Dashboard</Text>
            </View>            
        );
    }
}

export default Dashboard;