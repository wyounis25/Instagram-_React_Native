import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import { auth } from './components/auth/firebase';
import firebase from './components/auth/firebase';


const Stack = createStackNavigator()
export default function App() {
  
const [loaded, setLoaded] = useState(false)
const [loggedIn, setLoggedIn] = useState(true)

  useEffect(() => {
   
    auth.onAuthStateChanged(user => {
      if(!user){
        setLoaded(!loaded)
        setLoggedIn(!loggedIn)
      }
    })
  }, [])

  
  return (
    <NavigationContainer>
   
      
      {loggedIn? 
      <View style={{flex: 1 , justifyContent:"center"}}>
        <Text>User is Loggin</Text>
      </View>
      :
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={RegisterScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
      }
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

