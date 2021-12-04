import react from 'react';
import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Signin from './src/screens/Signin';
import Dashboard from './src/screens/Dashboard';

const stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
        <stack.Screen name='Login' component={Login} />
        <stack.Screen name='Signin' component={Signin} />
        <stack.Screen name='SplashScreen' component={SplashScreen} />
        <stack.Screen name='Dashboard' component={Dashboard}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})