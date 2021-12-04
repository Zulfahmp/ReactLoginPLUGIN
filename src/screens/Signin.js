import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Image 
                        style={{height:390, width:450}}
                        source={require('../img/plugin.png')}
                    />
                </View>
                <ScrollView style={styles.container2}>
                    <View style={{marginTop:10, width:400, justifyContent:'center', alignItems:'center'}}>
                        <Text 
                        style={styles.textRegister}>
                            REGISTER
                        </Text>
                    </View>
                    <Text style={styles.textKet}> 
                    Email</Text>
                    <TextInput style={styles.textInput}
                    placeholder='Email'>
                    </TextInput>
                    <Text style={styles.textKet}>
                        Username
                    </Text>
                    <TextInput 
                    style={styles.textInput}
                    placeholder='Username' />
                    <Text style={styles.textKet}>
                        Password
                    </Text>
                    <TextInput 
                    style={styles.textInput}
                    placeholder='Password' />
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={styles.buttonRegister}>
                        <Text style={{color:'black'}}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <View style={{marginTop:10 ,marginLeft:40 ,marginHorizontal:10, alignItems:'flex-start', justifyContent:'flex-start'}}>
                        <TouchableOpacity style={{
                            flexDirection:'row', 
                            padding:15, 
                            backgroundColor:'green', 
                            borderRadius:10 }}
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <FontAwesome5 name="sign-in-alt" color='#fff' size={20} />
                            <Text style={{color:'white', marginLeft:5 }}>
                            Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Signin;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'black'
    },
    container2:{
        flex:1, 
        backgroundColor:'orange', 
        borderTopRightRadius:45, 
        borderTopLeftRadius:45
    },
    textKet:{
        marginTop:10, 
        marginHorizontal:60, 
        fontWeight:'bold'},
    textInput:{
        borderWidth:1,
        marginHorizontal:40,
        backgroundColor:'#fff',
        borderRadius:45,                
        paddingHorizontal:30
    },
    textRegister:{
        fontFamily:'Bullpen3D',
        letterSpacing:9,
        fontSize:40, 
        color:'#fff'
    },
    buttonRegister:{
        backgroundColor:'#ffd54f',
        borderColor:'white',
        borderWidth:3, 
        padding:20, 
        borderRadius:45, 
        marginTop:20, 
        marginHorizontal:120,
        justifyContent:'center',
        elevation:10,
        alignItems:'center'
    }
}) 