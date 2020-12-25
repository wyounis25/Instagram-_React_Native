import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';
export default function Landing({navigation}) {
    return (
       <View style={{flex: 1, justifyContent: 'center'}}>
           <Button title="Register"
           onPress={()=> navigation.naviagate('Register')}/>
           <Button title="Login"
           onPress={()=> navigation.naviagate('Login')}/>
       </View>
    )
}