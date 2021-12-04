import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username : "",
            password : ""
         };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Image 
                        style={{height:400, width:450}}
                        source={require('../img/plugin.png')}
                    />
                </View>
                <View style={styles.container2}>
                    <View style={{marginTop:10, width:400, justifyContent:'center', alignItems:'center'}}>
                        <Text 
                        style={styles.textLogin}>
                            LOGIN
                        </Text>
                    </View>
                    <Text style={{marginTop:10, marginHorizontal:60}}>
                        Username
                    </Text>
                    <TextInput 
                    style={styles.textInput}
                    placeholder='Username' />
                    <Text style={{marginTop:5, marginHorizontal:60}}>
                        Password
                    </Text>
                    <TextInput 
                    style={styles.textInput}
                    placeholder='Password' />
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                    style={styles.buttonLogin}>
                        <Text style={{color:'black'}}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.textLupaPassword}>
                        <Text style={{}}>
                            Lupa Password?
                        </Text>
                        <Text style={{marginLeft:10, color:'blue'}}
                        onPress={() => console.log('Lupa Password')}>
                            KLIK DISINI
                        </Text>
                    </View>
                    <View style={{padding:30, marginHorizontal:10, alignItems:'flex-start', justifyContent:'flex-start'}}>
                        <TouchableOpacity style={{
                            flexDirection:'row', 
                            padding:15, 
                            backgroundColor:'green', 
                            borderRadius:10 }}
                            onPress={() => this.props.navigation.navigate('Signin')}>
                            <FontAwesome5 name="sign-in-alt" color='#fff' size={20} />
                            <Text style={{color:'white', marginLeft:5 }}>
                            Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;

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
    textInput:{
        borderWidth:1,
        marginHorizontal:40,
        backgroundColor:'#fff',
        borderRadius:45,                
        paddingHorizontal:30
    },
    textLogin:{
        fontFamily:'Bullpen3D',
        letterSpacing:9,
        fontSize:40, 
        color:'#fff'
    },
    buttonLogin:{
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
    },
    textLupaPassword:{
        flexDirection:'row', 
        marginTop:20, 
        alignItems:'center', 
        justifyContent:'center'
    }
}) 